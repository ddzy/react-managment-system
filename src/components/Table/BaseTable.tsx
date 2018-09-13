import * as React from 'react';
import { Table } from 'antd';



export interface IBaseTableProps {
  tableLoading: boolean;     // 加载状态

  columns: object[];
  dataSource: any;
  showType: boolean;      // 是否显示单选框

  onRowChange: (          // 处理选中行
    rowKey: string,
    rows: any,
  ) => void;
  
  onPagination: (         // 处理分页
    page: number,
    pageSize: number,
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


  /**
   * 处理分页
   * @param page 当前页数
   * @param pageSize 当前页显示条数
   */
  function handleChange(
    page: number, 
    pageSize: number,
  ) {
    props.onPagination(page, pageSize);
  }

  
  return (
    <Table
      loading={props.tableLoading} 
      bordered={true}
      dataSource={props.dataSource || []}
      columns={props.columns || []}
      rowSelection={handleInitRowSelection()}
      pagination={{
        total: 30,
        onChange: handleChange,
      }}
    />
  );

};


export default BaseTable;