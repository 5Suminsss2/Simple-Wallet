import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { datasetState } from "../../store/atom";
import { useRecoilState } from "recoil";

// CSS
  const AccountHistoryClose = styled.div`
    display: none;
    margin-top: 5px;
    cursor: pointer;
  `;

  const AccountHistoryDetail = styled.div`
    display: flex;
    justify-content: space-between;
    height: 55px;
    margin-bottom: 10px;
    padding: 5px 10px 0 10px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    &:hover ${AccountHistoryClose} {
      display: block;
    }
    &:hover {
      background-color: #fcfbe8;
    }
  `;

  const AccountHistoryPart = styled.div`
    width: 100%;
  `;

  const AccountHistoryTitle = styled.div`
      font-size: 15px;
  `

  const AccountHistoryDate = styled.div`
      padding: 5px 0;
      font-size: 11px;
  `;

  const AccountHistoryContents = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
  `;
  const Price = styled.div`
    font-size: 15px;
    font-weight: 900;
    color: #808080;
  `;

function AccountHistoryCard({ data }) {
  const [dataset, setDataset] = useRecoilState(datasetState); // 기존 알람 내역

  // 화폐 3자리마다 콤마 넣기
  const price = Number(data.price).toLocaleString("ko-KR");

  // 입출금 내역 제거하기
  const handleRemove = () => {
    let filtered = dataset.filter((element) => element !== data);
    setDataset(filtered);
  };

  return (
    <AccountHistoryDetail>
      <AccountHistoryPart>
        <AccountHistoryDate>
          {data.year}-{data.month}-{data.date}
        </AccountHistoryDate>
        <AccountHistoryContents>
          <AccountHistoryTitle>{data.accountContents}</AccountHistoryTitle>
          {data.accountType === "Deposit" ? (
            <Price>+ {price} 원</Price>
          ) : (
            <Price>- {price} 원</Price>
          )}
        </AccountHistoryContents>
      </AccountHistoryPart>
      <AccountHistoryClose onClick={handleRemove}>
        <AiOutlineClose />
      </AccountHistoryClose>
    </AccountHistoryDetail>
  );
}

export default AccountHistoryCard;