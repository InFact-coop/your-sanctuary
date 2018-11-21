import { Component } from "react"
import styled from "styled-components"
import advisorGreen from "../static/icons/Advisor_green.svg"
import advisorRed from "../static/icons/Advisor_red.svg"
import { checkIfInHours } from "../utils/hours"

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

const AdvisorDesktop = () => <Advisor available={checkIfInHours()} />

export { AdvisorDesktop }
