import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { datasetState } from "../store/atom";

// CSS
const CreateAccountHistoryContainer = styled.div`
  width: 340px;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  background: linear-gradient(45deg, #98a8f0, #b09bf0);

  @media screen and (min-width: 1200px) {
    margin-left: 30px;
    margin-bottom: 10px;
  }
`;

const CreateAccountHistoryTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

// 등록 취소 버튼 
const ButtonCotainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 40px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
    color: #979694;
  }
  font-weight: 700;

  @media screen and (min-width: 1200px) {
      display: none;
  }
`;    

// form css
const Label = styled.label`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`;

const DateInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 5px 0 10px 0;
`;

const DateInput = styled.input`
  width: 28%;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
`;

const Input = styled.input`
  width: 330px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;


// 입출금 버튼 CSS
const ContentButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 40px;
  margin: 5px 0 10px 0;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: ${(props) => props.color || "#fff"};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
`;


function CreateAccountHistory({onSubmit}) {

  const [open, setOpen] = useState(false); // 거래내역 추가 버튼
  const [deposit, setDeposit] = useState(true); // 입출금 버튼

  // 기존 거래 내역
  const [dataset, setDataset] = useRecoilState(datasetState);

  // 새 거래 내역 
  const [inputs, setInputs] = useState({
    accountType: "deposit",
    year: "",
    month: "",
    date: "",
    accountContents: "",
    price: 0
  });
  
  const { year, month, date, accountContents, price  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 입출금 버튼 눌렀을 때
  const handleDeposit = () => {
    setDeposit(!deposit);
  };

  // 새 거래내역 추가 버튼 눌렀을 때
  const handleAddHistory = () => {
    setOpen(true);
  };

  // 새 거래내역 등록 버튼 눌렀을 때
  const handleSubmit = () => {
    setDataset([inputs, ...dataset]);
    
    // input 값 초기화
    setInputs({
      accountType: "Deposit",
      year: "",
      month: "",
      date: "",
      accountContents: "",
      price: 0,
    });
    setDeposit(true);

    setOpen(false);
  }

  // 새 거래내역 닫기 버튼 눌렀을 때
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(()=>{
    // 출입금 버튼 눌렀을 때 거래내역 업데이트
    if (deposit === true) {
      setInputs({
        ...inputs,
        ["accountType"]: "Deposit",
      });
    } else {
      setInputs({
        ...inputs,
        ["accountType"]: "Withdraw",
      });
    }
  },[deposit])

  useEffect(()=>{
    // 화면 사이즈에 따라 입출금 폼 보여주기 여부 판별
    if(window.screen.width > 1200){
      setOpen(true);
     } else {
      setOpen(false);
     }
  },[])

  return (
    <div>
      {open === true ? (
        <div>
          <CreateAccountHistoryContainer>
            <CreateAccountHistoryTitle>새 거래 내역</CreateAccountHistoryTitle>
            <form onSubmit={onSubmit}>
              <Label>날짜</Label>
              <DateInputBox>
                <DateInput
                  placeholder="2023"
                  name="year"
                  value={year}
                  onChange={onChange}
                />
                <DateInput
                  placeholder="01"
                  name="month"
                  value={month}
                  onChange={onChange}
                />
                <DateInput
                  placeholder="01"
                  name="date"
                  value={date}
                  onChange={onChange}
                />
              </DateInputBox>
              <Label>내용</Label>
              {deposit === true ? (
                <ContentButtonBox>
                  <ContentButton
                    onClick={handleDeposit}
                    color="#d3d3d3"
                    disabled
                  >
                    입금
                  </ContentButton>
                  <ContentButton onClick={handleDeposit}>출금</ContentButton>
                </ContentButtonBox>
              ) : (
                <ContentButtonBox>
                  <ContentButton onClick={handleDeposit}>입금</ContentButton>
                  <ContentButton
                    onClick={handleDeposit}
                    color="#d3d3d3"
                    disabled
                  >
                    출금
                  </ContentButton>
                </ContentButtonBox>
              )}
              <Input
                placeholder="페퍼로니 피자 1판"
                marginBottom="10px"
                name="accountContents"
                value={accountContents}
                onChange={onChange}
              />
              <br />
              <Label>금액</Label>
              <Input
                type="number"
                placeholder="15,000"
                marginTop="5px"
                name="price"
                value={price === 0 ? undefined : price}
                onChange={onChange}
              />
            </form>
          </CreateAccountHistoryContainer>
          
          <ButtonCotainer>
            <Button backgroundColor="#fff" onClick={handleSubmit}>
              등록
            </Button>
            <Button
              color="#979694"
              backgroundColor="#d9d9d9"
              onClick={handleCancel}
            >
              닫기
            </Button>
          </ButtonCotainer>
        </div>
      ) : (
        <Button onClick={handleAddHistory}>새 거래내역 추가</Button>
      )}
    </div>
  );
}

export default CreateAccountHistory;
