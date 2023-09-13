import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	margin-left: -200px;
	margin-bottom: -150px;
	align-items: center;
	height: 85vh;
	/* position: fixed; */
`;
const BackGround = styled.div`
	margin-top: -150px;

`
const Wrapper = styled.div`
	display: flex;
	margin-right: 100px;
	justify-content: end;
	align-items: center;
	height: 100%;
`;
const LoginBox = styled.div`
	align-items: center;
	text-align: center;
	width: 440px;
  	height: 550px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #FFF;
	box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
	z-index: 20;
`;
const LogoImg = styled.img`
	margin-top: 25px;
	margin-left: -20px;
	width: 140px;
`;
const Title = styled.p`
	font-size: 23px;
	font-style: normal;
	font-weight: 700;
	margin-top: 35px;
	margin-bottom: 5px;
`;
const Input = styled.input`
	margin-top: 20px;
	width: 330px;
	height: 45px;
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.22);
	background: #FFF;
	font-size: 15px;
	padding-left: 20px;
`;
const Text = styled.p`
	color: #9155FD;
	font-size: 15px ;
	cursor: pointer;
`
const Box = styled.div`
	display: flex;
	justify-content: end;
	margin-right: 45px;
`;

const LoginBtn = styled.button`
	width: 360px;
	height: 45px;
	font-size: 15px;
	color: white;
	border: 0;
	border-radius: 10px;
	background: #9155FD;
	margin-top: 15px;
	margin-bottom: 25px;
	cursor: pointer;
`;
const Hr = styled.hr`
	width: 80%;
	color: lightgray;
`;
const P = styled.p`
	width: 25px;
	background-color: white;
	color: gray;
	margin: -20px auto 20px auto;
`;
function Login(){
	const navigate = useNavigate();

	return(
		<Container>
			<Wrapper>
				<LoginBox>
					<LogoImg src="./icon/logo.png"/>
					<Title>Welcome to Block Stock!</Title>
					<Input placeholder="E-mail"></Input>
					<Input placeholder="Password"></Input>
					<Box>
						<Text onClick={()=>navigate("/findpw")}>find Password</Text>
					</Box>
					<LoginBtn>Log in</LoginBtn>
					<Hr/>
					<P>or</P>
					<Text onClick={()=> navigate('/signup')}>Sign up</Text>
				</LoginBox>
			</Wrapper>
			<BackGround>
				<svg xmlns="http://www.w3.org/2000/svg" z-index="1" width="100%" height="180" viewBox="0 0 1440 150" fill="none">
					<path d="M733.638 5.50287C757.15 1.51166 781.011 -0.0380349 804.842 0.878527L1120 13L1345.5 37.5L1440 49.5V81V107.573V150H0L71.7834 79.9258C106.238 46.2918 153.532 29.1655 201.533 32.9408L429.054 50.8357C434.667 51.2772 440.312 51.0935 445.885 50.288L607 27L733.638 5.50287Z" fill="#9155FD" fill-opacity="0.1"/>
				</svg>
			</BackGround>
		</Container>
	);
}

export default Login;