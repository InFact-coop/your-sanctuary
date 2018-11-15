import styled from "styled-components"

// eslint-disable-next-line
export const Input = styled.input.attrs({
  className:
    "b--blue ba font-6 bg-near-white br-pill pa2 w5 tc black-50 outline-0",
})`
  height: 45px;
  ::placeholder {
    color: var(--black-50);
  }
`
