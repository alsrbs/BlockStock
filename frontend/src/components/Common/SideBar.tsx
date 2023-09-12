import styled from "styled-components";
// import Swal from 'sweetalert2'

const Container = styled.div`
    position: fixed;
    margin-top: 80px;
`;
const SideWrapper = styled.div`
  padding-top: 10px;
  width  :26vh;
  height: 90vh;
`;
const ClickBox1 = styled.div`
	height: 42px;
  display: flex;
  align-items: center;
	border-radius: 0px 50px 50px 0px;
	background-color: rgba(235, 236, 242, 0.81);
	&:hover {
		background: linear-gradient(270deg, #AC85F4 0%, #9256FD 0.01%, #D3BBFF 100%);
		background-blend-mode: multiply;
    color: white;
    transition: 0.5s;
  }
`;
const ClickBox = styled.div`
	height: 42px;
  display: flex;
  align-items: center;
	border-radius: 0px 50px 50px 0px;
	transition: 0.5s;
	&:hover {
		background: linear-gradient(270deg, #AC85F4 0%, #9256FD 0.01%, #D3BBFF 100%);
		background-blend-mode: multiply;
    color: white;
    transition: 0.5s;
  }
`;
const Img = styled.img`
    width: 15px;
    height: 15px;
    margin: 0px 20px;
`;
const Text = styled.p`
  font-size  : 17px;
  color: #504b53;
`;
const Menu = styled.div`
	font-size: 15px;
	margin-left: 55px;
	color: #504b53;
	transition: 0.5s;
	&:hover {
    color: #ffffff;
    transition: 0.5s;
  }
`;

function SideBar(){
    return(
        <Container>
            <SideWrapper>
                <ClickBox1>
                    <Img src="./icon/home.png"/>
                    <Text>Home</Text>
								</ClickBox1>
								<ClickBox>
                    <Img src="./icon/circle.png"/>
										<Text>Tactic</Text>
                </ClickBox>
								<ClickBox>
                    <Img src="./icon/circle.png"/>
										<Text>Contest</Text>
                </ClickBox>
								<ClickBox>
										<Menu>개요</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>진행중인 대회</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>예정 대회</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>종료 대회</Menu>
                </ClickBox>
								<ClickBox>
                    <Img src="./icon/circle.png"/>
										<Text>Board</Text>
                </ClickBox>
								<ClickBox>
										<Menu>자유 게시판</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>전략 게시판</Menu>
                </ClickBox>
								<ClickBox>
                    <Img src="./icon/user_black.png"/>
										<Text>User</Text>
                </ClickBox>
								<ClickBox>
										<Menu>프로필</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>나의 게시글</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>좋아요 목록</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>기록 관리</Menu>
                </ClickBox>
								<ClickBox>
										<Menu>전략 목록</Menu>
                </ClickBox>
            </SideWrapper>
        </Container>
    );
}

export default SideBar;