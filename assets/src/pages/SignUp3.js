import { Component } from "react"
import { connect } from "react-redux"

import { signUp } from "../state/actions/auth"
import { setErrorFlash } from "../state/actions/flash"

import { BodyText } from "../components/Text"
import { RoundButton } from "../components/Button"
import { Input } from "../components/Form"

import arrowRight from "../static/icons/arrow_right.svg"

const SubmitButton = RoundButton.withComponent("button")

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
            <Input
              onChange={this.onEmailChange}
              type="email"
              placeholder="Your email"
              className="mb4"
              required
            />
            <Input
              onChange={this.onEmailConfirmationChange}
              type="email"
              placeholder="Confirm your email"
              required
            />
          </div>

          <div className="flex justify-center items-center justify-end-ns mb4">
            <BodyText className="ttu mr3 b">Next</BodyText>
            <SubmitButton type="submit" image={arrowRight} />
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
