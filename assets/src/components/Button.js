import styled from "styled-components"

const Button = styled.div.attrs({
  className: ({ buttonColour }) =>
    `pa3 shadow-3 mb3 bg-${buttonColour} br-pill`,
})``

export { Button }
