import styled from "styled-components"
import arrowRight from "../static/icons/arrow_right.svg"

const Button = styled.div.attrs({
  className: ({ buttonColour }) =>
    `pa3 shadow-3 mb3 bg-${buttonColour} br-pill`,
})``

const RoundButton = styled.div.attrs({
  className: "w2 h2 bg-white shadow-2",
})`
  border-radius: 50%;
  background-image: url(${arrowRight});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
`

export { Button, RoundButton }
