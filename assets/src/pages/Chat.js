import { Link } from "react-router-dom"
import { Component } from "react"
import { connect } from "react-redux"
import Title from "../components/Title"
import { loadCrisp } from "../state/actions/crisp"
import { Helmet } from "react-helmet"

class Chat extends Component {
  // componentDidMount() {
  //   const {
  //     auth: { uuid },
  //     crisp: { crispId, crispExists },
  //     loadCrisp,
  //   } = this.props

  //   if (!crispExists) {
  //     const script = document.createElement("script")
  //     script.type = "text/javascript"
  //     script.id = "crispChat"
  //     script.innerHTML = `$crisp = [];CRISP_TOKEN_ID = '';CRISP_WEBSITE_ID = '${crispId}';(function(){d=document;s=d.createElement('script');s.src='//client.crisp.chat/l.js';s.async=1;$crisp.push(['do', 'chat:open']);d.getElementsByTagName('head')[0].appendChild(s);})();`
  //     this.instance.appendChild(script)

  //     script.onload = () => {
  //       loadCrisp()
  //     }
  //   }
  // }

  render() {
    const { crispExists } = this.props
    return (
      <div>
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML:
                'window.$crisp=[];window.CRISP_WEBSITE_ID="eb431f6c-af5b-4a5b-8822-b71066070599";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();',
            },
          ]}
        />
        {crispExists && (
          <main>
            This is chat
            <Title />
            <Link to="/">go Home</Link>
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
  { loadCrisp }
)(Chat)
