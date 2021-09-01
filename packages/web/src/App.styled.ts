import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const SelectionBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const SelectionY = styled.div`
  --color: #7dc796;
  --bg-color: #efefef;
  font-size: 3em;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  padding: 0.15em;
  color: var(--color);
  background-color: var(--bg-color);
  box-shadow: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    box-shadow: 0 4px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
    background-color: var(--color);
    color: var(--bg-color);
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

export const SelectionN = styled(SelectionY)`
  --color: #e24f4f;
`;
