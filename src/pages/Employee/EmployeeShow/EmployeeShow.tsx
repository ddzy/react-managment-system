import * as React from 'react';

import { ShowWrapper } from '../style';
import BaseTable from '../../../components/Table/BaseTable';



export interface IEmployeeShowProps {
  dataSource: object[];
  columns: any;

  tableLoading: boolean;

  onRowChange: (
    rowKey: string,
    rows: any,
  ) => void;

  onPanigation: (
    page: number,
    pageSize: number,
  ) => void;
};



/**
 * 员工管理页 => 员工列表展示
 * @param props props
 */
const EmployeeShow: React.SFC<
  IEmployeeShowProps
> = (props: IEmployeeShowProps): JSX.Element => {

  return (
    <ShowWrapper>
      <BaseTable 
        showType={true}
        tableLoading={props.tableLoading}
        columns={props.columns}
        dataSource={props.dataSource}
        onRowChange={props.onRowChange}
        onPagination={props.onPanigation}
      />
    </ShowWrapper>
  );

}


export default EmployeeShow;