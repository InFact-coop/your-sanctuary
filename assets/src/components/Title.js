import styled from "styled-components"

const Title = styled.div.attrs({
  className: "f1 tc pv5 sans-serif",
})`
  background-color: #1ca4d0;
`

const TitleComponent = () => (
  <Title>
    <p>Your Sanctuary Talk Tool</p>
  </Title>
)

export default TitleComponent
