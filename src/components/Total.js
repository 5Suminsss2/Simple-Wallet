import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { datasetState } from "../store/atom";

function Total() {

  // CSS
  const TotalContainer = styled.section`
    margin: 15px 0;
  `;
  const TotalItem = styled.div`
    width: 310px;
    height: 130px;
    margin-top: 20px;
    padding: 5px 30px;
    border-radius: 10px;
    background-color: #d9d9d9;
  `;

  const TotalTitle = styled.div`
    margin-top: 10px;
    font-size: 20px;
  `;

  const TotalAccount = styled.div`
    margin-top: 15px;
    font-size: 32px;
  `;

  const SeperateTotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  `;

  const SeperateTotalItems = styled.div`
    width: 42%;
    height: 60px;
    padding: 12px;
    border-radius: 10px;
    background-color: #d9d9d9;
  `;

  const SeperateTotalTitle = styled.div`
    font-size: 14px;
    margin-bottom: 6px;
  `;

  const SeperateTotalAccount = styled.div`
    font-size: 18px;
    margin-left: 22px;
  `;

  // 입출금 내역 데이터 가져오기
  const dataset = useRecoilValue(datasetState);
  let deposit = 0;
  let withDraw = 0;

  // 입출금 내역 데이터 계산
  dataset.map(function (element) {
    if (element.accountType === "Deposit") {
      deposit += element.price
    } else {
      withDraw += element.price
    }
  });

  let total = (deposit - withDraw).toLocaleString("ko-KR");

  return (
    <TotalContainer>
      <TotalItem>
        <TotalTitle>Total</TotalTitle>
        <TotalAccount>{total} 원</TotalAccount>
      </TotalItem>
      <SeperateTotalContainer>
        <SeperateTotalItems>
          <SeperateTotalTitle>총 지출</SeperateTotalTitle>
          <SeperateTotalAccount>- {withDraw} 원</SeperateTotalAccount>
        </SeperateTotalItems>
        <SeperateTotalItems>
          <SeperateTotalTitle>총 입금</SeperateTotalTitle>
          <SeperateTotalAccount>+ {deposit} 원</SeperateTotalAccount>
        </SeperateTotalItems>
      </SeperateTotalContainer>
    </TotalContainer>
  );
}

export default Total;
