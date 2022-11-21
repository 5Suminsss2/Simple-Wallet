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
    height: ${(props) => props.height || null};
    padding: 15px;
    margin: 30px 0;
    border-radius: 10px;
    background: linear-gradient(45deg, #98a8f0, #b09bf0);
    overflow: scroll;
    overflow-x: hidden;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    @media screen and (min-width: 1200px) {
      width: 50vw;
      height: 300px;
      border-radius: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: inset 0px 0px 1px white;
    }
  `;

  const AccountHistoryTitle = styled.div`
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
  `

  const AccountHistoryDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  `;

  return (
    <>
      {dataset.length === 0 ? (
        <AccountHistoryContainer>
          <AccountHistoryTitle>입출금 내역</AccountHistoryTitle>
          <div>
            <AccountHistoryDetail>
              새 거래 내역에 입력해봐요!
            </AccountHistoryDetail>
          </div>
        </AccountHistoryContainer>
      ) : (
        <AccountHistoryContainer height="300px">
          <AccountHistoryTitle>입출금 내역</AccountHistoryTitle>
          <div>
            {dataset.map(accountHistoryCard)}
          </div>
        </AccountHistoryContainer>
      )}
    </>
  );
}

export default AccountHistory;
