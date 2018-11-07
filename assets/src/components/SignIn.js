import { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { signIn } from "../state/actions/auth"

class SignIn extends Component {
  state = {
    code: "",
  }

  setCode = e => {
    this.setState({ code: e.target.value })
  }

  handleSubmit = () => {
    const { signIn, history } = this.props
    signIn({ code: this.state.code }, () => history.push("/chat"))
  }

  render() {
    return (
      <section>
        <input
          type="password"
          autoComplete="off"
          value={this.state.code}
          onChange={this.setCode}
        />
        <button onClick={this.handleSubmit}>Return to chat</button>
      </section>
    )
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { signIn }
  )
)(SignIn)
