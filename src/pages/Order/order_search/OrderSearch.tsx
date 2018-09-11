import * as React from 'react';
import { 
  Form, 
  Select, 
  Button, 
  Input,
  DatePicker,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { SearchWrapper } from './style';
import { isArray } from 'util';


export interface ICitySearchProps extends FormComponentProps {
  onSearch: (values: any) => void;
};



const CitySearch: React.SFC<ICitySearchProps> = (props: ICitySearchProps): JSX.Element => {

  const { getFieldDecorator } = props.form;

  /**
   * 重置表单
   */
  const handleReset: React.FormEventHandler = (): void => {
    props.form.resetFields();
  }

  /**
   * 提交数据
   * @param e FormEvent
   */
  const handleSubmit: React.FormEventHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {

      // 格式化日期
      const rangeTimeValue = fieldsValue['orderDateDuring'];
      const values: object = {
        ...fieldsValue,
        orderDateDuring: isArray(rangeTimeValue) 
          && {
            from: rangeTimeValue.length !== 0 
              && rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            to: rangeTimeValue.length !== 0
              && rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'), 
          },  
      };

      props.onSearch(values);
    });
  }

  return (
    <SearchWrapper>
      <Form
        layout="inline"
      >
        <Form.Item label="订单编号">
          {getFieldDecorator('orderId', {
            rules: [],
            initialValue: '',
          })(
            <Input 
              type="text"
              placeholder="请输入要查询的订单编号"
            />
          )}
        </Form.Item>
        <Form.Item label="订单用户">
          {getFieldDecorator('orderUser', {
            rules: [],
            initialValue: '',
          })(
            <Input 
              type="text"
              placeholder="输入要查询的用户名"
            />
          )}
        </Form.Item>
        <Form.Item label="时间戳">
          {getFieldDecorator('orderDateDuring', {
            rules: [],
            initialValue: '',
          })(
            <DatePicker.RangePicker />
          )}
        </Form.Item>
        <Form.Item label="状态">
          {getFieldDecorator('orderState', {
            rules: [],
            initialValue: '',
          })(
            <Select style={{ width: 120 }}>
              <Select.Option value="已结束">已结束</Select.Option>
              <Select.Option value="未开始">未开始</Select.Option>
              <Select.Option value="进行中">进行中</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button 
            htmlType="submit"
            type="primary" 
            style={{
              marginRight: '10px',
            }}
            onClick={handleSubmit}
          >查询</Button>
          <Button 
            htmlType="reset" 
            type="primary"
            onClick={handleReset}  
          >重置</Button>
        </Form.Item>
      </Form>
    </SearchWrapper>
  );

};



export default Form.create()(CitySearch) as React.ComponentClass<any>;

