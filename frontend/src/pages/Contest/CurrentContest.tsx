import React from "react";
import styled from "styled-components";
import CurrentContestContent from "../../components/Contest/ContestStore/CurrentContest/CurrentContestContent";
import ContestStoreBtn from "../../components/Contest/ContestStore/ContestStoreBtn";

const Container = styled.div`
margin: 30px 0px 0px 60px;
width: 1000px;
height: 800px;
`;

function CurrentContest(){

  return(
    <Container>
      <ContestStoreBtn name='/currentcontest'/>
      <CurrentContestContent/>
    </Container>
  )
}

export default CurrentContest