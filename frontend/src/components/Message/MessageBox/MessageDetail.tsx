import React, {useState} from 'react'
import {
  Container,
  Header,
  HeaderTitle,
  Line,
  HeaderBox,
  Wrapper,
  Box,
  TitleBox,
  UseBox,
  UseImg,
  UseNickName,
  Schedule,
  BoxLine,
  ContentBox,
  Content,
} from './MessageDetail.style'

// 보관함 아이콘
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// back icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// 쪽지 api
import {messageKeep, messageDelete} from '../../../api/Message/Message'

function MessageDetail({onButtonClick, data}){

  const [check, setCheck] = useState(data.marked)
  
    // 쪽지 보관 api
    const messageKeepApi = async()=>{
      const message = await messageKeep(data.id)
      console.log(message)
      if(message===200){
        setCheck(!check)
      }
    }
    
  // 쪽지 삭제 api
  const handleDetail = async()=>{
    console.log(data.id)
    const res = await messageDelete([{id:data.id}])
    console.log(res)
    if (res===200){
      console.log('목록으로 가기')
      onButtonClick('')
    }
  }

  return(
    <>
      <Container>
        <Header>
          <HeaderBox onClick={() => onButtonClick('')}>
            <ArrowBackIosNewIcon style={{color:'#ABABAB'}}/>
            <HeaderTitle> 목록으로</HeaderTitle>
          </HeaderBox>
        </Header>
        <Line/>

        <Wrapper>
          <Box>
            <TitleBox>
              <UseBox>
                <UseImg src='/icon/user_purple.png'/>
                <UseNickName>{data.senderNickname}</UseNickName>
              </UseBox>
              <Schedule>{data.createdAt}</Schedule>
              <div onClick={messageKeepApi}>
                {check ? (
                  <BookmarkIcon 
                  style={{margin:'8px 0px 0px 10px', fontSize:'30px', color:'#FFC700'}}
                  />
                ):(
                  <BookmarkBorderIcon style={{margin:'8px 0px 0px 10px', fontSize:'30px', color:'#929292'}}/>
                )}
              </div>
              
              <img src="/icon/휴지통.png" style={{width:'28px', height:'30px', margin:'8px 0px 0px 10px'}} onClick={handleDetail}/>
            </TitleBox>
            <BoxLine/>
            <ContentBox>
              <Content>
                {data.content}
              </Content>

            </ContentBox>
          </Box>
        </Wrapper>
      </Container>
    </>
  )
}

export default MessageDetail