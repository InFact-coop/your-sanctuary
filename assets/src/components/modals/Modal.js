import styled from "styled-components"

const ModalContainer = styled.div.attrs({
  className: "flex items-center justify-center blue",
})`
  background-color: rgba(51, 51, 51, 0.5);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
`

const ModalContent = styled.div.attrs({
  className: "bg-near-white pa7-ns pv7-ns ph5 pv6 tc",
})`
  width: 90%;
  @media screen and (min-width: 30em) {
    width: 35vw;
  }
`

export { ModalContainer, ModalContent }
