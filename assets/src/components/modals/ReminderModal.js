import { withRouter } from "react-router-dom"
import { compose } from "redux"

import { Headline, Subline } from "../Text"
import { Button } from "../Button"
import { ModalContainer, ModalContent } from "./Modal"

import success from "../../static/icons/success.svg"

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
