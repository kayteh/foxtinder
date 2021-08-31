import { FoxImages, HiddenFox, StyledFoxBox } from "./FoxBox.styled";

type FoxBoxProps = {
  currentFox: string;
  nextFox: string;
};

export const FoxBox = ({ currentFox, nextFox }: FoxBoxProps) => {
  return (
    <StyledFoxBox>
      <FoxImages src={currentFox}></FoxImages>
      <HiddenFox url={nextFox} />
    </StyledFoxBox>
  );
};
