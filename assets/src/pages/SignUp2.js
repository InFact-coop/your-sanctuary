import { connect } from "react-redux"
import { signUp } from "../state/actions/auth"

import { BodyText } from "../components/Text"
import { Button } from "../components/Button"

const SignUp2 = ({ history, signUp }) => (
  <section>
    <BodyText className="mb4">
      In order to access our service, you will need a unique code which we will
      now issue for you.
    </BodyText>
    <BodyText className="mb4">
      You will need to <span className="b">remember this code</span> to access
      your conversation if you wish to pick up where you left off or if you ever
      need to use this conversation as evidence.
    </BodyText>
    <BodyText className="mb4">
      If you would like us to send you a reminder email should you forget your
      code then please provide your email address below.
    </BodyText>
    <BodyText className="mb4">
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
