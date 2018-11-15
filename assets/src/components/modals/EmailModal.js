import { connect } from "react-redux"
import styled from "styled-components"

import { clearFlashMessages } from "../../state/actions/flash"

import { Headline, BodyText, Subline } from "../Text"
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

const EmailModal = ({ clearFlashMessages }) => (
  <ModalContainer onClick={clearFlashMessages}>
    <ModalContent>
      <img src={success} className="mb4" alt="Success" />
      <Headline>Thank you!</Headline>
      <Subline className="mb4">We have now added your email</Subline>
      <BodyText className="mb4">
        Just a reminder that we will never use your email address other than to
        remind you of your code and that when we send you your reminder email it
        will appear in your inbox as promotional code to win a prize.
      </BodyText>
      <Button buttonColour="white" onClick={clearFlashMessages}>
        Start chatting
      </Button>
    </ModalContent>
  </ModalContainer>
)

export default connect(
  null,
  { clearFlashMessages }
)(EmailModal)
