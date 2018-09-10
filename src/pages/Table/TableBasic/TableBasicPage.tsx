import * as React from 'react';
import { 
  Card, 
  Table, 
  Divider, 
  Tag,
  Row,
  Col, 
} from 'antd';
import { connect } from 'react-redux';

import { TableWrapper } from './style';
import { getEmployees } from './TableBasic.redux';




export interface IBasicTablePageProps {
  getEmployees: () => void;
  TableBasicReducer: { employees: object[] };
};
interface IBasicTableState {
  selectedRowKeys: any[] | null;
};



class IBasicTablePage extends React.PureComponent<IBasicTablePageProps, IBasicTableState> {

  public readonly state = {
    selectedRowKeys: [],
  };

  public componentDidMount(): void {
    this.props.getEmployees();
  }

  public initTableOne = (): any => {
    const employees: object[] = this.props.TableBasicReducer.employees;

    const columns: object[] = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Tag',
      key: 'tag',
      dataIndex: 'tag',
      render: (tag: any) => (
        <span>
          {tag.map((t: any) => <Tag color="blue" key={t}>{t}</Tag>)}
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    }];
    const dataSource: object[] | 0 = employees.length !== 0
      ? employees.map((value: any) => {
          return {
            ...value,
            key: value.id,
          };
        })
      : [];

    return { columns, dataSource };
  }


  public initTableTwo = (): any => {
    const { selectedRowKeys } = this.state;

    const columnsTwo: object[] = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    
    
    const dataSourceTwo: any[] = [];
    for(let i = 0; i < 46; i++) {
      dataSourceTwo.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }

    const rowSelection: object = {
      selectedRowKeys,
      onChange: this.handleSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...new Array(46).keys()], // 0...45
          });
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: any, index: number) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys: any) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key: any, index: number) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
 
    };

    return { columnsTwo, dataSourceTwo, rowSelection };
  }


  public handleSelectChange = (selectedRowKeys: any[]) => {
    console.log(selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  
  public render(): JSX.Element {
    const { columns, dataSource } = this.initTableOne();
    const { columnsTwo, dataSourceTwo, rowSelection } = this.initTableTwo();

    console.log(this.initTableTwo());

    return (
      <TableWrapper>
        <Row>
          <Col>
            <Card title="基本用法">
              <Table 
                columns={columns}
                dataSource={dataSource}
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col>
            <Card title="选择和操作">
              <Table 
                columns={columnsTwo}
                dataSource={dataSourceTwo}
                rowSelection={rowSelection}
              />
            </Card>
          </Col>
        </Row>
      </TableWrapper>
    );
  }

}



function mapStateToProps(state: any) {
  return {
    TableBasicReducer: state.TableBasicReducer,
  };
}
function mapDispatchToProps() {
  return {
    getEmployees,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(IBasicTablePage) as React.ComponentClass<any>;