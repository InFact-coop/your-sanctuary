import { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"
import { clearFlashMessages } from "../state/actions/flash"

class OnNavigate extends Component {
  componentDidUpdate(prevProps) {
    const { location, clearFlashMessages } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
      clearFlashMessages()
    }
  }

  render() {
    return this.props.children
  }
}

export default compose(
  withRouter,
  connect(
    null,
    { clearFlashMessages }
  )
)(OnNavigate)
