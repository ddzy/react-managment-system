import { query } from "../../service/request";
import { ThunkDispatch } from "../../../node_modules/redux-thunk";



export interface IInitialState {
  city: string;     
  weather: string;
  date: string;
  theme: string;
};



// Initial-State
const initialState: IInitialState = {
  city: '',     // 城市
  weather: '',    // 天气
  date: '',     // 日期
  theme: '#fff'   // 主题
};


// Action-Types
export const SAVE_CITY_AND_WEATHER = 'SAVE_CITY_AND_WEATHER' as string;
export const CHANGE_THEME = 'CHANGE_THEME' as string;



// Action-Creators
export function saveCity(data: any): { type: string, payload: any } {
  return {
    type: SAVE_CITY_AND_WEATHER,
    payload: data,
  };
}



// Reducers
export function BaseHeaderReducer(
  state: IInitialState = initialState, 
  action: { type: string, payload: any }
): IInitialState {
  switch(action.type) {
    case SAVE_CITY_AND_WEATHER:
      return {
        ...state,
        city: action.payload.city,
        weather: action.payload.weather,
        date: action.payload.date,
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
}



// Effects

/**
 * 获取城市及天气
 */
export function getCityAndWeather (
) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    const myCity = new BMap.LocalCity();

    myCity.get((result: any) => {
      query({
        method: 'GET',
        url: `https://www.sojson.com/open/api/weather/json.shtml?city=${result.name}`,
        jsonp: false,
      })
        .then((res) => {
          if (res.status === 200 ) {
            dispatch(saveCity({
              city: result.name,
              weather: res.data.forecast[0].type || '',
              date: new Date().toLocaleDateString().replace(/\//g, '-'),
            }));
          }
        });
    });
  }
}
