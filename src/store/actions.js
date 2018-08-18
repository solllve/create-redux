export const TYPES = {
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SHOW_ALERT: 'SHOW_ALERT'
}

export const actions = {
  setNotifications: (bool) => ({ type: TYPES.SET_NOTIFICATIONS, bool })
}
