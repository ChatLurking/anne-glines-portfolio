import * as React from "react"
import HeadshotImg from "assets/headshot.jpg"
import { HeadshotImage, HeaderContainer } from "./styled"
import { Contact } from "core/contact"

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeadshotImage src={HeadshotImg} alt='' />
      <h1>Anne Glines</h1>
      <h3>Full Stack Engineer in Los Angeles, CA</h3>
      <br />
      <i>Looking for full-time opportunities</i>
      <Contact />
    </HeaderContainer>
  )
}
