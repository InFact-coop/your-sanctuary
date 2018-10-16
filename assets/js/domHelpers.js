const helpers = {}

helpers.removeClass = (el) => (className) => el.classList.remove(className)
helpers.addClass = (el) => (className) => el.classList.add(className)

module.exports = helpers
