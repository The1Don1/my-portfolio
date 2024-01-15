import React, {
  DOMAttributes,
  HTMLAttributes,
  JSXElementConstructor,
  ReactElement,
  SVGAttributes,
} from 'react';
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* <GitHubCalendar
        username="The1Don1"
        blockSize={15}
        blockMargin={7}
        // theme = "dark"
        colorScheme="dark"
        fontSize={16}
      /> */}
      <GitHubCalendar
        username="The1Don1"
        blockSize={14}
        blockRadius={7}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
  theme={{
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }}
/>
    </Row>
  );
}

export default Github;