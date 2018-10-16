const { intercomSettings } = window

const showIntercom = () => window.Intercom
  ? window.Intercom('show')
  : null

export const handleIntercomLaunch = () => {
  if (intercomSettings) {
    intercomSettings.autoShow ? showIntercom() : null
  }
}
