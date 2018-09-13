import * as React from 'react';
import { connect } from 'react-redux';
import { 
  Card, 
  Button, 
  Divider,
  message,
} from 'antd';

import {
  EmployeeContainer,
} from './style';
import {
  reduxHandleGetEmployeeList,
  reduxHandleGetOneEmployee,
} from './Employee.redux';
import EmployeeShow from './EmployeeShow/EmployeeShow';
import EmployeeDisplayModal from './EmployeeModal/EmployeeDisplayModal';


export interface IEmployeeProps {
  EmployeePageReducer: { 
    employee_list: any[], 
    one_employee_info: any,
  };

  reduxHandleGetEmployeeList: (
    page: number,
    pageSize: number,
    callback?: () => void,
  ) => void;
  reduxHandleGetOneEmployee: (
    employeeId: string,
  ) => void;
};
interface IEmployeeState {
  tableLoading: boolean;
  rowKey: string;
  rows: any;

  displayModal: {
    displayModalVisible: boolean,
    displayModalTitle: string,
  };
};


//// 员工管理页
class Employee extends React.PureComponent<
  IEmployeeProps,
  IEmployeeState
> {

  public readonly state = {
    tableLoading: false,
    rowKey: '',
    rows: '',
    displayModal: {
      displayModalVisible: false,
      displayModalTitle: '员工详情',
    },
  }


  public componentDidMount(): void {
    this.handlePagination(1, 10);
  }


  /**
   * 处理 分页
   */
  public handlePagination = (
    page: number,
    pageSize: number,
  ): void => {
    this.setState({ tableLoading: true });

    this.props.reduxHandleGetEmployeeList(
      page,
      pageSize,
      () => {
        this.setState({ tableLoading: false });
      },
    );
  }


  /**
   * 处理 初始化表格
   */
  public handleInitEmployeeTable = (): any => {
    const dataSource: object[] = this
      .props
      .EmployeePageReducer
      .employee_list
      .map((item: any) => {
        return {
          ...item,
          key: item.employeeId,
        };
      });
    const columns = [{
      title: '职工编号',
      dataIndex: 'employeeId',
      key: 'employeeId'
    }, {
      title: '姓名',
      dataIndex: 'employeeName',
      key: 'employeeName',
    }, {
      title: '性别',
      dataIndex: 'employeeGender',
      key: 'employeeGender',
    }, {
      title: '状态',
      dataIndex: 'employeeState',
      key: 'employeeState',
    }, {
      title: '婚姻',
      dataIndex: 'employeeMarry',
      key: 'employeeMarry',
    }, {
      title: '地址',
      dataIndex: 'employeeAddress',
      key: 'employeeAddress',
    }, {
      title: '入职时间',
      dataIndex: 'employeeJoinTime',
      key: 'employeeJoinTime',
    }, {
      title: '所属城市',
      dataIndex: 'employeeBelongCity',
      key: 'employeeBelongCity',
    }];

    return { dataSource, columns };
  }


  /**
   * 处理 表格行切换
   */
  public handleRowChange = (
    rowKey: string[],
    rows: any,
  ): void => {
    this.setState({
      rowKey: rowKey[0],
      rows,
    });
  }


  /**
   * 处理 初始化Card头
   */
  public handleInitCardTitle = (): JSX.Element => {
    return (
      <div style={{ textAlign: 'left' }}>
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleEmployeeDisplayClick}
        >员工详情</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
        >添加员工</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
        >删除员工</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
        >编辑员工</Button>
      </div>
    );
  }


  /**
   * 处理 员工详情 Modal切换
   */
  public handleToggleModal = (): void => {
    this.setState((prevState) => {
      return {
        ...prevState,
        displayModal: {
          ...prevState.displayModal,
          displayModalVisible: !prevState.displayModal.displayModalVisible,
        },
      };
    });
  }


  /**
   * 处理 员工详情
   */
  public handleEmployeeDisplayClick: React.MouseEventHandler = (
    e: React.MouseEvent,
  ) => {
    if(this.state.rowKey) {
      this.handleToggleModal();
      this.props.reduxHandleGetOneEmployee(
        this.state.rowKey,
      );
    }else {
      message.error('请至少选择一个员工!');
    }
  }


  public render(): JSX.Element {
    return (
      <EmployeeContainer>
        <Card
          title={this.handleInitCardTitle()}
        >
          <EmployeeShow 
            {...this.handleInitEmployeeTable()}
            tableLoading={this.state.tableLoading}
            onRowChange={this.handleRowChange}
            onPanigation={this.handlePagination}
          />
        </Card>

        {/* 员工详情 */}
        <EmployeeDisplayModal 
          {...this.state.displayModal}
          {...this.props.EmployeePageReducer}
          onToggleModal={this.handleToggleModal}
        />
      </EmployeeContainer>
    );
  }

}


function mapStateToProps(state: any) {
  return {
    EmployeePageReducer: state.EmployeePageReducer,
  };
}
function mapDispatchToProps() {
  return {
    reduxHandleGetEmployeeList,
    reduxHandleGetOneEmployee,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Employee) as React.ComponentClass;