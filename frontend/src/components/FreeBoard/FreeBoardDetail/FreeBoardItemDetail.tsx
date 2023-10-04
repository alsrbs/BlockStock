import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  PostTitle,
  Header,
  UserImg,
  NickName,
  Date,
  Box,
  Hit,
  Like,
  Comment,
  Wrapper,
  Content,
  DeleteBtn,
  UpdateBtn,
  Line,
  ContentBox,
  BtnBox,
} from './FreeBoardItemDetail.style'

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';

import CommentCreate from "./Comment/CommentCeate";
import CommentList from "./Comment/CommentList";
// 게시글 상세, 삭제
import {freeBoardDetail, freeBoardDelete} from '../../../api/FreeBoard/FreeBoard'
// 리코일 댓글 리스트
import { useRecoilState } from "recoil";
import {commentlist} from '../../../recoil/FreeBoard/Comment'
import { freeBoardList } from "../../../recoil/FreeBoard/FreeBoardList";
import Swal from 'sweetalert2';
// userId
import { useRecoilValue } from 'recoil';
import { CurrentUserAtom } from '../../../recoil/Auth';
// 날짜 변환
import dayjs from "dayjs";
function FreeBoardItemDetail(){

  // userId
  const currentUser = useRecoilValue(CurrentUserAtom);
  const userId = currentUser.userid;

  const navigate = useNavigate();
  const [commentlists, setCommentlists] = useRecoilState(commentlist)
  const [boardItem, setBoardItem] = useRecoilState(freeBoardList)

  // api 통신 ==================================
  // 게시글 번호
  const location = useLocation();
  const state = location.state;

  useEffect(()=>{
    detailApi()
  },[])
  // api 통신 =================================

  const detailApi = async()=>{
    const res = await freeBoardDetail(state.postId)
    console.log(res)
    if (res.status===200){
      setBoardItem(res.data)
    }
  }

  // 게시글 삭제
  const handleDelete =()=> {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      // title: '삭제?',
      // text: "You won't be able to revert this!",
      text: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: `<span>삭제</span>`,
      cancelButtonText: '<span>취소</span>',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          itemDelete()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: '취소되었습니다',
          icon:'error',
          timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
          showConfirmButton: false, // 확인 버튼을 표시하지 않음
          showCancelButton: false, // 취소 버튼을 표시하지 않음
        })
        }
      })
  }
  
  // 삭제 api
  const itemDelete = async ()=>{
    const res = await freeBoardDelete(state.postId)
    console.log(res)
    if(res.status===200){
      navigate('/freeboard')
      Swal.fire({
        title: '삭제되었습니다',
        icon:'success',
        timer: 1000, // 2초 후에 자동으로 사라집니다 (밀리초 단위)
        showConfirmButton: false, // 확인 버튼을 표시하지 않음
        showCancelButton: false, // 취소 버튼을 표시하지 않음
      })
    }
  }


  return(
    <>
      <Container>
        <PostTitle>{boardItem.title}</PostTitle>

        <Header>
          <div style={{display:'flex', minWidth:'500px'}}>
            <UserImg src="/icon/user_purple.png"/>
            <NickName>{boardItem.nickName}</NickName>
            <Date> {dayjs(boardItem.createdAt).format('YYYY.MM.DD HH:mm')}</Date>
          </div>

          <Box>
            <Hit>
              <div style={{margin:'2px 5px 0px 0px'}}>
                <VisibilityIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {boardItem.hit + 1}
              </div>
            </Hit>
            <Like>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <FavoriteBorderIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {boardItem.likeCnt}
              </div>
            </Like>
            <Comment>
              <div style={{margin:'2px 5px 0px 10px'}}>
                <SmsIcon style={{fontSize:'16px'}}/>
              </div>
              <div>
                {commentlists.length}
              </div>
            </Comment>
          </Box>
        </Header>
        <Line />

        <Wrapper>
          <ContentBox>
            <Content>{boardItem.content}</Content>
          </ContentBox>
          {boardItem.memberId === userId ? (
            <>
            <BtnBox>
              <UpdateBtn onClick={() => navigate('/freeboardupdate')}>수정</UpdateBtn>
              <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
            </BtnBox>
            </>
          ) : (
            <></>
          )}
        </Wrapper>
        <Line />
        <CommentCreate state={{ id:state.postId, type:'free' }} />
        <Line />
        <CommentList state={{  id:state.postId, type:'free' }}/>

      </Container>
    </>
  )
}

export default FreeBoardItemDetail