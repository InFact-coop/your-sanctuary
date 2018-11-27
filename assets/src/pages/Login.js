import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { signIn } from "../state/actions/auth"
import { setErrorFlash } from "../state/actions/flash"

import { BodyText, Headline } from "../components/Text"
import { RoundButton } from "../components/Button"
import { Input } from "../components/Form"

const SubmitButton = RoundButton.withComponent("button")

class Login extends Component {
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
        <Headline className="mb2">Welcome back</Headline>

        <BodyText className="mb7">
          If you have spoken to us before please enter your code below
        </BodyText>
        <form onSubmit={this.onSubmit}>
          <div className="flex flex-column flex-row-ns items-center items-start-ns justify-center-s mb4">
            <div className="flex flex-column">
              <Input
                onChange={this.onCodeChange}
                type="text"
                placeholder="Your code"
                className="mb4 mb0-ns mr3-ns"
                required
              />
              <Link
                to="/forgot-code"
                className="font-7 blue tc-ns mt2-ns mb4 mb0-ns"
              >
                I forgot my code
              </Link>
            </div>
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
)(Login)
