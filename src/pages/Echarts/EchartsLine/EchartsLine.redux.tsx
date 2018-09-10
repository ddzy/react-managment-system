import { ThunkDispatch } from "redux-thunk";
import { query } from "../../../service/request";

export interface IInitialState {
  xAxis: string[];
  xData: any[];
  type: string;
};


const initialState: IInitialState = {
  xAxis: [],
  xData: [],
  type: '',
};


export const SAVE_LINE_LIST = 'SAVE_LINE_LIST' as string;



export function saveLineList(data: any): { type: string, payload: any } {
  return {
    type: SAVE_LINE_LIST,
    payload: data,
  };
}


export function EchartsLineReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_LINE_LIST:
      return {
        ...state,
        type: action.payload.type,
        xAxis: state.xAxis.concat(action.payload.xAxis),
        xData: state.xData.concat(action.payload.xData),
      };
    default:
      return state;
  }
}



// 获取饼图数据
export function getLineData(data: { type: string }) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ url: `/chart/line?type=${data.type}`, method: 'GET', jsonp: false })
    .then((res) => {
      dispatch(saveLineList(res.data.data));
    });
  };
}