import { Link } from "react-router-dom";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button>
            <Link to="/play">Play Now</Link></Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
 const Button=styled.button`
 color:white;
 background-color:#A9A9A9;
 padding:10px 18px;
 border-radius:5px;
 min-width:220px;
 font-size:16px;
 border:1px solid transparent;
 cursor: pointer;
 &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
 }`
