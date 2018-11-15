import { Component } from "react"
import styled from "styled-components"
import advisorGreen from "../static/icons/Advisor_green.svg"
import advisorRed from "../static/icons/Advisor_red.svg"

const AdvisorImage = styled.div.attrs({
  className: "bg-white w3 h3",
})`
  ${({ available }) =>
    available
      ? `background-image: url(${advisorGreen})`
      : `background-image: url(${advisorRed})`};
  background-repeat: no-repeat;
  background-position: center 7px;
  background-size: 70%;
  border-radius: 50%;
`

const Advisor = ({ available }) => (
  <div className="flex-ns flex-column items-center h-100 dn db-ns">
    <AdvisorImage available={available} />
    {available ? (
      <p className="mt2 font-7 tc">Advisors online</p>
    ) : (
      <p className="mt2 font-7 tc">Advisors offline</p>
    )}
  </div>
)

class AdvisorDesktop extends Component {
  checkIfInHours = () => {
    const today = new Date()
    const day = today.getUTCDay()
    const hour = today.getUTCHours()

    if (day < 1 || day > 5) {
      return false
    }

    if (hour < 10 || hour > 13) {
      return false
    }

    return true
  }

  render() {
    return <Advisor available={this.checkIfInHours()} />
  }
}

export { AdvisorDesktop }
