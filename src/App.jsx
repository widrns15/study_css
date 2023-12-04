import styled from "styled-components";

const App = () => {
  return (
    <ColoredSquaresContainer>
      <ColoredSquare color={"#ffffff"} />
      <ColoredSquare color={"#000000"} />
      <ColoredSquare color={"#000000"} />
      <ColoredSquare color={"#FFFD00"} />

      <OverlaySquare
        color={"#ffffff"}
        width={"150px"}
        height={"150px"}
        top_margin={"-450px"}
        left_margin={"-450px"}
        right_border={"0px"}
        bottom_border={"0px"}
        z={"1"}
      />
      <OverlaySquare
        color={"#F91AFF"}
        width={"150px"}
        height={"150px"}
        top_margin={"-450px"}
        left_margin={"-150px"}
        bottom_border={"0px"}
        z={"1"}
      />
      <OverlaySquare
        color={"#F91AFF"}
        width={"150px"}
        height={"150px"}
        top_margin={"-150px"}
        left_margin={"-450px"}
        right_border={"0px"}
        z={"1"}
      />
      <OverlaySquare
        color={"#40FE00"}
        width={"300px"}
        height={"300px"}
        z={"1"}
      />
      <OverlaySquare
        color={"#3FFFFF"}
        width={"150px"}
        height={"150px"}
        top_margin={"-150px"}
        left_margin={"450px"}
        left_border={"0px"}
        bottom_border={"0px"}
        z={"1"}
      />
      <OverlaySquare
        color={"#fa0000"}
        width={"150px"}
        height={"225px"}
        top_margin={"75px"}
        left_margin={"-150px"}
        z={"2"}
      />
      <OverlaySquare
        color={"#ffffff"}
        width={"150px"}
        height={"150px"}
        top_margin={"150px"}
        z={"3"}
      />
      <OverlaySquare
        color={"#ffffff"}
        width={"150px"}
        height={"150px"}
        top_margin={"300px"}
        left_margin={"-300px"}
        right_border={"0px"}
        z={"3"}
      />
      <OverlaySquare
        color={"#001EFF"}
        width={"150px"}
        height={"150px"}
        top_margin={"-300px"}
        left_margin={"300px"}
        z={"3"}
      />
    </ColoredSquaresContainer>
  );
};

const ColoredSquare = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.color};
  border: 4px solid black;
`;

const OverlaySquare = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin-top: ${(props) => props.top_margin};
  margin-left: ${(props) => props.left_margin};
  border-top: ${(props) => props.top_border || "4px"} solid black;
  border-right: ${(props) => props.right_border || "4px"} solid black;
  border-bottom: ${(props) => props.bottom_border || "4px"} solid black;
  border-left: ${(props) => props.left_border || "4px"} solid black;
  z-index: ${(props) => props.z};
`;

const ColoredSquaresContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  background-color: black;
  flex-wrap: wrap;
`;

export default App;
