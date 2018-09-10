
  interface IInitialState {
    menuName: string,       // 菜单栏名称
  };


// Initial State
  const initialState: IInitialState = {
    menuName: '',
  }; 


// Action-Types
  export const CHANGE_MENU_NAME: string = 'CHANGE_MENU_NAME';




// Action-creators
  /**
   * 存储菜单栏名称
   * @param menuName 
   */
  export function changeMenuName (menuName: IInitialState): { type: string, payload: any } {
    return {
      type: CHANGE_MENU_NAME,
      payload: menuName,
    };
  }




// Reducer
  export function BaseNavReducer(
    state: IInitialState = initialState, 
    action: { type: string, payload: any }
  ): IInitialState {
    switch(action.type) {
      case CHANGE_MENU_NAME:
        return {
          ...state,
          menuName: action.payload,
        };
      default: 
        return initialState;
    }
  }
