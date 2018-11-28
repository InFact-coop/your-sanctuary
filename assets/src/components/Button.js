import styled from "styled-components"

const Button = styled.div.attrs({
  className: ({ buttonColour }) =>
    `pa3 shadow-3 bg-${buttonColour} br-pill tc pointer`,
})``

const RoundButton = styled.div.attrs({
  className: "bg-white shadow-2 pointer",
})`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`

export { Button, RoundButton }
