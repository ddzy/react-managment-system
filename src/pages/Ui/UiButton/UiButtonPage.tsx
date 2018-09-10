import * as React from 'react';
import { Row, Col, Card, Button, Menu, Dropdown, Icon } from 'antd';


import {
  ButtonWrapper,
} from './style';


class UiButtonPage extends React.PureComponent<{}, {}> {

  public readonly menu = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  
  

  public render(): JSX.Element {
    return (
      <ButtonWrapper>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="按钮类型">
              <Button type="primary" htmlType="button">Primary</Button>
              <Button type="default" htmlType="button">Default</Button>
              <Button type="dashed" htmlType="button">Dashed</Button>
              <Button type="danger" htmlType="button">Danger</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="图标按钮">
              <Button htmlType="button" type="primary" shape="circle" icon="search" />
              <Button htmlType="button" type="primary" icon="search">Search</Button>
              <Button htmlType="button" shape="circle" icon="search" />
              <Button htmlType="button" icon="search">Search</Button>
              <Button htmlType="button" shape="circle" icon="search" />
              <Button htmlType="button" icon="search">Search</Button>
              <Button htmlType="button" type="dashed" shape="circle" icon="search" />
              <Button htmlType="button" type="dashed" icon="search">Search</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="loading按钮">
              <Button htmlType="button" type="primary" loading>
                Loading
              </Button>
              <Button htmlType="button" type="primary" size="small" loading>
                Loading
              </Button>
              <Button htmlType="button" shape="circle" loading />
              <Button htmlType="button" type="primary" shape="circle" loading />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="多个按钮组合">
              <Button htmlType="button" type="primary">primary</Button>
              <Button htmlType="button">secondary</Button>
              <Dropdown overlay={this.menu}>
                <Button htmlType="button">
                  Actions <Icon type="down" />
                </Button>
              </Dropdown>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="幽灵按钮">
              <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                <Button htmlType="button" type="primary" ghost>Primary</Button>
                <Button htmlType="button" ghost>Default</Button>
                <Button htmlType="button" type="dashed" ghost>Dashed</Button>
                <Button htmlType="button" type="danger" ghost>danger</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </ButtonWrapper>
    );
  }
}


export default UiButtonPage;