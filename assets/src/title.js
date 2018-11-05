import { connect } from "react-redux"
import styled from "styled-components"
import { changeColour } from "./state/actions/auth"

const Title = styled.div.attrs({
  className: "f1 tc pv5 sans-serif",
})`
  background-color: #1ca4d0;
`

const TitleComponent = ({ colour, changeColour }) => (
  <Title className={colour}>
    <p>Your Sanctuary Talk Tool</p>
    <button onClick={changeColour} />
  </Title>
)

export default connect(
  ({ auth: { colour } }) => ({ colour }),
  { changeColour }
)(TitleComponent)
