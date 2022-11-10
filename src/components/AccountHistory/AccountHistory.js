import styled from "styled-components";
import accountHistoryData from "../../data/accountHistoryData.json";
import AccountHistoryCard from "./AccountHistoryCard";

function AccountHistory() {

  const accountHistoryCard = (data) =>{
    return(
      <AccountHistoryCard data={data} />
    )
  }

  // CSS
  const AccountHistoryContainer = styled.section`
    width: 340px;
    padding: 15px;
    margin: 30px 0;
    border-radius: 10px;
    background-color: #d9d9d9;
  `;

  const AccountHistoryTitle = styled.div`
    margin-bottom: 10px;
  `

  return (
    <AccountHistoryContainer>
      <AccountHistoryTitle>입출금 내역</AccountHistoryTitle>
      <div>
        {accountHistoryData["accountHistoryData"].map(accountHistoryCard)}
      </div>
    </AccountHistoryContainer>
  );
}

export default AccountHistory;
