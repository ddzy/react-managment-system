import * as React from 'react';
import { connect } from 'react-redux';
import { 
  Card, 
  message, 
  Button,
} from 'antd';

import {
  OrderContainer,
  OrderMain,
} from './style';
import { 
  reduxHandleGetOrderList, 
  reduxHandleFilterOrderList,
} from './Order.redux';
import OrderSearch from './order_search/OrderSearch';
import OrderShow from './order_show/OrderShow';


export interface IOrderProps {
  OrderPageReducer: { order_list: any[] };

  reduxHandleGetOrderList: (
    page: number,
    pageSize: number,
    callback?: () => void,
  ) => void;
  reduxHandleFilterOrderList: (
    values: any,
    callback?: () => void,
  ) => void;
};
interface IOrderState {
  readonly rowKey: string,
  readonly rows: any,
};



/**
 * 订单详情页
 */
class Order extends React.PureComponent<
  IOrderProps,
  IOrderState
> {

  public readonly state = {
    rowKey: '',
    rows: '',
  }


  public componentDidMount(): void {
    this.props.reduxHandleGetOrderList(
      1,
      10,
    );
  }


  /**
   * 处理 查询
   */
  public handleSearch = (
    values: any
  ) => {
    this.props.reduxHandleFilterOrderList(
      values,
      () => {
        message.info('成功获取到过滤的Mock数据!');
      },  
    );
  }


  /**
   * 初始化表格数据
   */
  public  handleInitTable = (): { dataSource: object[], columns: object[] } => {
    const dataSource: object[] = this.props
      .OrderPageReducer.order_list
      .map((item: any) => {
        return {
          ...item,
          key: item.orderId,
        };
      });
    const columns = [{
      title: '订单编号',
      dataIndex: 'orderId',
      key: 'orderId'
    }, {
      title: '车辆编号',
      dataIndex: 'carId',
      key: 'carId',
    }, {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '地址',
      dataIndex: 'useraddress',
      key: 'useraddress',
    }, {
      title: '里程',
      dataIndex: 'mileage',
      key: 'mileage',
    }, {
      title: '行程时长',
      dataIndex: 'mileage_time',
      key: 'mileage_time',
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    }, {
      title: '开始时间',
      dataIndex: 'begin_time',
      key: 'begin_time',
    }, {
      title: '结束时间',
      dataIndex: 'finish_time',
      key: 'finish_time',
    }, {
      title: '订单金额',
      dataIndex: 'should_money',
      key: 'should_money',
    }, {
      title: '实付金额',
      dataIndex: 'current_money',
      key: 'current_money',
    }];

    return { dataSource, columns };
  }


  /**
   * 处理 选中表格单元行
   */
  public handleRowChange = (
    rowKey: string,
    rows: any,
  ) => {
    this.setState({
      rowKey,
      rows,
    });
  }


  /**
   * 初始化Card头部
   */
  public handleInitCardTitle = (): JSX.Element => {
    return (
      <React.Fragment>
        <Button
          htmlType="button"
          type="primary"
        >订单详情</Button>
        <Button
          htmlType="button"
          type="primary"
          style={{
            marginLeft: '10px',
          }}
        >结束订单</Button>
      </React.Fragment>
    );
  }


  public render(): JSX.Element {
    return (
      <OrderContainer>
        <OrderMain>
          <Card>
            <OrderSearch 
              onSearch={this.handleSearch}
            />
          </Card>
          <Card
            title={this.handleInitCardTitle()}
            style={{
              textAlign: 'left',
              marginTop: '15px',
            }}
          >
            <OrderShow 
              {...this.handleInitTable()}
              onRowChange={this.handleRowChange}
            />
          </Card>
        </OrderMain>
      </OrderContainer>
    );
  }

}


function mapStateToProps(state: any) {
  return {
    OrderPageReducer: state.OrderPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    reduxHandleGetOrderList,
    reduxHandleFilterOrderList,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Order) as React.ComponentClass;