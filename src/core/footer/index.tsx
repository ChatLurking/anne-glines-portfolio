import * as React from "react"
import { FooterContainer } from "./styled"

export const Footer: React.FC = () => {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <FooterContainer>
      <p>Anne Glines {year}</p>
    </FooterContainer>
  )
}
