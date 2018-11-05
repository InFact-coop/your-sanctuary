import { hot } from "react-hot-loader"
import TitleConnected from "./title"
import { Helmet } from "react-helmet"

const App = () => (
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

    <TitleConnected />
  </div>
)

export default hot(module)(App)
