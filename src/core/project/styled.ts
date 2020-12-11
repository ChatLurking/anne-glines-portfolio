import styled from "styled-components/macro"

export const ProjectContainer = styled.section`
  background: #45f7a6;
  padding: 32px 0 0;
  width: 100%;
`

export const ProjectInnerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const RowDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  iframe {
    padding: 8px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 400px;
    }

    @media (min-width: 972px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`
