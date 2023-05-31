import { defineStore } from "pinia";
import { reactive, computed } from "vue";

import axiosInstance from "@/services/DashboardService/axiosConfig";
import DashboardService from "@/services/DashboardService/Service";
import AuthService from "@/services/AuthService/Service";
import { validateToken } from "@/utils/auth/ValidateToken";
import { useState } from "@/composables/useState";
import { useAlertStore } from "@/stores/alerts";

import type { AuthState, User } from "../types";
import { useDashboardStore } from "@/modules/Dashboard/stores/dashboard";
import type { MembershipSetupData } from "@/modules/Membership/types";

export const useAuthStore = defineStore("auth", () => {
  const { User, AuthToken } = useState();
  const verifyUser = (user: any) => user && validateToken(AuthToken.value);

  const defaultUserState = { user: null, isLoggedIn: false }

  const initialState: {user: null | User; isLoggedIn: boolean; } = verifyUser(User.value) ? { user: JSON.parse(User.value!), isLoggedIn: true } : defaultUserState;
  
  const state = reactive<AuthState>({
    status: { isLoading: false, success: false, error: false },
    ...initialState
  });

  const error = computed(() => state.status.error);
  const isLoading = computed(() => state.status.isLoading);
  const user = computed(() => state.user);
  const userId = computed(() => state.user?.user_id);
  const username = computed(() => state.user?.username);
  const isOriented = computed(() => state.user?.is_oriented);
  
  // === helper functions ===
  function statusReset() {
    state.status.success = false
    state.status.error = false
    state.status.isLoading = false
  }
  function statusLoading() {
    state.status.isLoading = true
  }
  function loginSuccessful(user: any) {
    state.user = user
    state.isLoggedIn = true
    state.status.success = true
    state.status.isLoading = false
  }
  function loginFailure() {
    Object.assign(state, defaultUserState);
    
    state.status.error = true;
    state.status.isLoading = false;
    setTimeout(() => {
      state.status.error = false;
    }, 5000);
  }
  // === end ===
  // TODO: for the error alert notifications, use the error codes to give a more detailed error message

  const alerts = useAlertStore()

  async function login(payload: { username: string; password: any }) {
    statusLoading()
    try {
      const response = await AuthService.login_user(payload)
      const userDetails = { ...response.data };
      User.value = JSON.stringify({ ...userDetails }) as any;
      AuthToken.value = response.data.token;

      (axiosInstance.defaults.headers as any)["Authorization"] = `Bearer ${ response.data.token }`;
      
      loginSuccessful(userDetails)
      // alerts.success("You're logged in")
      return response.data
    } catch(error: any) {
      loginFailure()
      if (error.response.status === 0) {
        alerts.error("Network error. Please check your network and try again");
      } else if (error.response.status === 401) {
        alerts.error("Username or password is incorrect");
      } else {
        alerts.error("Something went wrong. Please try again later");
      }
      return error
    } finally {
      setTimeout(() => statusReset(), 7000)
    }
  }

  const dashboardStore = useDashboardStore();
  function logout() {
    User.value = null
    AuthToken.value = null

    dashboardStore.storeReset();

    loginFailure()
  }
  async function password_reset_request_email(email: { email: string; }) {
    statusLoading()
    try {
      const response = await AuthService.password_reset_request(email)
      alerts.success('A password reset link has been sent to your email. Use the link to continue')
      return response
    } catch (error) {
      // use the error code to display better error messages
      alerts.error('Unable to process your request. Please try again later')
      return error
    } finally {
      statusReset()
    }
  }
  async function password_reset(data: { password: string; token: string; }) {
    statusLoading()
    try {
      const response = await AuthService.password_reset_confirm(data)
      alerts.success('Your password has been successfully updated')
      return response
    } catch (error: any) {
      let message = ''
      if (error.status == 400) {
        message = 'Bad request. Every field is required.'
      } else if (error.status == 404) {
        message = 'Expired token or user does not exist.'
      } else {
        message = 'Unable to complete your request. Please try again.'
      }
      alerts.error(message)
      return error
    } finally {
      statusReset()
    }
  }
  function toggle_is_oriented(value: boolean = false) {
    if (state.user) state.user.is_oriented = value
  }
  async function completed_orientation() {
    statusLoading()
    try {
      const response = await DashboardService.orientation_completed()
      alerts.success("Congratulations! You've successfully completed the onboarding. Enjoy using your dashboard.")
      return response.data
    } catch (error: any) {
      alerts.error(`${error.message}. Unable to register completion of onboarding`)
      return error
    } finally {
      toggle_is_oriented(true)
      statusReset()
    }
  }
  async function membership_setup(memberData: MembershipSetupData) {
    statusLoading()
    try {
      const response = await AuthService.membership_setup(memberData)
      if (response.status === 200) {
        alerts.warning('A user with these details already exist in the system')
      }
      if (response.status === 201) {
        alerts.success('Your details have been successfully submitted')
      }
      return response.data
    } catch (error: any) {
      if (error.response.status === 400) {
        for (const err in error.response.data.errors) {
          alerts.warning(error.response.data.errors[err].detail, { timeout: 10000 })
        }
      }
      if (error.message == 'Network Error') {
        alerts.error('Kindly check your network connection and try again.')
      }
      return error
    } finally {
      statusReset()
    }
  }

  return {
    error,
    isLoading,
    user,
    userId,
    username,
    isOriented,
    login,
    logout,
    password_reset_request_email,
    password_reset,
    toggle_is_oriented,
    completed_orientation,
    membership_setup,
  }
});