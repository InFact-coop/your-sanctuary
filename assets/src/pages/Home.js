import SignUp from "../components/SignUp"
import Title from "../components/Title"
import SignIn from "../components/SignIn"
import ForgotCode from "../components/ForgotCode"

const Home = () => (
  <section>
    <Title />
    <div>
      <p className="f3 ma4 sans-serif">
        Start a new chat by clicking here. You'll get a code to sign in with
        next time. If you want us to be able to remind you of your code, put
        your email in the box before starting the chat.
      </p>
      <SignUp />
    </div>

    <div>
      <p className="f3 ma4 sans-serif">
        Chatted to us before? Put your unique code in below to return to your
        last chat.
      </p>
      <SignIn />
    </div>
    <div>
      <p className="f3 ma4 sans-serif">
        Forgot your code? Put your email in and we will email your code
      </p>
      <ForgotCode />
    </div>
  </section>
)

export default Home
