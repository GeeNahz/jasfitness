import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from "uuid"

import type { AlertOptions, Alert, ID } from "@/types"

export const useAlertStore = defineStore('alert', () => {
  const state = reactive<{ modals: any; alerts: Alert[]; }>({
    alerts: <Alert[]>[],
    modals: <{}>{ open: false, usernameSearch: { id: "usernameJF", open: false } }
  });

  const alerts = computed(() => state.alerts);
  const modals = computed(() => state.modals)

  const getAlertIndexById = (id: ID) => alerts.value.findIndex(alert => alert.id === id);

  function addAlert(payload: Alert) {
    state.alerts.push({ ...payload });
  }
  function removeAlert(id: ID) {
    const idx = getAlertIndexById(id);
    if (idx > -1) state.alerts.splice(idx, 1);
  }
  const defaultOptions = { timeout: 7000, style: "info" };
  function notify(message: string, options: AlertOptions) {
    const _options = { ...defaultOptions, ...options };
    const id = uuid();
    const details = { ..._options, id };
    addAlert({ message, ...details });
    
    if (_options.timeout) {
      setTimeout(() => {
        removeAlert(id);
      }, _options.timeout);
    }
  }
  function success(message: string, options?: AlertOptions) {
    const _options = { ...options, style: 'success' };
    notify(message, _options);
  }
  function error(message: string, options?: AlertOptions) {
    const _options = { ...options, style: 'danger' };
    notify(message, _options);
  }
  function warning(message: string, options?: AlertOptions) {
    const _options = { ...options, style: 'warning' };
    notify(message, _options);
  }
  function info(message: string, options?: AlertOptions) {
    const _options = { ...options, style: 'info' };
    notify(message, _options);
  }

  function toggleModal(id: string) {
    for (const key in state.modals) {
      if (state.modals[key].id === id) {
        state.modals[key].open = !state.modals[key].open
      }
    }
  }

  return {
    alerts,
    modals,
    notify,
    success,
    error,
    warning,
    info,
    removeAlert,
    toggleModal,
  };
})
