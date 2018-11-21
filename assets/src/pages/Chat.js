import { Component } from "react"
import { connect } from "react-redux"
import { Headline, Subline, BodyText } from "../components/Text"
import {
  initScript,
  insertCrispScript,
  reloadCrispSession,
} from "../utils/crisp"

class Chat extends Component {
  signOut = () => {
    reloadCrispSession()
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("uuid")
    window.location.reload(true)
  }

  render() {
    const uuid = sessionStorage.getItem("uuid")

    if (!window.$crisp) insertCrispScript()

    initScript()

    if (!uuid || !window.$crisp) return <div />

    return (
      <div>
        <Headline className="mb2">
          Supporting Survivors of Domestic Abuse
        </Headline>
        <Subline className="mb4">
          We offer sanctuary, support and empowerment to anyone affected by
          Domestic Abuse.
        </Subline>
        <Subline className="mb4">
          Your code is: <b>{uuid}</b>
        </Subline>
        <BodyText className="mb4">
          Please note - during the chat you may be sent links to external
          websites for more information and advice. For your safety, we
          recommend that you delete your web history once you have finished your
          chat. If you need advice on how to do this then please visit&nbsp;
          <a
            href="https://www.yoursanctuary.org.uk/cover-your-tracks-online"
            target="_blank"
            rel="noopener noreferrer"
            className="blue b"
          >
            our website.
          </a>
        </BodyText>
        <Subline
          onClick={() => this.signOut()}
          className="mb4 underline mb7-ns pointer"
        >
          Log out here
        </Subline>
      </div>
    )
  }
}

export default connect(({ auth }) => ({
  auth,
}))(Chat)
