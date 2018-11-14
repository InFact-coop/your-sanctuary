import { Headline, BodyText } from "../components/Text"
import { RoundButton } from "../components/Button"

const SignUp1 = ({ history }) => (
  <section>
    <Headline className="mb2">Supporting survivors of domestic abuse</Headline>

    <BodyText>
      We offer sanctuary, support and empowerment to anyone affected by Domestic
      Abuse.
    </BodyText>
    <BodyText className="b mb4">Your safety is very important to us.</BodyText>
    <BodyText className="mb4">
      We will never use your email address other than to remind you of your
      code.
    </BodyText>
    <BodyText className="mb4">
      When we send you your reminder email it will appear in your inbox as
      promotional code to win a prize. This is to avoid anyone else who may have
      access to your inbox accessing your confidential chat.
    </BodyText>
    <div className="flex justify-center items-center justify-end-ns">
      <BodyText className="ttu mr2 b">Next</BodyText>
      <RoundButton onClick={() => history.push("/sign-up-2")} />
    </div>
  </section>
)

export default SignUp1
