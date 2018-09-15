import { ThunkDispatch } from "redux-thunk";
import { query } from "../../service/request";


export interface IInitialState {
  bike_map_info: {
    bikePoints: any[],
  },
};


const initialState: IInitialState = {
  bike_map_info: {
    bikePoints: [],
  },
};


export const SAVE_BIKE_MAP_INFO = 'SAVE_BIKE_MAP_INFO' as string;


export function saveBikeMapInfo(
  data: any
): { type: string, payload: any } {
  return {
    type: SAVE_BIKE_MAP_INFO,
    payload: data,
  };
}



export function BikeMapPageReducer(
  state: IInitialState = initialState,
  action: { type: string, payload: any },
) {
  switch(action.type) {
    case SAVE_BIKE_MAP_INFO: {
      return {
        ...state,
        bike_map_info: {
          ...state.bike_map_info,
          bikePoints: action.payload.bike_map_info.bikePoints,
        },
      };
    }
    default: {
      return state;
    }
  }
}



/**
 * 获取单车分布数据
 * @param callback 回调
 */
export function reduxHandleGetBikeMapInfo(
  callback?: () => void,
) {
  return (dispatch: ThunkDispatch<any, any, any>): void => {
    query({
      method: 'GET',
      url: '/bikeMap/getinfo',
      jsonp: false,
    }).then((res) => {
      dispatch(saveBikeMapInfo(res.data));
      callback && callback();
    }); 
  };
}

