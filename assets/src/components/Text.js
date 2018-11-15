import styled from "styled-components"

const Headline = styled.p.attrs({
  className: "font-3 font-2-ns b",
})``

const Subline = styled.p.attrs({
  className: "f5 blue font-5-ns",
})`
  @media (max-width: 30em) {
    line-height: var(--line-height-55);
  }
`

const ButtonText = styled.p.attrs({
  className: ({ fontColour }) => `${fontColour} font-5 tc`,
})``

const SubButtonText = styled.p.attrs({
  className: "f7 tc mb3 mb0-ns",
})`
  line-height: var(--line-height-6);
`

const BodyText = styled.p.attrs({
  className: "font-7 blue font-6-ns",
})``

const FooterText = styled.p.attrs({
  className: "font-7 white font-6-ns",
})``

export { Headline, Subline, ButtonText, SubButtonText, BodyText, FooterText }
