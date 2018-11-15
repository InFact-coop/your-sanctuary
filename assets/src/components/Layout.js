import { connect } from "react-redux"
import { Component } from "react"
import styled from "styled-components"
import { FooterText } from "./Text"
import lady from "../static/images/image_bg.png"
import logo from "../static/images/logo_transparent.png"

const FlashMessage = styled.p.attrs({
  className: ({ messageColour }) =>
    `w-100 pv1 tc white font-7 bg-${messageColour}`,
})``

const MainImageWeb = styled.div.attrs({
  className: "w-50 dn db-ns",
})`
  background-image: url(${lady});
  background-size: cover;
  background-repeat: no-repeat;
`

const MainContent = styled.div.attrs({
  className:
    "w-100 vh-100 w-50-ns bg-near-white blue shadow-4-ns z-2 sans-serif tc tl-ns",
})`
  min-height: 100vh;
  overflow: scroll;
`

const LogoImg = styled.img.attrs({
  src: logo,
})`
  height: 5rem;
`

const Logo = () => (
  <div className="flex justify-center justify-start-ns pt1 pt7-ns mt6-ns mv5 ml7-ns pl4-ns">
    <LogoImg />
  </div>
)

const Footer = styled.div.attrs({
  className:
    "w-100 bg-blue white mt3 h4-ns pa4-ns pa3 tc tl-ns flex flex-column justify-between",
})`
  position: sticky;
  top: 100vh;
  @media (max-width: 30em) {
    height: 6rem;
  }
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
          <Logo />
          <div className="mh2 mh7-ns ph4-ns">{children}</div>
          <Footer>
            <FooterText className="mh7-ns">
              This service is available <b>Monday-Friday 10am-2pm</b>
            </FooterText>
            <a
              href="../static/your-sanctuary-privacy-policy.pdf"
              download
              className="mh7-ns white font-7 font-6-ns"
            >
              Privacy Policy
            </a>
          </Footer>
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
