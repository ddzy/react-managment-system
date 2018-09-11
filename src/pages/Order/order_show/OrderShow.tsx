import * as React from 'react';

import { ShowWrapper } from './style';
import BaseTable from '../../../components/Table/BaseTable';



export interface ICityShowProps {
  dataSource: object[];
  columns: any;

  onRowChange: (
    rowKey: string,
    rows: any,
  ) => void;
};



/**
 * 订单页 => 订单列表展示
 * @param props props
 */
const CityShow: React.SFC<ICityShowProps> = (props: ICityShowProps): JSX.Element => {

  return (
    <ShowWrapper>
      <BaseTable 
        showType={true}
        columns={props.columns}
        dataSource={props.dataSource}
        onRowChange={props.onRowChange}
      />
    </ShowWrapper>
  );

}


export default CityShow;