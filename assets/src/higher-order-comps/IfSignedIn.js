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
      if (sessionStorage.getItem("jwt")) {
        this.props.history.push("/chat")
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  return connect(({ auth }) => ({ auth }))(ComposedComponent)
}
