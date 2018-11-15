import styled from "styled-components"

import { Subline, SubButtonText } from "../components/Text"
import { Button } from "../components/Button"

const HomeHeadline = styled.p.attrs({
  className: "font-3 font-1-ns b blue",
})``

const Home = ({ history }) => (
  <section>
    <HomeHeadline className="mb2"> Confidential </HomeHeadline>
    <Subline className="mb4 mb7-ns">
      Free confidential chat offering you support when you need it.
    </Subline>

    <div className="flex-ns justify-between w-100-ns">
      <div className="flex flex-column mb4 mb0-ns tc w-70 center w-50-ns mr1-ns">
        <Button
          buttonColour="white"
          className="mr2-ns mb3"
          onClick={() => history.push("/signup-1")}
        >
          Chat to us
        </Button>
        <SubButtonText className="mr2-ns">
          To start talking straight away click here to recieve your unique code
        </SubButtonText>
      </div>
      <div className="flex flex-column mb4 mb0-ns w-70 center tc w-50-ns ml1-ns">
        <Button
          buttonColour="white"
          className="ml2-ns mb3"
          onClick={() => history.push("/login")}
        >
          Continue a conversation
        </Button>
        <SubButtonText className="ml2-ns">
          If you have spoken to us before and have an access code
        </SubButtonText>
      </div>
    </div>
  </section>
)

export default Home
