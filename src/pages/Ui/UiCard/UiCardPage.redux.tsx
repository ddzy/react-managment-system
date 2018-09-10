import { ThunkDispatch } from "redux-thunk";
import { query } from "../../../service/request";




interface IInitialState {
  cardlist: any[],   // 卡片列表
  hasMore: boolean;   // 
  page: number;       // 当前页数
};


const initialState: IInitialState = {
  cardlist: [],
  hasMore: true,
  page: 1,
};


export const GET_CARD_LIST = 'GET_CARD_LIST' as string;
export const CHANGE_HAS_MORE = 'CHANGE_HAS_MORE' as string;



function save(data: any): { type: string, payload: any } {
  return {
    type: GET_CARD_LIST,
    payload: data,
  };
}

function changeHasMore(more: boolean): { type: string, payload: boolean } {
  return {
    type: CHANGE_HAS_MORE,
    payload: more,
  };
}




export function UiCardPageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
): IInitialState {
  switch(action.type) {
    case GET_CARD_LIST:
      return {
        ...state,
        cardlist: state.cardlist.concat(action.payload.list),
        page: action.payload.page,
      };
    case CHANGE_HAS_MORE:
      return {
        ...state,
        hasMore: action.payload,
      };
    default: 
      return state;
  }
}



/**
 * 获取card列表
 * @param data{ page } 页码
 */
export function getCardList(data: { page: number }) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    query({
      method: 'GET',
      url: `/ui/card/cardlist/?page=${data.page}`,
      jsonp: false,
    }).then((res) => {
      res.data.list.length !== 0
        ? dispatch(save(res.data))
        : dispatch(changeHasMore(false));
    });
  }
}