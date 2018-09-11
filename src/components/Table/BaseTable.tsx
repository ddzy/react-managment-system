import * as React from 'react';
import { Table } from 'antd';



export interface IBaseTableProps {
  columns: object[];
  showType: boolean;
};


const BaseTable = (
  props: IBaseTableProps,
) => {


  /**
   * 初始化行选择功能
   */
  function handleInitRowSelection(

  ): object {
    return {
      type: 'radio',
    };
  }

  
  return (
    <Table 
      bordered={true}
      columns={props.columns || []}
      rowSelection={handleInitRowSelection()}
    />
  );

};


export default BaseTable;