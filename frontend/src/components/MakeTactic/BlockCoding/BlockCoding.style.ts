import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

export const BlockCodingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 800px;
  overflow: hidden;
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bolder;
  width: 90%;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-style: solid;
  border-width: 0 0 3px;
  border-color: transparent;
`;
export const TitleInput = styled.input`
  width: 90%;
  height: 80%;
  font-size: 20px;
  font-weight: bolder;
  outline: none;
  border-style: solid;
  border-width: 0 0 3px;
  background-color: transparent;
`;
export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 0, 0.08); */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 27%;
  padding: 1%;
  height: 100%;
  width: 300px;
  margin: 0px 50px 0px 0px;
`;

export const IsSearchDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  margin-top: 25px;
  padding: 0 5%;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchTypeDiv = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const SearchType = styled.div<{ $isChecked: boolean }>`
  /* float: left; */
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${(props) => (props.$isChecked ? " #9155FD" : "black")};
  border-style: solid;
  border-width: 0 0 3px;
  border-color: ${(props) => (props.$isChecked ? "#9155FD" : "transparent")};
`;

export const SearchInputDiv = styled.div`
  width: 90%;
  height: 25px;
  margin: 4% 0;
  padding: 1px;
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px 0;

`;
export const SearchImg = styled.img`
  position: absolute;
  bottom: 20%;
  right: 0;
  width: 17px;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  border-style: solid;
  border-width: 0;
`;
export const SearchItemList = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

//-----------------------------------------------
export const BlockCodingDiv = styled.div`
  /* display: flex; */
  /* justify-content: flex-start; */
  /* flex-direction: column; */
  /* background-color: rgba(0, 0, 0, 0.08); */
  /* position: relative; */
  /* padding: 1%; */
  width: 72%;
  max-height: 300px;
`;
export const Test = styled.div`
  position: relative;
  width: 700px;
  min-height: 400px;
  margin-bottom: 5%;
`;
export const InputDetailTitleBox = styled.div`
  /* position: relative; */
  display: flex;
  margin: 0px 0px 0px 45px;
  color: #ABABAB;
  width: 700px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 10px;
`;
export const InputDetailDiv = styled.div`
  /* position: relative; */
  display: flex;
  color: #ABABAB;
  width: 700px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 10px;
  padding: 10px;
`;

export const InputDetailTitle = styled.div`
  min-width: 150px;
  height: 20px;
  margin: 0px 0px 0px 20px;
`;
export const InputDetailValue = styled.div`
  /* position: relative; */
  width: 150px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;
export const InputOptionDiv = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  width: 100%;
  margin: 10px 0px 0px 75%;
  /* align-items: center; */
`;

export const Input = styled.input`
  width: 120px;
  height: 25px;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;
export const StocksInput = styled.input`
  width: 120px;
  height: 25px;
  font-size: 14px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  background: #FFFFFF;
  border: 3px solid #9155FD;
  border-radius: 10px;
  margin: 10px 10px 0px 10px;
`;



export const StyledDatePicker = styled(ReactDatePicker)`
  width: 70%;
  height: 25px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  border-radius: 5px;
  border-width: 1px;
  border: 1px solid transparent; /* 보더를 투명하게 만듭니다. */
  background-color: transparent;
  outline: none;
`;

//======================================
export const Wrapper = styled.div`
  width: 802px;
height: 595px;
background: #FFFFFF;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 10px;
`;

export const MoneyBox = styled.div`
background: #FFFFFF;
border: 1px solid #D9D9DA;
border-radius: 6px;
`;

export const ScheduleBox = styled.div`
background: #FFFFFF;
border: 1px solid #D9D9DA;
border-radius: 6px;
margin: 0px 0px 0px 30px;
`;

export const PeriodBox = styled.div`
background: #FFFFFF;
/* border: 1px solid #D9D9DA; */
width: 150px;
border-radius: 6px;
margin: 0px 0px 0px 30px;
`;

export const ChoiceBox = styled.div`
width: 100%;
margin: 0px 0px 0px 40px;
font-size: 12px;
`;

export const ChoiceTitleBox = styled.div`
  display: flex;
  color: #ABABAB;
`;

export const TestButton = styled.div`
background: #9155FD;
border-radius: 6px;
font-weight: 600;
font-size: 12px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
padding: 8px 13px;
margin: 10px 0px 0px 10px;
`;
