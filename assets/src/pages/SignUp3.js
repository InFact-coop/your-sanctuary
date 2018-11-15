import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { signUp } from "../state/actions/auth"

import { BodyText } from "../components/Text"
import { RoundButton } from "../components/Button"
import { setErrorFlash } from "../state/actions/flash"

const SubmitButton = RoundButton.withComponent("button")

const EmailInput = styled.input.attrs({
  className:
    "b--blue ba font-6 bg-near-white br-pill pa2 w5 tc black-50 outline-0",
})`
  ::placeholder {
    color: var(--black-50);
  }
`

class SignUp3 extends Component {
  state = {
    email: "",
    email_confirmation: "",
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.email !== this.state.email_confirmation) {
      return this.props.setErrorFlash("Confirmation email does not match")
    }
    this.props.signUp({ email: this.state.email }, () =>
      this.props.history.push("/chat")
    )
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  onEmailConfirmationChange = e => {
    this.setState({ email_confirmation: e.target.value })
  }

  render() {
    return (
      <section>
        <BodyText className="mb4">Please enter your email below</BodyText>
        <form onSubmit={this.onSubmit}>
          <div className="flex flex-column items-start-ns items-center mb4">
            <EmailInput
              onChange={this.onEmailChange}
              type="email"
              placeholder="Your email"
              className="mb4"
            />
            <EmailInput
              onChange={this.onEmailConfirmationChange}
              type="email"
              placeholder="Confirm your email"
            />
          </div>

          <div className="flex justify-center items-center justify-end-ns mb4">
            <BodyText className="ttu mr3 b">Next</BodyText>
            <SubmitButton type="submit" />
          </div>
        </form>
      </section>
    )
  }
}

export default connect(
  null,
  { signUp, setErrorFlash }
)(SignUp3)
