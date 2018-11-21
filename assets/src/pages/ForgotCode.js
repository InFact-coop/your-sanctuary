import { Component } from "react"
import { connect } from "react-redux"

import { requestCodeReminder } from "../state/actions/auth"

import { BodyText } from "../components/Text"
import { RoundButton } from "../components/Button"
import { Input } from "../components/Form"

const SubmitButton = RoundButton.withComponent("button")

class ForgotCode extends Component {
  state = {
    email: "",
  }

  setEmail = e => {
    this.setState({ email: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const { requestCodeReminder } = this.props
    requestCodeReminder({ email: this.state.email })
  }

  render() {
    return (
      <section>
        <BodyText className="mb4">
          To get a reminder of your code, enter your email* below:
        </BodyText>
        <form onSubmit={this.onSubmit}>
          <div className="flex flex-column items-center flex-row-ns mb4">
            <Input
              onChange={this.setEmail}
              type="email"
              placeholder="Your email"
              className="mb4 mb0-ns mr3-ns"
              required
            />
            <SubmitButton type="submit" />
          </div>

          <p className="mr3-ns mb4 font-6">
            Your reminder email will appear as a simple unbranded message in
            your inbox. This is to avoid anyone else who may have access to
            your inbox accessing your confidential chat.
          </p>
          <p className="mr3-ns font-7 mb4">
            *We will never use your email address other than to remind you of
            your code.
          </p>
        </form>
      </section>
    )
  }
}

export default connect(
  null,
  { requestCodeReminder }
)(ForgotCode)
