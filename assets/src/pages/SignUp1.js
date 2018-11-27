import { Headline, BodyText } from "../components/Text"
import { RoundButton } from "../components/Button"
import arrowRight from "../static/icons/arrow_right.svg"

const SignUp1 = ({ history }) => (
  <section>
    <Headline className="mb2">Supporting survivors of domestic abuse</Headline>

    <BodyText>
      We offer sanctuary, support and empowerment to anyone affected by Domestic
      Abuse.
    </BodyText>
    <BodyText className="b mb4">Your safety is very important to us.</BodyText>
    <BodyText className="mb4">
      To access our chat service, you will need a unique code which we will now
      issue for you.
    </BodyText>
    <BodyText className="mb4">
      You will need to remember this code to access your conversation if you
      wish to pick up where you left off.
    </BodyText>
    <BodyText className="mb4">
      Please note - if you are under 16 we will not be able to chat with you
      using this service. Please visit&nbsp;
      <a href="http://www.thehideout.org.uk" target="_blank" className="blue b">
        The Hideout&nbsp;
      </a>
      for more information. By clicking ‘Next’ you are confirming you are over
      the age of 16.
    </BodyText>
    <div className="flex justify-center items-center justify-end-ns mb4">
      <BodyText className="ttu mr3 b">Next</BodyText>
      <RoundButton
        onClick={() => history.push("/signup-2")}
        image={arrowRight}
      />
    </div>
  </section>
)

export default SignUp1
