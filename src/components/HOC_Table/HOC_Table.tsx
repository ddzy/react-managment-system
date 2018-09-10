import * as React from 'react';
import { Table } from 'antd';



export interface IPPComponentProps {
  columns: object[];
  type: 'radio' | 'checkbox' | undefined;
};
interface IPPComponentState {};


const HOCTable = (WrapperComponent: React.Component): React.ComponentClass<any> => {
  return class PPComponent extends React.PureComponent<IPPComponentProps, IPPComponentState> {

    public readonly state = {

    };


    public initColumns = () => {
      // const { columns } = this.props;
      console.log(WrapperComponent);
    }


    public render(): JSX.Element {
      return (
        <Table 
          columns={this.props.columns}
          rowSelection={{
            type: this.props.type,
          }}
        />
      );
    } 

  }
};


export default HOCTable;