import * as React from "react"
import {
  AboutOuterContainer,
  AboutInnerContainer,
  AboutBackgroundColor,
} from "./styled"

export const About: React.FC = () => {
  return (
    <AboutBackgroundColor>
      <AboutOuterContainer>
        <AboutInnerContainer>
          <h2>About me</h2>
          <p>
            I am a full stack engineer currently in Los Angeles, CA very
            passionate about web delvelopment.
          </p>
          <p>
            My most common frontend languages are HTML, CSS/SASS/css-in-js, and
            JavaScript/TypeScript. I work primarily with React and have
            experience with React Hooks, Redux, React-Router as well as many
            other common libraries in the React ecosystem.
          </p>
          <p>
            On the backend I have the most experience with Node.js and
            TypeScript on frameworks such as Express.js or being used in AWS
            Lambda APIs. I also have experience in C#, Ruby on Rails, and Elixir
            including Absinthe.
          </p>
          <p>
            When not coding, I enjoy playing video games with my friends and
            cross stitching.
          </p>
        </AboutInnerContainer>
      </AboutOuterContainer>
    </AboutBackgroundColor>
  )
}
