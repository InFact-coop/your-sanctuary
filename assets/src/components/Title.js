import { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { signUp } from "../state/actions/auth"

const Title = styled.div.attrs({
  className: "f1 tc pv5 sans-serif",
})`
  background-color: #1ca4d0;
`

class TitleComponent extends Component {
  componentDidMount() {
    fetch("/api/info")
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    const { colour, signUp } = this.props
    return (
      <Title className={colour}>
        <p>hello Sanctuary Talk Tool</p>
        <button onClick={signUp} />
      </Title>
    )
  }
}

export default connect(
  ({ auth: { colour } }) => ({ colour }),
  { signUp }
)(TitleComponent)
