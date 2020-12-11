import * as React from "react"
import { ProjectContainer, ProjectInnerContainer, RowDiv } from "./styled"

export const Projects: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectInnerContainer>
        <h2>Projects</h2>
        <RowDiv>
          <div>
            <iframe
              src='https://codesandbox.io/embed/animated-card-with-menu-p74iq?fontsize=14&hidenavigation=1&theme=dark'
              style={{
                width: "300px",
                height: "300px",
                border: 0,
                borderRadius: "4px",
                overflow: "hidden",
              }}
              title='animated card with menu'
              allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
            />
            <p>
              This is a quick mock up of a similar animation that I did at
              Popdog. The original would display a live streamer's avatar, their
              live status, current view cout, game and had two buttons on the
              bottom where one routed the user to a profile page and the other
              opened a menu over the card. On hover it showed a thumbnail of
              their stream. When the menu opened it pushed the hover image out
              of the way and when closed the hover image pushed the menu back
              down.
            </p>
          </div>

          <div>
            <iframe
              src='https://codesandbox.io/embed/apollo-server-0ivmz?autoresize=1&fontsize=14&hidenavigation=1&theme=dark'
              style={{
                width: "300px",
                height: "300px",
                border: 0,
                borderRadius: "4px",
                overflow: "hidden",
              }}
              title='apollo pagination'
              allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
            />
            <p>
              I reccomend opening this one up in Codesandbox and trying it out!
              This is a small backend example implementing pagination in both
              the Relay and Apollo way. By default this is set to the Apollo
              way, but there is commented out code that implements the Relay
              way.
            </p>
          </div>
        </RowDiv>
      </ProjectInnerContainer>
    </ProjectContainer>
  )
}
