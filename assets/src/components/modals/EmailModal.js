import { connect } from "react-redux"

import { ModalContainer, ModalContent } from "./Modal"
import success from "../../static/icons/success.svg"

import { Button } from "../Button"
import { Headline, BodyText, Subline } from "../Text"

import { clearFlashMessages } from "../../state/actions/flash"

const EmailModal = ({ clearFlashMessages }) => (
  <ModalContainer onClick={clearFlashMessages}>
    <ModalContent>
      <img src={success} className="mb4" alt="Success" />
      <Headline>Thank you!</Headline>
      <Subline className="mb4">We have now added your email</Subline>
      <BodyText className="mb4">
        Just a reminder that{" "}
        <span className="underline">
          we will never use your email address other than to remind you of your
          code
        </span>{" "}
        and that when we send you your reminder email{" "}
        <span className="underline">
          it will appear as a simple unbranded message in your inbox.
        </span>
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
