const helpers = require('./domHelpers.js')

const timesOfDay = [
  'afternoon',
  'evening'
]

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'any'
]

// grabs the visible button for time of day and the hidden radio input
const getVisibleButton = (timeOfDay) => document.querySelector(`[${timeOfDay}]`)
const getRadioInput = (timeOfDay) => document.querySelector(`[${timeOfDay}-radio]`)

const getButtonRadioPair = (timeOfDay) => {
  return {
    button: getVisibleButton(timeOfDay),
    radio: getRadioInput(timeOfDay)
  }
}

const clickHiddenRadio = (radio) => radio
  ? radio.click()
  : null

const addButtonListener = (buttons) => ({ button, radio }) => {
  if (button && radio) {
    button.addEventListener('click', () => {
      updateActiveClasses(buttons, button)
      clickHiddenRadio(radio)
    })
    return { button, radio }
  }
}

const updateActiveClasses = (buttons, buttonToActivate) => {
  const backgroundClasses = [ 'white', 'bg-dark-red' ]
  removeActiveClasses(backgroundClasses, buttons)
  addActiveClasses(backgroundClasses, buttonToActivate)
}

const removeActiveClasses = (backgroundClasses, buttons) => {
  buttons.map(button => {
    removeActiveImageClass(button)
    backgroundClasses.map(helpers.removeClass(button))
  })
}

const addActiveClasses = (activeClasses, buttonToActivate) => {
  addActiveImageClass(buttonToActivate)
  activeClasses.map(helpers.addClass(buttonToActivate))
}

const addActiveImageClass = (button) => {
  if (button.firstElementChild) {
    helpers.addClass(button.firstElementChild)('invert')
  }
}

const removeActiveImageClass = (button) => {
  if (button.firstElementChild) {
    helpers.removeClass(button.firstElementChild)('invert')
  }
}

const handleTimeOptions = () => {
  const timeButtons = timesOfDay.map(getVisibleButton)
  const dayButtons = daysOfWeek.map(getVisibleButton)

  timesOfDay
    .map(getButtonRadioPair)
    .map(addButtonListener(timeButtons))
    .filter(timePair => timePair ? timePair.radio.checked : null)
    .map(timePair => timePair ? updateActiveClasses(timeButtons, timePair.button) : null)

  daysOfWeek
    .map(getButtonRadioPair)
    .map(addButtonListener(dayButtons))
    .filter(dayPair => dayPair ? dayPair.radio.checked : null)
    .map(dayPair => dayPair ? updateActiveClasses(dayButtons, dayPair.button) : null)
}

export default handleTimeOptions
