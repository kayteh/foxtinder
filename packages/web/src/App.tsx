import React from "react";
import { GoCheck, GoX } from "react-icons/go";
import { Container, SelectionBox, SelectionN, SelectionY } from "./App.styled";
import { FoxBox } from "./FoxBox";

function App() {
  const [currentFox, setCurrentFox] = React.useState("/testfox.png");
  const [nextFox, setNextFox] = React.useState("/testfox2.png");

  return (
    <Container>
      <SelectionBox>
        <SelectionN>
          <GoX />
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
          <GoCheck />
        </SelectionY>
      </SelectionBox>
    </Container>
  );
}

export default App;
