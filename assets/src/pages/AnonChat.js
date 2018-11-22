import { Component } from "react"
import { Headline, Subline, BodyText } from "../components/Text"
import {
  initScript,
  reloadCrispSession,
  insertCrispScript,
} from "../utils/crisp"
import { AdvisorMobile } from "../components/Advisor"

class AnonChat extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", reloadCrispSession)
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", reloadCrispSession)
  }

  render() {
    if (!window.$crisp) insertCrispScript()

    initScript()

    if (!window.$crisp) return <div />

    return (
      <div>
        <Headline className="mb2">
          Supporting Survivors of Domestic Abuse
        </Headline>
        <Subline className="mb4">
          We offer sanctuary, support and empowerment to anyone affected by
          Domestic Abuse.
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
        <AdvisorMobile />
      </div>
    )
  }
}

export default AnonChat
