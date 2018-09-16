import * as React from 'react';

import BaseTable from '../../../components/Table/BaseTable';
import {
  PermissionDisplayWrapper,
} from '../style';


export interface IPermissionDisplayProps {
  tableLoading?: boolean;
  showType: boolean;
  columns: any[];
  dataSource: any[];

  onPagination: (
    page: number,
    pageSize: number,
  ) => void;
  onRowChange: (
    rowKey: string,
    rows: any,
  ) => void;
};



/**
 * 表格展示
 */
const PermissionDisplayProps: React.SFC<IPermissionDisplayProps> = (
  props: IPermissionDisplayProps,
): JSX.Element => {
  

  return (
    <PermissionDisplayWrapper>
      <BaseTable 
        showType={true}
        tableLoading={props.tableLoading}
        columns={props.columns}
        dataSource={props.dataSource}
        onPagination={props.onPagination}
        onRowChange={props.onRowChange}
      />
    </PermissionDisplayWrapper>
  );

}


export default PermissionDisplayProps;