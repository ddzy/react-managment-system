import { ThunkDispatch } from "redux-thunk";
import { query } from "../../../service/request";


export interface IInitialState {
  delayData: { xAxis: string[], xDataOne: string[], xDataTwo: string[], type: string } | '';     // 柱状图-动画延迟
  stuckData: { xAxis: string[], xData: string[], type: string } | '';   // 堆叠图
  crossData: { yAxis: string[], yData: string[], type: string } | '';   // 交叉图
};


const initialState: IInitialState = {
  delayData: { xAxis: [], xDataOne: [], xDataTwo: [], type: '' },
  stuckData: { xAxis: [], xData: [], type: '' },
  crossData: { yAxis: [], yData: [], type: '' },
};


const SAVE_DELAYDATA = 'SAVE_DELAYDATA' as string;
const SAVE_STUCKDATA = 'SAVE_STUCKDATA' as string;
const SAVE_CROSSDATA = 'SAVE_CROSSDATA' as string;



export function saveDelayData(data: any): { type: string, payload: any } {
  return {
    type: SAVE_DELAYDATA,
    payload: data,
  };
}

export function saveStuckData(data: any): { type: string, payload: any } {
  return {
    type: SAVE_STUCKDATA,
    payload: data,
  };
}

export function saveCrossData(data: any): { type: string, payload: any } {
  return {
    type: SAVE_CROSSDATA,
    payload: data,
  };
}




export function EchartsBarReducer(
  state: IInitialState = initialState, 
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_DELAYDATA:
      return {
        ...state,
        delayData: {
          ...state.delayData,
          type: action.payload.type,
          xAxis: action.payload.xAxis,
          xDataOne: action.payload.xDataOne,
          xDataTwo: action.payload.xDataTwo,
        },
      };
    case SAVE_STUCKDATA:
      return {
        ...state,
        stuckData: {
          ...state.stuckData,
          type: action.payload.type,
          xAxis: action.payload.xAxis,
          xData: action.payload.xData,
        },
      };
    case SAVE_CROSSDATA:
      return {
        ...state,
        crossData: {
          ...state.crossData,
          type: action.payload.type,
          yAxis: action.payload.yAxis,
          yData: action.payload.yData,
        },
      };
    default:
      return state;
  }
}


export function getBarData(data: { type: string }): any {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ method: 'GET', url: `/chart/bar?type=${data.type}`, jsonp: false })
      .then((res) => {
        // 
        switch(data.type) {
          case 'delay':
            dispatch(saveDelayData(res.data.data));
            break;
          case 'stuck':
            dispatch(saveStuckData(res.data.data));
            break;
          case 'cross':
            dispatch(saveCrossData(res.data.data));
          default:
            break;
        }
      });
  };
}


