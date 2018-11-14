import { connect } from "react-redux"
import { Component } from "react"
import styled from "styled-components"

const FlashMessage = styled.p.attrs({
  className: ({ messageColour }) =>
    `w-100 pv1 tc white font-7 bg-${messageColour}`,
})``

const MainImageWeb = styled.div.attrs({
  className: "w-50 dn db-ns",
})`
  background-image: url("../static/images/image_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
`

const MainContent = styled.div.attrs({
  className:
    "w-100 vh-100 w-50-ns bg-near-white blue shadow-4-ns z-2 sans-serif",
})``

const Footer = styled.div.attrs({
  className: "w-50-ns w-100 bg-blue white font-6 h3 h4-ns",
})`
  position: fixed;
  bottom: 0;
`

const FooterRight = styled.div.attrs({
  className: "bg-light-blue w-100 dn db-ns shadow-5 h3-ns",
})`
  position: fixed;
  bottom: 0;
`

class Layout extends Component {
  render() {
    const { flash, children } = this.props
    return (
      <main className="flex sans-serif">
        <MainContent>
          {flash.info && (
            <FlashMessage messageColour="green">{flash.info}</FlashMessage>
          )}
          {flash.warning && (
            <FlashMessage messageColour="yellow">{flash.warning}</FlashMessage>
          )}
          {flash.error && (
            <FlashMessage messageColour="red">{flash.error}</FlashMessage>
          )}
          {children}
          <Footer />
        </MainContent>
        <MainImageWeb>
          <FooterRight />
        </MainImageWeb>
      </main>
    )
  }
}

export default connect(({ flash }) => ({
  flash,
}))(Layout)
