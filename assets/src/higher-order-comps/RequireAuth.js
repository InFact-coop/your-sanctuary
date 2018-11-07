import React, { Component } from "react"
import { connect } from "react-redux"

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth.token) {
        this.props.history.push("/")
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  return connect(({ auth }) => ({ auth }))(ComposedComponent)
}