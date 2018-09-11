import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Admin from '../Admin'
import App from '../App';
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import UiButtonPage from '../pages/Ui/UiButton/UiButtonPage';
import UiCardPage from '../pages/Ui/UiCard/UiCardPage';
import UiCarouselPage from '../pages/Ui/UiCarousel/UiCarouselPage';
import UiCollapsePage from '../pages/Ui/UiCollapse/UiCollapsePage';
import UiLoadingPage from '../pages/Ui/UiLoading/UiLoadingPage';
import UiMessagePage from '../pages/Ui/UiMessage/UiMessagePage';
import UiModalPage from '../pages/Ui/UiModal/UiModalPage';
import UiNotificationPage from '../pages/Ui/UiNotification/UiNotificationPage';
import UiTabPage from '../pages/Ui/UiTab/UiTabPage';
import FormLoginPage from '../pages/Form/FormLogin/FormLoginPage';
import EchartsBarPage from '../pages/Echarts/EchartsBar/EchartsBarPage';
import EchartsPiePage from '../pages/Echarts/EchartsPie/EchartsPiePage';
import EchartsLinePage from '../pages/Echarts/EchartsLine/EchartsLinePage';
import IBasicTablePage from '../pages/Table/TableBasic/TableBasicPage';
import CityPage from '../pages/City/CityPage';
import RichEditorPage from '../pages/RichEditor/RichEditorPage';
import Order from '../pages/Order/Order';




class RouterConfig extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/ui/button" component={UiButtonPage} />
                    <Route path="/ui/card" component={UiCardPage} />
                    <Route path="/ui/carousel" component={UiCarouselPage} />
                    <Route path="/ui/collapse" component={UiCollapsePage} />
                    <Route path="/ui/loading" component={UiLoadingPage} />
                    <Route path="/ui/message" component={UiMessagePage} />
                    <Route path="/ui/modal" component={UiModalPage} />
                    <Route path="/ui/notification" component={UiNotificationPage} />
                    <Route path="/ui/tab" component={UiTabPage} />
                    <Route path="/form/login" component={FormLoginPage} />
                    <Route path="/chart/bar" component={EchartsBarPage} />
                    <Route path="/chart/pie" component={EchartsPiePage} />
                    <Route path="/chart/line" component={EchartsLinePage} />
                    <Route path="/table/basic" component={IBasicTablePage} />
                    <Route path="/city" component={CityPage} />
                    <Route path="/richeditor" component={RichEditorPage} />
                    <Route path="/order" component={Order} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </Router>
    );
  }
}


export default RouterConfig;