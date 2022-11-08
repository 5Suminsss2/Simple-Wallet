import { AiFillStar, AiFillBell } from "react-icons/ai";
import { TbStar } from "react-icons/tb";
import styled from "styled-components";

function Title () {

    // CSS
    const TitleContainer = styled.div`
      display: flex;
      width: 100%;
      justify-content: space-between;
    `;

    const TitlePart = styled.div`
        margin-left: 130px;
        font-size: 20px;
    `

    const IconPart = styled.div`
      display: flex;
    `;
    
    const IconItem = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid #d9d9d9;

      &:hover {
        background: #dee2e8;
      }
    `;

    return (
      <TitleContainer>
        <TitlePart>Simple Wallet</TitlePart>
        <IconPart>
          <IconItem>
            <AiFillStar size="15" color="#d9d9d9" />
          </IconItem>
          <IconItem>
            <AiFillBell size="15" color="#d9d9d9" />
          </IconItem>
        </IconPart>
      </TitleContainer>
    );
}

export default Title;