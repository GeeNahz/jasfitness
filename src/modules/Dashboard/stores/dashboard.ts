import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { ChangePassword, DashboardState, Payload, ShareSubscription, FreezeStatus } from "../types";

import DashboardService from "@/services/DashboardService/Service"
import { useAlertStore } from "@/stores/alerts";
import { useFetchData } from "@/composables/fetch";

/**linkdIn profile refactor
 * CPE in view
 * full stack developer (python & javascript)
 */

export const useDashboardStore = defineStore("dashboard", () => {
  const defaultState: DashboardState = {
    status: { success: false, isLoading: false, error: false },
    profile: null,
    dashboardBase: null,
    dashboardFitness: null,
    dashboardGymAttendance: null,
    dashboardSubscription: null,
    dashboardFitnessAssessment: null,
    modals: {
      accessmentRecord: { id: "accessmentRecord", open: false, },
      feedback: { id: "feedback", open: false, },
      freezeSub: { id: "freezeSub", open: false, },
      healthRecord: { id: "healthRecord", open: false, },
      passwordReset: { id: "passwordReset", open: false, },
      profile: { id: "profile", open: false, },
      shareSub: { id: "shareSub", open: false, },
    },
    freezedSubStatus: { details: { message: "" }, is_freezed: false },
  };
  
  const state = reactive<DashboardState>({
    ...defaultState
  });

  const dashboardBase = computed(() => state.dashboardBase);
  const gymAttendance = computed(() => state.dashboardGymAttendance);
  const assessmentState = computed(() => state.dashboardFitnessAssessment);
  const dashboardSub = computed(() => state.dashboardSubscription);
  const freezedSubDetail = computed(() => state.freezedSubStatus);
  const dashboardFitness = computed(() => state.dashboardFitness);
  const profileState = computed(() => state.profile);

  const isLoading = computed(() => state.status.isLoading);
  
  const profileModal = computed(() => state.modals.profile);
  const freezeSubscriptionModal = computed(() => state.modals.freezeSub);
  const assessmentRecordModal = computed(() => state.modals.accessmentRecord);
  const shareSubscriptionModal = computed(() => state.modals.shareSub);
  const passwordResetModal = computed(() => state.modals.passwordReset);

  // === helper functions ===  
  function storeReset() {
    Object.assign(state, defaultState);
  }
  function toggleModal(modal_id: string) {
    for (const k in state.modals) {
      const key = k as keyof typeof state.modals
      if ((state.modals[key].id) === modal_id) {
        state.modals[key].open = !state.modals[key].open
      }
    }
  }
  function statusLoading() {
    state.status.isLoading = true
  }
  function statusReset() {
    state.status.success = false;
    state.status.isLoading = false;
    state.status.error = false;
  }

  type PayloadKey = keyof typeof state
  function setDashboardItem(dashboardItemName: PayloadKey, payload: Payload) {
    state[dashboardItemName] = payload;
  }
  // === end ===

  // TODO: use "statusCode" from "useFetchData()" to provide detailed error messages
  const alerts = useAlertStore();
  async function dashboard_home() {
    statusLoading();
    const { data, errorData, success, isFetching, error, statusCode } = await useFetchData(DashboardService.dashboard_home)
    if (isFetching.value) {
      statusLoading();
    } else {
      statusReset();
    }

    if (success.value) {
      setDashboardItem("dashboardBase", data.value);
      return data.value;
    } else if (error.value) {
      setDashboardItem("dashboardBase", null);
      if (statusCode.value === 0) {
        alerts.error("Network error. Please check your network and try again");
      } else {
        alerts.error("Something went wrong while fetching your records. Refresh the browser to try fix it");
      }
      return errorData.value;
    }
  }
  async function dashboard_fitness() {
    const { data, success, error, isFetching, errorData } = await useFetchData(DashboardService.dashboard_fitness_record);

    if (isFetching.value) {
      statusLoading();
    } else {
      statusReset();
    }

    if (success.value) {
      setDashboardItem("dashboardFitness", data.value);
      // alerts.success("Successfully fetched fitness record");
      // return data.value;
    } else if (error.value) {
      setDashboardItem("dashboardFitness", null);
      alerts.error("Something went wrong while fetching fitness records. Refresh the browser to try fix it");
      // return errorData.value;
    }

    return { data, success, error, errorData };
  }
  async function dashboard_gym_attendance(user_id: number) {
    const { data, error, errorData, success, isFetching, statusCode } = await useFetchData(DashboardService.dashboard_gym_attendance, user_id);

    if (isFetching.value) {
      statusLoading();
    } else {
      statusReset();
    }

    if (success.value) {
      setDashboardItem("dashboardGymAttendance", data.value);
      // alerts.success("Fetch gym attendance");
      // return data.value;
    } else if (error.value) {
      setDashboardItem("dashboardGymAttendance", null);
      alerts.error("Something went wrong while fetching gym attendance records. Refresh the browser to try fix it");
      // return errorData.value;
    }

    return { isFetching, statusCode, success, data, error, errorData, };
  }
  async function dashboard_profile(user_id: number) {
    const { data, errorData, error, statusCode, success, isFetching } = await useFetchData(DashboardService.dashboard_profile, user_id);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      setDashboardItem("profile", data.value);
      // alerts.success("Fetched profile record");
      // return data.value;
    } else if (error.value) {
      setDashboardItem("profile", null);
      alerts.error(`${errorData.value}. Unable to retrieve your profile.`);
      // return errorData.value;
    }
    return { data, statusCode, error, errorData, success };
  }
  async function dashboard_subscription() {
    const { data, statusCode, success, isFetching, error, errorData } = await useFetchData(DashboardService.dashboard_subscription);

    isFetching.value ? statusLoading() : statusReset();

    if(success.value) {
      setDashboardItem("dashboardSubscription", data.value);
      // alerts.success("Successfully fetched subscription data");
      // return data.value;
    } else if (error.value) {
      setDashboardItem("dashboardSubscription", null);
      alerts.error("Something went wrong while fetching subscription records. Refresh the browser to try fix it");
      // return errorData.value;
    }

    return { isFetching, data, success, error, errorData };
  }
  async function dashboard_freeze_subscription(duration: number) {
    const { data, statusCode, success, isFetching, error, errorData } = await useFetchData(DashboardService.dashboard_freeze_subscription, duration);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      alerts.success(`You have successfully frozen your sub for ${duration} days`);
    } else if (error.value) {
      alerts.error("Unable to process your request. Please try again");
    }
    return { data, success, error, errorData };
  }
  async function dashboard_share_subscription(data: ShareSubscription) {
    const { data: responseData, success, isFetching, error, errorData, statusCode } = await useFetchData(DashboardService.dashboard_share_subscription, data);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      alerts.success(`You have successfully shared your subscription with ${data.username}`);
    } else if (error.value) {
      if (statusCode.value === 400) {
        alerts.error("Sorry, there is no user using this username");
      } else {
        alerts.error("Could not complete the request. Please try again later");
      }
    }

    return { responseData, success, error, errorData, isFetching };
  }
  async function dashbaord_fitness_assessment(user_id:number) {
    const { isFetching, statusCode, success, data, error, errorData } = await useFetchData(DashboardService.dashboard_assessments, user_id);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      setDashboardItem("dashboardFitnessAssessment", data.value);
      alerts.success("Successfully fetched assessment records");
    } else if (error.value) {
      setDashboardItem("dashboardFitnessAssessment", null);
      alerts.error("Failed to fetch assessment records");
    }
  }
  async function dashboard_fitness_profile() {
    const { isFetching, success, data, error, errorData, statusCode } = await useFetchData(DashboardService.dashboard_fitness_profile);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      setDashboardItem("profile", data.value);
      // alerts.success("Successfully fetched profile record");
    } else if (error.value) {
      setDashboardItem("profile", null);
      if (statusCode.value === 404) {
        alerts.error("No fitness profile was found");
      } else {
        alerts.error("Unable to retrieve your fitness profile");
      }
    }
  }
  async function change_password(password: ChangePassword) {
    const { isFetching, statusCode, success, data, error, errorData } = await useFetchData(DashboardService.change_password, password);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      alerts.success("Your password has been successfully change.");
    } else if (error.value) {
      if (statusCode.value === 400) {
        alerts.error("Invalid password provided");
      } else {
        alerts.error("Unable to complete your request. Please check your network connection");
      }
    }

    return { data, success, error, errorData };
  }
  async function unfreeze_subscription() {
    const { isFetching, statusCode, success, data, error, errorData, response } = await useFetchData(DashboardService.unfreeze_subscription);

    isFetching.value ? statusLoading() : statusReset();

    if (success.value) {
      alerts.success("You have successfully unfreezed your subscription.");
    } else if (error.value) {
      alerts.error("Something went wrong and your subscription was unable to be unfreezed. Please try again");
    }

    return { data, success, error, response, errorData };
  }
  function freezed_sub_toggle(data: FreezeStatus) {
    Object.assign(state.freezedSubStatus, data);
  }

  return {
    isLoading,
    assessmentState,
    dashboardBase,
    dashboardSub,
    freezedSubDetail,
    dashboardFitness,
    profileState,
    gymAttendance,
    profileModal,
    freezeSubscriptionModal,
    assessmentRecordModal,
    shareSubscriptionModal,
    passwordResetModal,
    storeReset,
    toggleModal,
    dashboard_home,
    change_password,
    dashboard_profile,
    dashboard_fitness,
    freezed_sub_toggle,
    unfreeze_subscription,
    dashboard_subscription,
    dashboard_gym_attendance,
    dashboard_fitness_profile,
    dashbaord_fitness_assessment,
    dashboard_share_subscription,
    dashboard_freeze_subscription,
  };
});