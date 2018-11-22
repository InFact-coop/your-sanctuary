import styled from "styled-components"
import advisorGreen from "../static/icons/Advisor_green.svg"
import advisorRed from "../static/icons/Advisor_red.svg"
import { checkIfInHours } from "../utils/hours"

const AdvisorImage = styled.div.attrs({
  className: ({ shadow }) =>
    shadow ? "shadow-2 bg-white w3 h3" : "bg-white w3 h3",
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

const Advisor = ({ available, shadow }) => (
  <div className="flex flex-column items-center">
    <AdvisorImage available={available} shadow={shadow} />
    {available ? (
      <p className="mt2 font-7 tc">Advisors online</p>
    ) : (
      <p className="mt2 font-7 tc">Advisors offline</p>
    )}
  </div>
)

const AdvisorDesktop = () => (
  <div className="h-100 dn db-ns">
    <Advisor available={checkIfInHours()} shadow={false} />
  </div>
)

const AdvisorMobile = () => (
  <div className="db dn-ns">
    <Advisor available={checkIfInHours()} shadow={true} />
  </div>
)

export { AdvisorDesktop, AdvisorMobile }
