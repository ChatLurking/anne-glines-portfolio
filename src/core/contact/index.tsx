import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { ContactContainer } from "./styled"

export const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <a
        href='mailto:anneglines@gmail.com'
        target='__blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faEnvelope} size='2x' />
      </a>
      <a
        href='https://www.linkedin.com/in/anne-glines-874064aa/'
        target='__blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
    </ContactContainer>
  )
}
