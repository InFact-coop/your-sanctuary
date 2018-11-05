import { connect } from "react-redux"
import styled from "styled-components"
import { changeColour } from "./state/actions/auth"

const Title = styled.div.attrs({
  className: "f1 ttu",
})``

const TitleComponent = ({ colour, changeColour }) => (
  <Title className={colour}>
    <h1>Hello Your gsjgh Sanctuary</h1>
    <button onClick={changeColour} />
  </Title>
)

export default connect(
  ({ auth: { colour } }) => ({ colour }),
  { changeColour }
)(TitleComponent)
