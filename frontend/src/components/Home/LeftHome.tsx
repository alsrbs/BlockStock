import styled from "styled-components";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export const Container = styled.div`
  /* width: 70%; */
  margin-left: 50px;
  margin-right: 250px;
`;
export const InputBox = styled.div`
  display: flex ;
  text-align: center;
  align-items: center;
`
export const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: ${(props)=> props.color || "black"};
`;
export const Input = styled.input`
  padding-left: 20px;
  font-size: 17px;
  margin: 30px 0px;
  width: 380px;
  height: 60px;
  /* flex-shrink: 0; */
  border: 0;
  border-radius: 13px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer; 
`

export const Br = styled.br`
  
`
export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -40px;
`

function LeftHome(){
  return(
    <Container>
      <Title>Get The</Title> 
      <Title color="#9556C7"> Block Stock</Title>
      <Br/>
      <Title>You Deserve</Title>
      <Br/>
      <InputBox>
        <Input placeholder="search"></Input>
        <Img src="./icon/loupe.png" />
      </InputBox>
    </Container>
  );
}


export default LeftHome;