import * as React from 'react';

import { ShowWrapper } from './style';
import { isArray } from 'util';
import BaseTable from '../../../components/Table/BaseTable';



export interface ICityShowProps {
  dataSource: object[];
};



/**
 * 订单页 => 订单列表展示
 * @param props props
 */
const CityShow: React.SFC<ICityShowProps> = (props: ICityShowProps): JSX.Element => {


  // 初始化表格数据
  const initTable = (): { dataSource: object[], columns: object[] } => {
    const dataSource: object[] = props.dataSource.map((value: any) => {
      return {
        ...value,
        key: value.id,
        city_admin: isArray(value.city_admin) 
                      ? value.city_admin.join('、')
                      : value.city_admin,
      };
    });
    const columns = [{
      title: '城市ID',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: '城市名称',
      dataIndex: 'city',
      key: 'city',
    }, {
      title: '用车模式',
      dataIndex: 'carMode',
      key: 'carMode',
    }, {
      title: '营运模式',
      dataIndex: 'moneyMode',
      key: 'moneyMode',
    }, {
      title: '授权加盟商',
      dataIndex: 'authShop',
      key: 'authShop',
    }, {
      title: '城市管理员',
      dataIndex: 'city_admin',
      key: 'city_admin',
    }, {
      title: '城市开通时间',
      dataIndex: 'city_create_time',
      key: 'city_create_time',
    }, {
      title: '操作时间',
      dataIndex: 'control_time',
      key: 'control_time',
    }, {
      title: '操作人',
      dataIndex: 'admin',
      key: 'admin',
    }];

    return { dataSource, columns };
  }


  return (
    <ShowWrapper>
      <BaseTable 
        showType={true}
        columns={initTable().columns}
      />
    </ShowWrapper>
  );

}


export default CityShow;