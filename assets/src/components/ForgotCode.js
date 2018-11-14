import { Component } from "react"
import { connect } from "react-redux"
import { requestCodeReminder } from "../state/actions/auth"

class ForgotCode extends Component {
  state = {
    email: "",
  }

  setEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = () => {
    const { requestCodeReminder } = this.props
    requestCodeReminder({ email: this.state.email })
  }

  render() {
    return (
      <section className="mh4 mb4 flex justify-center ">
        <input
          className="pa2"
          type="email"
          autoComplete="off"
          value={this.state.email}
          onChange={this.setEmail}
        />
        <button className="ml3 pa2" onClick={this.handleSubmit}>
          Request reminder email
        </button>
      </section>
    )
  }
}

export default connect(
  null,
  { requestCodeReminder }
)(ForgotCode)
