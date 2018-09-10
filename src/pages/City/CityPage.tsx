import * as React from 'react';
import { Row, Col, Card, Button, message } from 'antd';
import { connect } from 'react-redux';

import { CityWrapper } from './style';
import CitySearch from './CitySearch/CitySearch';
import { getCityList, setCity } from './CityPage.redux';
import CityShow from './CityShow/CityShow';
import CityCreate from './CityCreate/CityCreate';



export interface ICityPageProps {
  getCityList: (values?: any) => void;
  setCity: (values?: any) => void;
  CityPageReducer: { list: object[], successMsg: string | '' };
};
interface ICityPageState {
  readonly loading: boolean;    // 
  readonly visible: boolean;    // 抽屉
};



class CityPage extends React.PureComponent<ICityPageProps, ICityPageState> {

  public readonly state = {
    loading: true,
    visible: false,
  };


  public componentDidMount(): void {
    // 首屏
    this.props.getCityList();
    this.setState({ loading: false });
  }

  // 筛选查询
  public handleSearchSubmit = (values: any): void => {
    this.props.getCityList(values);
  }

  
  public handleCreateButtonClick: React.MouseEventHandler = (): void => {
    this.handleToggleDrawer();
  }


  public handleToggleDrawer = (): void => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }


  // 创建城市
  public handleCreateSubmit = (values: any): void => {
    this.props.setCity(values);
    message.success(this.props.CityPageReducer.successMsg, 3);
  }


  public render(): JSX.Element {
    
    return (
      <CityWrapper>
        <Row>
          <Col>
            <Card>
              {/* 查询 */}
              <CitySearch 
                onSubmit={this.handleSearchSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col>
            <Card title={
              <Button 
                htmlType="button"
                type="primary"
                onClick={this.handleCreateButtonClick}
              >Create-city</Button>}>
              {/* 展示 */}
              <CityShow 
                dataSource={this.props.CityPageReducer.list}
                loading={this.state.loading}
              />
            </Card>
          </Col>
        </Row>

        {/* 创建城市 */}
        <CityCreate 
          visible={this.state.visible}
          onClose={this.handleToggleDrawer}
          onSubmit={this.handleCreateSubmit}
        />
      </CityWrapper>
    );
  }

}



function mapStateToProps(state: any) {
  return {
    CityPageReducer: state.CityPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    getCityList,
    setCity,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(CityPage) as React.ComponentClass<any>;