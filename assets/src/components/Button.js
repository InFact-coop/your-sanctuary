import styled from "styled-components"
import arrowRight from "../static/icons/arrow_right.svg"

const Button = styled.div.attrs({
  className: ({ buttonColour }) =>
    `pa3 shadow-3 mb3 bg-${buttonColour} br-pill tc`,
})``

const RoundButton = styled.div.attrs({
  className: "bg-white shadow-2",
})`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: url(${arrowRight});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
`

export { Button, RoundButton }
