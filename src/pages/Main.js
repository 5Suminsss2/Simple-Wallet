import AccountHistory from "../components/AccountHistory";
import Alaram from "../components/Alaram";
import GraphAccount from "../components/GraphAccount";
import NewAccountHistory from "../components/NewAccountHistory";
import Title from "../components/Title";
import styled from "styled-components";

function Main () {

    // CSS
    const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 380px;
      margin: 30px auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    `;

    return (
      <Wrapper>
        <Title />
        <Alaram />
        <GraphAccount />
        <AccountHistory />
        <NewAccountHistory />
      </Wrapper>
    );
}

export default Main;