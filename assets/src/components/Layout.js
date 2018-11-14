import { connect } from "react-redux"
import { Component } from "react"
import styled from "styled-components"

const FlashMessage = styled.p.attrs({
  className: ({ messageColour }) =>
    `w-100 pv1 bg-light-red tc white bg-${messageColour}`,
})``

class Layout extends Component {
  render() {
    const { flash, children } = this.props
    return (
      <main>
        {flash.info && (
          <FlashMessage messageColour="green">{flash.info}</FlashMessage>
        )}
        {flash.warning && (
          <FlashMessage messageColour="yellow">{flash.warning}</FlashMessage>
        )}
        {flash.error && (
          <FlashMessage messageColour="red">{flash.error}</FlashMessage>
        )}
        <div className="w-100 vh-100 flex">
          <section className="w-50 bg-blue">{children}</section>
          <section className="w-50 bg-light-blue" />
        </div>
      </main>
    )
  }
}

export default connect(({ flash }) => ({
  flash,
}))(Layout)