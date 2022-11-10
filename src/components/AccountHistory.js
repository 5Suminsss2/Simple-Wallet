import styled from "styled-components";

function AccountHistory() {

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

  const AccountHistoryDetail = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    height: 55px;
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  `;

  const AccountHistoryDate = styled.div`
    padding: 5px 0;
    font-size: 11px;
  `;

  const AccountHistoryContents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <AccountHistoryContainer>
      <AccountHistoryTitle>입출금 내역</AccountHistoryTitle>
      <div>
        <AccountHistoryDetail>
          <AccountHistoryDate>2022-10-11</AccountHistoryDate>
          <AccountHistoryContents>
            <div>교촌치킨 허니콤보</div>
            <div>- 21,000 원</div>
          </AccountHistoryContents>
        </AccountHistoryDetail>
        <AccountHistoryDetail>
          <AccountHistoryDate>2022-10-10</AccountHistoryDate>
          <AccountHistoryContents>
            <div>알바비</div>
            <div>+ 100,000 원</div>
          </AccountHistoryContents>
        </AccountHistoryDetail>
      </div>
    </AccountHistoryContainer>
  );
}

export default AccountHistory;
