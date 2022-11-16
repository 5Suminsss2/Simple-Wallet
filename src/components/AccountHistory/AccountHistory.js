import styled from "styled-components";
import AccountHistoryCard from "./AccountHistoryCard";

function AccountHistory({dataset}) {

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
    background: linear-gradient(45deg, #98a8f0, #b09bf0);
  `;

  const AccountHistoryTitle = styled.div`
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
  `

  return (
    <AccountHistoryContainer>
      <AccountHistoryTitle>입출금 내역</AccountHistoryTitle>
      <div>{dataset.map(accountHistoryCard)}</div>
    </AccountHistoryContainer>
  );
}

export default AccountHistory;
