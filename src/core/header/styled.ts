import styled from "styled-components/macro"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  height: calc(100vh - 48px);

  h1 {
    margin-bottom: 0;
  }

  h3 {
    margin: 8px 0 16px;
  }
`

export const HeadshotImage = styled.img`
  width: 200px;
  border-radius: 40px;
`
