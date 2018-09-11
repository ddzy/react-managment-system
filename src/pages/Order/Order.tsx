import * as React from 'react';
import { connect } from 'react-redux';

import {
  OrderContainer,
  OrderMain,
} from './style';
import { reduxHandleGetOrderList } from './Order.redux';
import OrderSearch from './order_search/OrderSearch';
import OrderShow from './order_show/OrderShow';


export interface IOrderProps {
  OrderPageReducer: { order_list: any[] };

  reduxHandleGetOrderList: (
    page: number,
    pageSize: number,
    callback?: () => void,
  ) => void;
};
interface IOrderState {};



/**
 * 订单详情页
 */
class Order extends React.PureComponent<
  IOrderProps,
  IOrderState
> {

  public readonly state = {}


  public componentDidMount(): void {
    this.props.reduxHandleGetOrderList(
      1,
      10,
      () => {
        console.log(this.props.OrderPageReducer);
      },
    );
  }


  /**
   * 处理查询
   */
  public handleSearch = (
    values: any
  ) => {
    console.log(values);
  }


  public render(): JSX.Element {
    return (
      <OrderContainer>
        <OrderMain>
          <OrderSearch 
            onSearch={this.handleSearch}
          />
          <OrderShow 
            dataSource={[]}
          />
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Order) as React.ComponentClass;