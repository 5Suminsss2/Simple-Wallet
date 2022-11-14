import styled from "styled-components";
import { AiFillStar, AiFillBell } from "react-icons/ai";
import { alarmModalState, goalModalState } from "../../store/atom";
import { useRecoilValue } from "recoil";

//CSS
    const Modal = styled.div`
      display: ${(props) => props.display};
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.6);
    `;
    const ModalContainer = styled.section`
      width: 360px;
      height: 45%;
      margin: 0 auto;
      padding: 15px;
      border-radius: 10px;
      background-color: #fff;
      animation: modal-show 0.3s;
    `;

    const Header = styled.header`
        display: flex;
        align-items: center;
        margin: 10px 0;
    `

    const HeaderTitle = styled.div`
        margin-left: 5px;
    `

    const ModalContents = styled.div`
        margin-top: 20px;
        padding: 10px;
        border-radius: 10px;
        background-color: #d9d9d9;
    `

function GlobalModal({ title, children, icon }) {
    
    // 알람 모달, 목표 모달 각각 상태값 가져오기
    const alarmOpen = useRecoilValue(alarmModalState); 
    const goalOpen = useRecoilValue(goalModalState); 

  return (
        <Modal display={(alarmOpen || goalOpen)?"flex":"none"}>
            <ModalContainer>
                <Header>
                {icon === "alarm" ? (
                    <AiFillBell size="15" color="#d9d9d9" />
                ) : (
                    <AiFillStar size="15" color="#d9d9d9" />
                )}
                <HeaderTitle>{title}</HeaderTitle>
                </Header>
                <ModalContents>{children}</ModalContents>
                {/* <ModalButtonContainer>
                    <ModalButton marginRight="10px" backgroundColor="#fff">
                        등록
                    </ModalButton>
                    <ModalButton marginRight="10px" backgroundColor="#d9d9d9" onClick={handleCanceled}>
                        닫기
                    </ModalButton>
                </ModalButtonContainer> */}
            </ModalContainer>
        </Modal>
  );
}

export default GlobalModal;
