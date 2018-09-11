import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";

export interface IInitialState {
  order_list: any[];
};


const initialState: IInitialState = {
  order_list: [],
};


export const SAVE_ORDER_LIST = 'SAVE_ORDER_LIST' as string;


export function saveOrderList(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_ORDER_LIST,
    payload: data,
  };
}


export function OrderPageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_ORDER_LIST: {
      return {
        ...state,
        order_list: action.payload.order_list,
      };
    }
    default: {
      return state;
    }
  }
}


/**
 * 订单页 获取订单列表
 * @param page 页码
 * @param pageSize 每页显示条数
 * @param callback 回调
 */
export function reduxHandleGetOrderList(
  page: number,
  pageSize: number,
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: '/order/orderlist',
      data: {
        page,
        pageSize,
      },
      jsonp: false,
    }).then((res) => {
      dispatch(saveOrderList(res.data));
      callback && callback(); 
    }); 
  };
}