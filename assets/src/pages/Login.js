import { Component } from "react"
import { connect } from "react-redux"

import { signIn } from "../state/actions/auth"
import { setErrorFlash } from "../state/actions/flash"

import { BodyText, Headline } from "../components/Text"
import { RoundButton } from "../components/Button"
import { Input } from "../components/Form"

const SubmitButton = RoundButton.withComponent("button")

class SignUp3 extends Component {
  state = {
    code: "",
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.signIn({ code: this.state.code }, () =>
      this.props.history.push("/chat")
    )
  }

  onCodeChange = e => {
    this.setState({ code: e.target.value })
  }

  render() {
    return (
      <section>
        <Headline className="mb2">Nice to see you again!</Headline>

        <BodyText className="mb7">
          If you have spoken to us before please enter your code below
        </BodyText>
        <form onSubmit={this.onSubmit}>
          <div className="flex flex-column flex-row-ns items-center mb4">
            <Input
              onChange={this.onCodeChange}
              type="text"
              placeholder="Your code"
              className="mb4 mb0-ns mr3-ns"
            />
            <SubmitButton type="submit" />
          </div>
        </form>
      </section>
    )
  }
}

export default connect(
  null,
  { signIn, setErrorFlash }
)(SignUp3)
