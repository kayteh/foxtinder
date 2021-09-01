import { CheckIcon, XIcon } from "@primer/octicons-react";
import React from "react";
import { Container, SelectionBox, SelectionN, SelectionY } from "./App.styled";
import { FoxBox } from "./FoxBox";

function App() {
  const [currentFox, setCurrentFox] = React.useState("/testfox.png");
  const [nextFox, setNextFox] = React.useState("/testfox2.png");

  return (
    <Container>
      <SelectionBox>
        <SelectionN>
          <XIcon size="medium" />
        </SelectionN>
      </SelectionBox>
      <FoxBox currentFox={currentFox} nextFox={nextFox} />
      <SelectionBox>
        <SelectionY
          onClick={() => {
            setCurrentFox(nextFox);
            setNextFox(currentFox);
          }}
        >
          <CheckIcon size="medium" />
        </SelectionY>
      </SelectionBox>
    </Container>
  );
}

export default App;
