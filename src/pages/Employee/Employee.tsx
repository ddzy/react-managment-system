import * as React from 'react';
import { connect } from 'react-redux';
import { 
  Card, 
  Button, 
  Divider,
  message,
  Modal,
} from 'antd';

import {
  EmployeeContainer,
} from './style';
import {
  reduxHandleGetEmployeeList,
  reduxHandleGetOneEmployee,
  reduxHandleDeleteOneEmployee,
  reduxHandleManageOneEmployee,
} from './Employee.redux';
import EmployeeShow from './EmployeeShow/EmployeeShow';
import EmployeeDisplayModal from './EmployeeModal/EmployeeDisplayModal';
import EmployeeControlModal from './EmployeeModal/EmployeeControlModal';


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
    callback?: () => void,
  ) => void;
  reduxHandleDeleteOneEmployee: (
    employeeId: string,
    callback?: () => void,
  ) => void;
  reduxHandleManageOneEmployee: (
    employeeId: string,
    employeeInfo: any,
    callback?: () => void,
  ) => void;
};
interface IEmployeeState {
  tableLoading: boolean;
  rowKey: string;
  rows: any;

  // 新增|编辑modal
  controlModal: {
    isEdit: boolean,
    drawerTitle: string,
    drawerVisible: boolean,
  },

  // 详情modal
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
    controlModal: {
      isEdit: false,
      drawerTitle: '',
      drawerVisible: false,
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
          onClick={this.handleToggleCreateDrawer}
        >添加员工</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleEmployeeDeleteClick}
        >删除员工</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleToggleEditDrawer}
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


  /**
   * 处理 员工删除
   */
  public handleEmployeeDeleteClick: React.MouseEventHandler = (
    e: React.MouseEvent
  ): void => {
    Modal.confirm({
      title: '确定要删除该员工么?',
      onOk: () => {
        this.props.reduxHandleDeleteOneEmployee(
          this.state.rowKey,
          () => {
            message.success('成功删除该员工!');
          },
        );
      },
    });
  }


  /**
   * 处理 切换 新建drawer
   */
  public handleToggleCreateDrawer: React.MouseEventHandler = (
    e: React.MouseEvent,
  ): void => {
    this.setState((prevState) => {
      return {
        ...this.state,
        controlModal: {
          ...this.state.controlModal,
          drawerTitle: '新建员工',
          isEdit: false,
          drawerVisible: !prevState.controlModal.drawerVisible,
        },
      };
    });
  }


  /**
   * 处理切换 编辑drawer
   */
  public handleToggleEditDrawer: React.MouseEventHandler = (
    e: React.MouseEvent,
  ): void => {

    if(this.state.rowKey) {
      this.setState((prevState) => {
        return {
          ...this.state,
          controlModal: {
            ...this.state.controlModal,
            isEdit: true,
            drawerTitle: '编辑员工',
            drawerVisible: !prevState.controlModal.drawerVisible,
          },
        };
      });
    }else {
      message.error('请至少选择一个员工!');
    } 
  }


  /**
   * 处理 drawer 提交
   */
  public handleDrawerSubmit = (
    values: any,
  ): void => {
    this.props.reduxHandleManageOneEmployee(
      this.state.rowKey,
      values,
      () => {
        this.setState((prevState) => {
          return {
            ...this.state,
            controlModal: {
              ...this.state.controlModal,
              drawerVisible: !prevState.controlModal.drawerVisible,
            },
          };
        });

        message.success('提交成功!');
      },
    );
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

        {/* 创建|编辑 员工 */}
        <EmployeeControlModal 
          {...this.state.controlModal}
          {...this.state.rows[0]}
          onToggleCreateDrawer={this.handleToggleCreateDrawer}
          onSubmit={this.handleDrawerSubmit}
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
    reduxHandleDeleteOneEmployee,
    reduxHandleManageOneEmployee,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Employee) as React.ComponentClass;