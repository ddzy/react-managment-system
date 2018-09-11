import * as React from 'react';
import { Form, Select, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { SearchWrapper } from './style';


export interface ICitySearchProps extends FormComponentProps {
  // onSubmit: (values: any) => void;
};


const CitySearch: React.SFC<ICitySearchProps> = (props: ICitySearchProps): JSX.Element => {

  const { getFieldDecorator } = props.form;

  // 重置
  const handleReset: React.FormEventHandler = (): void => {
    props.form.resetFields();
  }

  // 提交
  const handleSubmit: React.FormEventHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(values);
    });
  }

  return (
    <SearchWrapper>
      <Form
        layout="inline"
      >
        <Form.Item label="城市">
          {getFieldDecorator('city', {
            rules: [],
          })(
            <Select style={{ width: 120 }}>
              <Select.Option value="东莞">东莞</Select.Option>
              <Select.Option value="上海">上海</Select.Option>
              <Select.Option value="北京">北京</Select.Option>
              <Select.Option value="广州">广州</Select.Option>
              <Select.Option value="杭州">杭州</Select.Option>
              <Select.Option value="浙江">浙江</Select.Option>
              <Select.Option value="云南">云南</Select.Option>
              <Select.Option value="庆阳">庆阳</Select.Option>
              <Select.Option value="西安">西安</Select.Option>
              <Select.Option value="咸阳">咸阳</Select.Option>
              <Select.Option value="西峰">西峰</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="用车模式">
          {getFieldDecorator('carMode', {
            rules: [],
          })(
            <Select style={{ width: 120 }}>
              <Select.Option value="停车点">停车点</Select.Option>
              <Select.Option value="禁停区">禁停区</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="营收模式">
          {getFieldDecorator('moneyMode', {
            rules: [],
            initialValue: '加盟'
          })(
            <Select style={{ width: 120 }}>
              <Select.Option value="加盟">加盟</Select.Option>
              <Select.Option value="自营">自营</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="授权商">
          {getFieldDecorator('authShop', {
            rules: [],
          })(
            <Select style={{ width: 120 }}>
              <Select.Option value="芒果自营">芒果自营</Select.Option>
              <Select.Option value="西瓜自营">西瓜自营</Select.Option>
              <Select.Option value="苹果自营">苹果自营</Select.Option>
              <Select.Option value="香蕉自营">香蕉自营</Select.Option>
              <Select.Option value="菠萝自营">菠萝自营</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={handleSubmit}>查询</Button>
          <Button htmlType="reset" onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
    </SearchWrapper>
  );

};



export default Form.create()(CitySearch) as React.ComponentClass<any>;

