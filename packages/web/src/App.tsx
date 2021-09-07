import React from "react";
import { GoCheck, GoX } from "react-icons/go";
import { Container, SelectionBox, SelectionN, SelectionY } from "./App.styled";
import { FoxBox } from "./FoxBox";

function App() {
  const [foxIndex, setFoxIndex] = React.useState(0);
  const [allFoxes, setAllFoxes] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchFoxes = async (subreddit: string) => {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}/top.json?t=week&limit=100`
      );

      const foxData = await response.json();

      const imageUrls = foxData.data.children.reduce(
        (accumulator: string[], value: any) => {
          if (value.data.post_hint === "image") {
            const imageUrl = value.data.url;
            accumulator.push(imageUrl);
          }
          return accumulator;
        },
        []
      );

      return imageUrls;
    };

    Promise.all([fetchFoxes("foxes"), fetchFoxes("foxfanclub")]).then(
      (urls: string[][]) =>
        setAllFoxes(urls.flat().sort(() => Math.random() - 0.5))
    );
  }, [setAllFoxes]);

  const selectFox = (imageUrl: string, selection: boolean) => async () => {
    try {
      void (await fetch("http://localhost:8000/selection", {
        method: "POST",
        body: JSON.stringify({
          imageUrl,
          selection,
        }),
        headers: {
          "content-type": "application/json",
        },
      }));
    } catch (e) {}

    setFoxIndex(foxIndex + 1);
  };

  const nextFox = allFoxes[foxIndex + 1];
  const currentFox = allFoxes[foxIndex];

  return (
    <Container>
      <SelectionBox>
        <SelectionN onClick={selectFox(currentFox, false)}>
          <GoX />
        </SelectionN>
      </SelectionBox>
      <FoxBox currentFox={currentFox} nextFox={nextFox} />
      <SelectionBox>
        <SelectionY onClick={selectFox(currentFox, true)}>
          <GoCheck />
        </SelectionY>
      </SelectionBox>
    </Container>
  );
}

export default App;
