import { ThunkDispatch } from "redux-thunk";
import { query } from "../../../service/request";

export interface IInitialState {
  list: any[];
  type: string;
  highlight: any[];
};


const initialState: IInitialState = {
  list: [],
  type: '',
  highlight: [],
};


export const SAVE_PIE_LIST = 'SAVE_PIE_LIST' as string;



export function savePieList(data: any): { type: string, payload: any } {
  return {
    type: SAVE_PIE_LIST,
    payload: data,
  };
}


export function EchartsPieReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_PIE_LIST:
      return {
        ...state,
        type: action.payload.type,
        // list: state.list.concat(action.payload.list),
        list: action.payload.list,
      };
    default:
      return state;
  }
}



// 获取饼图数据
export function getPieData(data: { type: string }) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ url: `/chart/pie?type=${data.type}`, method: 'GET', jsonp: false })
    .then((res) => {
      dispatch(savePieList(res.data.data));
    });
  };
}