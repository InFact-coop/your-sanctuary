import { Component } from "react"
import { connect } from "react-redux"

import Title from "../components/Title"

class Chat extends Component {
  componentDidMount() {
    if (!sessionStorage.getItem("uuid"))
      sessionStorage.setItem("uuid", this.props.auth.uuid)
  }
  insertCrispScript = () => {
    const {
      auth: { uuid },
    } = this.props

    if (!window.$crisp) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.innerHTML = `$crisp = [];CRISP_TOKEN_ID = '${uuid}';CRISP_WEBSITE_ID = "eb431f6c-af5b-4a5b-8822-b71066070599";(function(){d=document;s=d.createElement('script');s.src='//client.crisp.chat/l.js';s.async=1;d.getElementsByTagName('head')[0].appendChild(s);})();`
      document.head.appendChild(script)
    }
  }

  signOut = () => {
    window.$crisp.push(["do", "chat:hide"])
    window.$crisp.push(["do", "session:reset", [false]])
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("uuid")
    return true
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

    return (
      <div>
        {window.$crisp && { uuid } && (
            <main className="tc">
              <Title />
              <p className="f3 mv5 sans-serif">
                Your code is <b>{uuid}</b>, don't forget it!{" "}
              </p>
              <p className="f3 mv2 sans-serif">
                Done chatting? Sign out securely{" "}
                <a onClick={this.signOut} href="/">
                  here
                </a>
              </p>
            </main>
          )}
      </div>
    )
  }
}

export default connect(({ auth }) => ({
  auth,
}))(Chat)