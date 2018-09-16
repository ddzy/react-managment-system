import * as React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  message,
  Button,
  Divider,
  Modal,
} from 'antd';

import {
  PermissionContainer,
} from './style';
import PermissionDisplay from './PermissionDisplay/PermissionDisplay';
import PermissionAuthorizedModal from './PermissionModal/PermissionAuthorizedModal';
import {
  reduxHandleGetManagerList, 
  IInitialState,
  reduxHandleDeleteManager,
} from './Permission.redux';


export interface IPermissionProps {
  PermissionPageReducer: IInitialState;

  reduxHandleGetManagerList: (
    page: number,
    pageSize: number,
    callback?: () => void,
  ) => void;
  reduxHandleDeleteManager: (
    rowKey: string,
    callback?: () => void,
  ) => void;
};
interface IPermissionState {
  readonly tableLoading: boolean;
  readonly rowKey: string,
  readonly rows: any,

  // 修改权限模态框
  readonly authorizedModal: {
    visible: boolean,
  },
};


/**
 * 权限设置
 */
class Permission extends React.PureComponent<
  IPermissionProps,
  IPermissionState
> {

  public readonly state = {
    tableLoading: false,
    rowKey: '',
    rows: {
      managerCurrentAuthorized: '',
      managerName: '',
    },
    authorizedModal: {
      visible: false,
    },
  }


  public componentDidMount(): void {
    this.handlePagination(1, 10);
  }


  /**
   * 处理 分页获取管理者列表
   */
  public handlePagination = (
    page: number,
    pageSize: number,
  ): void => {
    this.setState({
      tableLoading: true,
    });

    this.props.reduxHandleGetManagerList(
      page,
      pageSize,
      () => {
        message.success('成功获取到数据!');
        this.setState({
          tableLoading: false,
        });
      },
    );
  } 


  /**
   * 处理 初始化管理者表格
   */
  public handleInitManagerTable = (): {
    columns: any[],
    dataSource: any[],
  } => {
    const dataSource: any[] = this
      .props
      .PermissionPageReducer
      .manager_list
      .map((item) => {
        return {
          ...item,
          key: item.managerId,  
        };
      });
    const columns: any[] = [
      {
        title: '编号',
        dataIndex: 'managerId',
        key: 'managerId',
      },
      {
        title: '姓名',
        dataIndex: 'managerName',
        key: 'managerName',
      },
      {
        title: '管理职称',
        dataIndex: 'managerPosition',
        key: 'managerPosition',
      },
      {
        title: '更新时间',
        dataIndex: 'managerUpdateTime',
        key: 'managerUpdateTime',
      },
      {
        title: '状态',
        dataIndex: 'managerState',
        key: 'managerState',
      },
      {
        title: '权限',
        dataIndex: 'managerCurrentAuthorized',
        key: 'managerCurrentAuthorized',
      },
      {
        title: '授权时间',
        dataIndex: 'managerAuthorizedTime',
        key: 'managerAuthorizedTime',
      },
      {
        title: '授权人',
        dataIndex: 'managerAuthorizedPerson',
        key: 'managerAuthorizedPerson',
      },
    ];

    return {
      columns,
      dataSource,
    };
  }


  /**
   * 处理 初始化Card头
   */
  public handleInitCardTitle = (): JSX.Element => {
    return (
      <React.Fragment>
        <Button
          htmlType="button"
          type="primary"
        >创建管理人</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
        >编辑管理者</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleEditAuthorizedClick}
        >管理者授权</Button>
        <Divider type="vertical" />
        <Button
          htmlType="button"
          type="primary"
          onClick={this.handleDeleteManagerClick}
        >删除管理者</Button>
      </React.Fragment>
    );
  }


  /**
   * 处理 表格行点击
   */
  public handleRowChange = (
    rowKey: string,
    rows: any,
  ) => {
    this.setState({
      rowKey: rowKey[0],
      rows: rows[0],
    });
  }


  /**
   * 处理 删除管理者
   */
  public handleDeleteManagerClick: React.MouseEventHandler = (
    e: React.MouseEvent,
  ): void => {
    if(this.state.rowKey) {
      this.setState({ tableLoading: true });

      Modal.confirm({
        title: '确定要删除该管理者吗?',
        onOk: (): void => {
          this.props.reduxHandleDeleteManager(
            this.state.rowKey,
            (): void => {
              this.setState({ tableLoading: false }, () => {
                message.success('删除成功!');
              });
            },
          );
        },
      });
    }else {
      message.error('至少选择一项!');
    }
  }


  /**
   * 处理 修改权限 模态框切换
   */
  public handleEditAuthorizedClick = (): void => {
    this.state.rowKey
      ? this.setState((prevState) => {
          return {
            ...this.state,
            authorizedModal: {
              ...this.state.authorizedModal,
              visible: !prevState.authorizedModal.visible,
            },
          };
        })
      : message.error('请至少选择一项!');
  }


  /**
   * 处理 修改权限 模态框提交
   */
  public handleEditAuthorizedSend: React.MouseEventHandler = (
    values: any,
    callback?: () => void,
  ): void => {
    console.log(values);
    callback && callback();
  }


  public render(): JSX.Element {
    return (
      <PermissionContainer>
        <Card
          title={this.handleInitCardTitle()}
        >
          <PermissionDisplay 
            {...this.handleInitManagerTable()}
            tableLoading={this.state.tableLoading}
            showType={true}
            onRowChange={this.handleRowChange}
            onPagination={this.handlePagination}
          />
        </Card>

        {/* 设置权限modal */}
        <PermissionAuthorizedModal 
          initailManagerCurrentAuthorized={
            this.state.rows.managerCurrentAuthorized
          }
          authorizedModalVisible={
            this.state.authorizedModal.visible
          }
          initialManagerAuthorizedName={
            this.state.rows.managerName
          }

          onCancel={this.handleEditAuthorizedClick}
          onSend={this.handleEditAuthorizedSend}
        />
      </PermissionContainer>
    );
  }

}


function mapStateToProps(state: any) {
  return {
    PermissionPageReducer: state.PermissionPageReducer,
  };
}
function mapDispatchToProps() {
  return {
    reduxHandleGetManagerList,
    reduxHandleDeleteManager,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Permission) as React.ComponentClass;