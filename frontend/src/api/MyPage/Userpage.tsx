import { privateApi } from "..";

// 유저페이지 조회 api
export const getUserPage = async () => {
    try{
        console.log('유저페이지 try진입')
        // const response = await privateApi.get(`/member/${userId}`);
        const response = await privateApi.get("/member/39");
        console.log('데이터야?', response.data);
        return response.data;    
    }catch (error) {
        console.error("error!", error);
    }
};