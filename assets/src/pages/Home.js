import styled from "styled-components"
import { Component } from "react"
import { connect } from "react-redux"

import { Subline, SubButtonText, BodyText } from "../components/Text"
import { Button } from "../components/Button"
import { AdvisorMobile } from "../components/Advisor"

const HomeHeadline = styled.p.attrs({
  className: "font-3 font-1-ns b blue",
})``

const ButtonCreator = ({ inHours, history }) =>
  inHours ? (
    <div className="flex-ns justify-between w-100-ns">
      <div className="flex flex-column mb4 mb0-ns tc w-70 center w-50-ns mr1-ns">
        <Button
          buttonColour="white"
          className="mr2-ns mb3"
          onClick={() => history.push("/signup-1")}
        >
          Chat to us
        </Button>
        <SubButtonText className="mr2-ns">
          To start talking straight away click here to receive your unique code
        </SubButtonText>
      </div>
      <div className="flex flex-column mb4 mb0-ns w-70 center tc w-50-ns ml1-ns">
        <Button
          buttonColour="white"
          className="ml2-ns mb3"
          onClick={() => history.push("/login")}
        >
          Continue a conversation
        </Button>
        <SubButtonText className="ml2-ns">
          If you have spoken to us before and have an access code
        </SubButtonText>
      </div>
    </div>
  ) : (
    <div>
      <BodyText>
        Unfortunately our live chat service is not available at the moment.
      </BodyText>
      <div className="flex flex-column mb4 tc w-100 w-50-ns h-100">
        <Button
          buttonColour="white"
          className="mr2-ns mt4 mb3 mh6 mh0-ns"
          onClick={() => history.push("/anonymous-chat")}
        >
          Click here
        </Button>
        <SubButtonText className="mr2-ns mh7 mh0-ns">
          Please click here to find out more about Refuge, Housing and Legal
          Advice.
        </SubButtonText>
        <AdvisorMobile available={inHours} />
      </div>
    </div>
  )

class Home extends Component {
  render() {
    const { history, initAnonymousChat, crisp } = this.props

    return (
      <section>
        <HomeHeadline className="mb2"> Confidential </HomeHeadline>
        <Subline className={crisp.crisp_online ? "mb4 mb7-ns" : "mb4 mb1-ns"}>
          Free confidential chat offering you support when you need it.
        </Subline>

        <ButtonCreator
          inHours={crisp.crisp_online}
          history={history}
          initAnonymousChat={initAnonymousChat}
        />
      </section>
    )
  }
}

export default connect(({ crisp }) => ({
  crisp,
}))(Home)
