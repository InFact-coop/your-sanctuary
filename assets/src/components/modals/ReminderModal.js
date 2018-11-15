import { connect } from "react-redux"
import styled from "styled-components"
import { withRouter } from "react-router-dom"
import { compose } from "redux"

import { Headline, Subline } from "../Text"
import { Button } from "../Button"

import success from "../../static/icons/success.svg"

const ModalContainer = styled.div.attrs({
  className: "flex items-center justify-center blue",
})`
  background-color: rgba(51, 51, 51, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
`

const ModalContent = styled.div.attrs({
  className: "bg-near-white pa7-ns pv7-ns ph5 pv6 tc",
})`
  width: 90%;
  @media screen and (min-width: 30em) {
    width: 35vw;
  }
`

const ReminderModal = ({ history }) => (
  <ModalContainer onClick={() => history.push("/login")}>
    <ModalContent>
      <img src={success} className="mb4" alt="Success" />
      <Headline>Thank you!</Headline>
      <Subline className="mb4">
        Check your email to retrieve your unique code.
      </Subline>

      <Button buttonColour="white" onClick={() => history.push("/login")}>
        Continue
      </Button>
    </ModalContent>
  </ModalContainer>
)

export default compose(withRouter)(ReminderModal)
