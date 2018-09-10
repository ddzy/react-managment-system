import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";


export interface IInitialState {
  list: any[];
  successMsg: string,
};


const initialState: IInitialState = {
  list: [],
  successMsg: 'Success!',
};


export const SAVE_LIST = 'SAVE_LIST';
export const SET_LIST = 'SET_LIST';


export function saveList(data: any): { type: string, payload: any } {
  return {
    type: SAVE_LIST,
    payload: data,
  };
}

export function setSuccessMsg(data: any): { type: string, payload: any } {
  return {
    type: SET_LIST,
    payload: data,
  };
}



export function CityPageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_LIST:
      return {
        ...state,
        list: action.payload.list,
      };
    case SET_LIST:
      return {
        ...state,
        successMsg: action.payload.message,
      };
    default:
      return state;
  }
}


// 获取城市列表
export function getCityList(values?: any) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ method: 'GET', url: '/city/citylist' , jsonp: false, data: values})
      .then((res) => {
        dispatch(saveList(res.data));
      });
  };
}


// 创建城市
export function setCity(values?: any) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({ method: 'POST', url: '/city/createcity', jsonp: false, data: values }).then((res) => {
      dispatch(setSuccessMsg(res.data));
    });
  };
}

