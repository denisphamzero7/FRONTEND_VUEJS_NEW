import { ref, watch } from 'vue'

interface SettingsMap {
  general: GeneralSettings
  privacy: PrivacySettings
  notification: NotificationsSettings
}
type SettingsKey = keyof SettingsMap


const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key)
  return stored != null ? (JSON.parse(stored) as SettingsMap[T]) : defaults
}

interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const general = ref<GeneralSettings>(
  init('general', {
    about: '',
    country: 'USA',
    gender: 'male',
    email: '',
    username: '',
  }),
)
const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
watch(general, watcher('general'), { deep: true })
interface NotificationsSettings {
  email: boolean
  sms: boolean
}
const notification = ref<NotificationsSettings>(
  init('notification', {
    email: false,
    sms: false,
  }),
)
watch(notification, watcher('notification'), { deep: true })
interface NotificationsSettings {
  email: boolean
  sms: boolean
}
interface PrivacySettings {
  visibility: string
  seachEngineIndexing: boolean
}
const privacy = ref<PrivacySettings>(
  init('privacy', {
    visibility: '',
    seachEngineIndexing: false,
  }),
)
watch(privacy, watcher('privacy'), { deep: true })
interface NotificationsSettings {
  email: boolean
  sms: boolean
}
export function useSettings() {
  return {
    general,
    notification,
    privacy,
  }
}
