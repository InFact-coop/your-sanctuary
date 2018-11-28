const checkIfInHours = () => {
  const today = new Date()
  const day = today.getDay()
  const hour = today.getHours()

  if (day < 1 || day > 5) {
    return false
  }

  if (hour < 10 || hour > 16) {
    return false
  }

  return true
}

export { checkIfInHours }
