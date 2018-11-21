import { connect } from "react-redux"
import { signUp } from "../state/actions/auth"

import { BodyText } from "../components/Text"
import { Button } from "../components/Button"

const SignUp2 = ({ history, signUp }) => (
  <section>
    <BodyText className="mb4">
      If you would like us to send you a reminder email should you forget your
      code then please provide your email address below.
    </BodyText>
    <BodyText className="mb4">
      We will never use your email address other than to remind you of your
      code. Your reminder email will appear as a simple unbranded message in
      your inbox.
    </BodyText>
    <BodyText className="mb4 mb7-ns">
      If you would prefer
      <span className="b"> not to give</span> us your email address and you
      forget your code you will have to begin a new chat.
    </BodyText>
    <div className="flex flex-column flex-row-ns justify-center items-center justify-start-ns">
      <Button className="w5 mb3" onClick={() => history.push("/signup-3")}>
        Continue with email
      </Button>
      <Button
        className="ml3-ns bg-blue white w5 mb4"
        onClick={() => signUp({}, () => history.push("/chat"))}
      >
        Skip this step
      </Button>
    </div>
  </section>
)

export default connect(
  null,
  { signUp }
)(SignUp2)
