import * as React from 'react';
import { connect } from 'react-redux';
import { 
  Card, 
  message, 
  Button,
} from 'antd';
import { History } from 'history';

import {
  OrderContainer,
  OrderMain,
} from './style';
import { 
  reduxHandleGetOrderList, 
  reduxHandleFilterOrderList,
  reduxHandleEndOrder,
} from './Order.redux';
import OrderSearch from './order_search/OrderSearch';
import OrderShow from './order_show/OrderShow';


export interface IOrderProps {
  history: History;

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
  reduxHandleEndOrder: (
    orderId: string,
    callback?: () => void,
  ) => void;
};
interface IOrderState {
  readonly rowKey: string;
  readonly rows: any;
  readonly tableLoading: boolean;
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
    tableLoading: false,
  }


  public componentDidMount(): void {
    this.handlePanigation(1, 10);
  }


  /**
   * 处理 查询
   */
  public handleSearch = (
    values: any
  ): void => {
    this.props.reduxHandleFilterOrderList(
      values,
      () => {
        message.info('成功获取到过滤的Mock数据!');
      },  
    );
  }


  /**
   * 处理 初始化表格数据
   */
  public  handleInitTable = (): { 
    dataSource: object[], 
    columns: object[] 
  } => {
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
  ): void => {
    this.setState({
      rowKey,
      rows,
    });
  }


  /**
   * 处理 订单详情 点击
   */
  public handleToDetailsClick: React.MouseEventHandler = (
    e: React.MouseEvent,
  ): void => {
    this.state.rows
      ? this.props.history.push(
          `/order/details/${this.state.rowKey}`,
        )
      : message.error('请选择订单!');
  }


  /**
   * 处理 结束订单 点击
   */
  public handleCloseOrderClick: React.MouseEventHandler = (
    e: React.MouseEvent,
  ): void => {
    this.setState({ tableLoading: true });

    this.props.reduxHandleEndOrder(
      this.state.rowKey,
      () => {
        this.setState({ tableLoading: false });
        message.success('成功结束订单!');
      },
    );
  }


  /**
   * 处理 初始化Card头部
   */
  public handleInitCardTitle = (): JSX.Element => {
    return (
      <React.Fragment>
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleToDetailsClick}
        >订单详情</Button>
        <Button
          htmlType="button"
          type="primary"
          style={{
            marginLeft: '10px',
          }}
          onClick={this.handleCloseOrderClick}
        >结束订单</Button>
      </React.Fragment>
    );
  }


  /**
   * 处理 分页
   */
  public handlePanigation = (
    page: number,
    pageSize: number,
  ): void => {
    this.setState({ tableLoading: true });

    this.props.reduxHandleGetOrderList(
      page,
      pageSize,
      () => {
        this.setState({
          tableLoading: false,
        });
      },
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
              tableLoading={this.state.tableLoading}
              onRowChange={this.handleRowChange}
              onPanigation={this.handlePanigation}
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
    reduxHandleEndOrder,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Order) as React.ComponentClass;