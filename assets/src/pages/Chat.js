import { Component } from "react"
import { connect } from "react-redux"
import { Headline, Subline } from "../components/Text"

class Chat extends Component {
  insertCrispScript = () => {
    const uuid = sessionStorage.getItem("uuid")

    if (!window.$crisp) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.innerHTML = `$crisp = [];CRISP_TOKEN_ID = '${uuid}';CRISP_WEBSITE_ID = "eb431f6c-af5b-4a5b-8822-b71066070599";(function(){d=document;s=d.createElement('script');s.src='//client.crisp.chat/l.js';s.async=1;d.getElementsByTagName('head')[0].appendChild(s);})();`
      document.head.appendChild(script)
    }
  }

  signOut = () => {
    window.$crisp.push(["set", "session:data", [[["waiting", false]]]])
    const data = window.$crisp.get("session:data")
    if (data.consent && (data.consent === "no" || data.consent === null)) {
      window.$crisp.push(["do", "session:reset", [false]])
    }
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("uuid")
    window.location.reload(true)
  }

  render() {
    const uuid = sessionStorage.getItem("uuid")

    if (!window.$crisp) this.insertCrispScript()

    const initScript = () => {
      if (window.$crisp) {
        return window.$crisp.push(["do", "chat:open"])
      }
      return setImmediate(initScript) // eslint-disable-line
    }

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
        <Subline className="mb4 mb7-ns">
          Your code is: <b>{uuid}</b>
        </Subline>
        <Subline
          onClick={() => this.signOut()}
          className="mb4 underline mb7-ns"
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
