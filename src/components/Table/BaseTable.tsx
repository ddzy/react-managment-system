import * as React from 'react';
import { Table } from 'antd';



export interface IBaseTableProps {
  columns: object[];
  dataSource: any;
  showType: boolean;      // 是否显示单选框

  onRowChange: (          // 处理选中行
    rowKey: string,
    rows: any,
  ) => void;    
};


const BaseTable = (
  props: IBaseTableProps,
) => {


  /**
   * 处理 初始化行选择功能
   */
  function handleInitRowSelection(): object {
    return {
      type: props.showType 
        ?'radio'
        : '',
      onChange: (rowKey: string, rows: any) => {
        handleRowChange(rowKey, rows);
      },
    };
  }


  /**
   * 处理 选中某一行
   * @param args table行数据
   */
  function handleRowChange(
    rowKey: string,
    rows: any,
  ) {
    props.onRowChange(rowKey, rows);
  }

  
  return (
    <Table 
      bordered={true}
      dataSource={props.dataSource || []}
      columns={props.columns || []}
      rowSelection={handleInitRowSelection()}
    />
  );

};


export default BaseTable;