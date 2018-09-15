import { combineReducers } from 'redux';

import { BaseNavReducer } from '../../components/Nav/BaseNav.redux';
import { BaseHeaderReducer } from '../../components/Header/BaseHeader.redux';
import { UiCardPageReducer } from '../../pages/Ui/UiCard/UiCardPage.redux';
import { EchartsBarReducer } from '../../pages/Echarts/EchartsBar/EchartsBar.redux';
import { LoginPageReducer } from '../../pages/Login/LoginPage.redux';
import { EchartsPieReducer } from '../../pages/Echarts/EchartsPie/EchartsPie.redux';
import { EchartsLineReducer } from '../../pages/Echarts/EchartsLine/EchartsLine.redux';
import { TableBasicReducer } from '../../pages/Table/TableBasic/TableBasic.redux';
import { CityPageReducer } from '../../pages/City/CityPage.redux';
import { OrderPageReducer } from '../../pages/Order/Order.redux';
import { EmployeePageReducer } from '../../pages/Employee/Employee.redux';
import { BikeMapPageReducer } from '../../pages/BikeMap/BikeMap.redux';



const reducer = combineReducers({
  BaseNavReducer,
  BaseHeaderReducer,
  UiCardPageReducer,
  EchartsBarReducer,
  LoginPageReducer,
  EchartsPieReducer,
  EchartsLineReducer,
  TableBasicReducer,
  CityPageReducer,
  OrderPageReducer,
  EmployeePageReducer,
  BikeMapPageReducer,
});


export default reducer;