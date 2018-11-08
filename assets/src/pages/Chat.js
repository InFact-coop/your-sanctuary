import { Component } from "react"
import { connect } from "react-redux"

import { loadCrisp } from "../state/actions/crisp"
import { signOut } from "../state/actions/auth"

import Title from "../components/Title"

class Chat extends Component {
  insertCrispScript = () => {
    const {
      auth: { uuid },
      crisp: { crispId },
    } = this.props

    if (!window.$crisp) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.innerHTML = `$crisp = [];CRISP_TOKEN_ID = '${uuid}';CRISP_WEBSITE_ID = '${crispId}';(function(){d=document;s=d.createElement('script');s.src='//client.crisp.chat/l.js';s.async=1;d.getElementsByTagName('head')[0].appendChild(s);})();`
      document.head.appendChild(script)
    }
  }

  render() {
    const { signOut } = this.props
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
        <a onClick={signOut} href="/">
          Sign Out
        </a>
        {window.$crisp && (
          <main>
            This is chat
            <Title />
          </main>
        )}
      </div>
    )
  }
}

export default connect(
  ({ auth, crisp }) => ({
    auth,
    crisp,
  }),
  { loadCrisp, signOut }
)(Chat)
