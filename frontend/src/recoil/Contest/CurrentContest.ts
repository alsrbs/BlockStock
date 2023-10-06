import { atom } from 'recoil';

export const searchKeywordState = atom({
  key: 'searchKeywordState',
  default: '',
});

export const currentContestListState = atom({
  key: 'currentContestListState',
  default: [
    {
      id: "1",
      content: 
      "Contest 1 details=================================================================================Contest 1 details=================================================================================Contest 1 details=================================================================================Contest 1 details=================================================================================",
      code: "XYZ123",
      title: "카카오 주식 매매",
      startAsset: "10000",
      term: "Monthly",
      startTime: "2023-01-01 09:00:00",
      endTime: "2023-01-31 18:00:00",
    },
    {
      id: "2",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
    {
      id: "3",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
    {
      id: "4",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
    {
      id: "1",
      content: "Contest 1 details",
      code: "XYZ123",
      title: "카카오 주식 매매",
      startAsset: "10000",
      term: "Monthly",
      startTime: "2023-01-01 09:00:00",
      endTime: "2023-01-31 18:00:00",
    },
    {
      id: "2",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
    {
      id: "3",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
    {
      id: "4",
      content: "Contest 2 details",
      code: "ABC456",
      title: "Contest 2 Title",
      startAsset: "15000",
      term: "Weekly",
      startTime: "2023-02-15 10:30:00",
      endTime: "2023-02-22 16:45:00",
    },
  ],
});