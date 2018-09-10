import * as React from 'react';
import { 
  Drawer,
  Form,
  Col,
  Row,
  Radio,
  Button,
  Select, 
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { CreateWrapper } from './style';



export interface ICityCreateProps extends FormComponentProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
};


const CityCreate: React.SFC<ICityCreateProps> = (props: ICityCreateProps): JSX.Element => {
  
  const { getFieldDecorator } = props.form;


  // 添加城市
  const handleSubmit: React.FormEventHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      !err && props.onSubmit(values);
    })
  };

  // 重置
  const handleReset: React.FormEventHandler = () => {
    props.form.resetFields();
  }


  return (
    <CreateWrapper>
      <Drawer
        title="创建城市"
        width={400}
        placement="right"
        visible={props.visible}
        onClose={props.onClose}
        destroyOnClose={true}
      >
        <Form onSubmit={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="城市名称">
                {getFieldDecorator('city', {
                  rules: [],
                  initialValue: '东莞'
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
            </Col>
            <Col span={12}>
              <Form.Item label="用车模式">
                {getFieldDecorator('carMode', {
                  rules: [],
                  initialValue: '停车点',
                })(
                  <Radio.Group>
                    <Radio value="停车点">停车点</Radio>
                    <Radio value="禁停区">禁停区</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="营运模式">
                {getFieldDecorator('moneyMode', {
                  rules: [],
                  initialValue: '自营',
                })(
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="自营">自营</Radio.Button>
                    <Radio.Button value="加盟">加盟</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={6}>
            <Col span={12}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: '100%' }}
                >提交</Button>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button
                  htmlType="reset"
                  type="ghost"
                  style={{ width: '100%' }}
                  onClick={handleReset}
                >重置</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </CreateWrapper>
  );

}


export default Form.create()(CityCreate);
