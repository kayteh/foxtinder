import styled from "styled-components";

export const FoxImages = styled.img`
  height: 75vh;
  border-radius: 15px;
  position: relative;
`;

export const HiddenFox = styled.div<{ url: string }>`
  position: absolute;
  top: -10000px;
  left: -10000px;
  width: 1px;
  height: 1px;
  max-width: 65vw;
  background-image: url(${(props) => props.url});
`;

export const StyledFoxBox = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
`;
