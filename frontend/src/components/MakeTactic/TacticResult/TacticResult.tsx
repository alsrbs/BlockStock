import { useEffect, useState } from "react";
import CandleChart from "../../Chart/CandleChart";
import useComponentSize from "../../Util/ComponentSize";
import { HistoryChartDiv, HistorySaveButton, HistorySummary, HistorySummaryContents, TacticTitle, TradingHistoryContainer, TradingHistoryContents, TradingHistoryDiv } from "./TacticResult.style";
import OptionHistoryItem from "./OptionHistoryItem";

export interface saveTacticProps {
    title: string;
    optionCode: string,
    taticJsonCode: string,
    tacticPythonCode: string,
    testReturns: string,
}

const TacticResult = (props) => {
    const [componentRef, size] = useComponentSize();
    const [optionHistory, setOptionHistory] = useState<any>([]);
    const [chartInfos, setChartInfos] = useState<any>([]);
    const [startAsset, setStartAsset] = useState(0);
    const [endAsset, setEndAssets] = useState(0);
    const [returnPercent, setReturnPercent] = useState(0);
    // const [title, setTitle] = useState("");
    // const [optionCode, setOptionCode] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
    // const [term, setTerm] = useState("");
    // const [round, setRound] = useState("");

    const axiosGetData = async () => {
        const res = await dummyData;
        setOptionHistory(res.optionHistory)
        setChartInfos(res.chartInfos)
        setStartAsset(res.startAsset)
        setEndAssets(res.endAsset)
        setReturnPercent(res.returnPercent)
    }

    const dummyData = {
        "optionHistory": [
            {
                "type": "buy",
                "turn": 2,    // 몇 번째 턴
                "cost": 8000,   // 주식 가격
                "tradeCnt": 350,   // 거래 수
                "profitAndLoss": 12  // 실현손익 : (매도 평균 - 매수 평균) * 매도 수량
            },
            {
                "type": "sell",
                "turn": 4,
                "cost": 7000,
                "tradeCnt": 300,
                "profitAndLoss": 12
            },
        ],
        "chartInfos": [
            // "opens": [],   // 시가
            // "highs": [],   // 고가
            // "lows": [],    // 저가
            // "closes": [],  // 종가
            // "vols": [],    // 거래량
            // "dates": [],    // 일자
            // "tiems": [],    // 시간
            {
                date: "20210202",
                time: "1600",
                open: 134.9307,
                low: 134.9105,
                high: 135.0215,
                close: 135.0087,
                volume: 73591581
            },
            {
                date: "20210202",
                time: "1545",
                open: 134.9707,
                low: 134.9307,
                high: 134.9707,
                close: 134.9307,
                volume: 67639193
            },
            {
                date: "20210202",
                time: "1530",
                open: 134.6608,
                low: 134.6608,
                high: 134.975,
                close: 134.975,
                volume: 64815258
            },
            {
                date: "20210202",
                time: "1515",
                open: 134.8585,
                low: 134.6237,
                high: 134.9716,
                close: 134.6608,
                volume: 66869896
            },
            {
                date: "20210202",
                time: "1500",
                open: 134.2585,
                low: 134.1237,
                high: 134.2716,
                close: 134.1968,
                volume: 82892896
            },
            {
                date: "20210202",
                time: "1445",
                open: 134.8585,
                low: 134.6237,
                high: 134.9716,
                close: 134.6608,
                volume: 77892896
            }

        ],
        "startAsset": 10000000,    // 초기 자산
        "endAsset": 143001230,     // 최종 자산
        "returnPercent": 1.7,    // 수익률    
    }

    useEffect(() => {
        console.log(componentRef)
    }, [componentRef]);

    useEffect(() => {
        axiosGetData();
    }, [])


    const saveTactic = () => {
        const requestProps = {
            title: props.title,
            optionCode: props.optionCode,
            taticJsonCode: props.tacticJsonCode,
            tacticPythonCode: props.tacticPythonCode,
            testReturns: returnPercent.toString(),
        }
        alert("console에 찍음")
        console.log(requestProps);
    }


    return (
        <TradingHistoryContainer>
            {/* 전략 이름 */}
            <TacticTitle>{props.title}</TacticTitle>

            <TradingHistoryContents>
                {/* 매매내역 */}
                <TradingHistoryDiv>
                    <div>매매내역</div>
                    {optionHistory.map((item, index) => (
                        <div style={{ margin: "5px" }} key={index}>
                            <OptionHistoryItem item={item} round={props.round}></OptionHistoryItem>
                            <button>select</button>
                        </div>
                    ))}

                </TradingHistoryDiv>
                <HistoryChartDiv ref={componentRef}>
                    {/* <div >
                        <p>가로너비: {size.width}px</p>
                        <p>세로너비: {size.height}px</p>
                    </div> */}
                    {/* 차트 */}
                    {
                        (size.width > 0 && size.height > 0)
                            ? <CandleChart curwidth={size.width} curheight={size.height} optionHistory={optionHistory}></CandleChart>
                            : <></>
                    }

                </HistoryChartDiv>
                <HistorySummary>
                    <HistorySummaryContents>
                        {/* 요약 */}
                        <div>초기자산{startAsset}</div>
                        <div>최종자산{startAsset * returnPercent}</div>
                        <div>종목:이름({props.optionCode})</div>
                        <div>주기/횟수:{props.term}/{props.round}</div>
                        <div>시작 일자:{props.startDate.toLocaleDateString()}</div>

                        <div>수익률:{returnPercent}</div>
                        <div>수익금:{startAsset * returnPercent - startAsset}</div>
                        <div>수수료 및 세금:???</div>
                        <div>총 거래 횟수:{optionHistory.length}</div>

                    </HistorySummaryContents>

                    {/* 버튼 */}
                    <HistorySaveButton onClick={saveTactic}>저장하기</HistorySaveButton>

                </HistorySummary>
            </TradingHistoryContents>
        </TradingHistoryContainer>
    )

}

export default TacticResult;