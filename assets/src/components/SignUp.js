import { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { signUp } from "../state/actions/auth"

class SignUp extends Component {
  state = {
    email: "",
  }

  setEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = () => {
    const { signUp, history } = this.props
    signUp({ email: this.state.email }, () => history.push("/chat"))
  }

  render() {
    return (
      <section>
        <input type="email" value={this.state.email} onChange={this.setEmail} />
        <button onClick={this.handleSubmit}>Start new chat</button>
      </section>
    )
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { signUp }
  )
)(SignUp)
