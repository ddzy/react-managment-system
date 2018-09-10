import * as React from 'react';
import { Row, Col, Card, Tabs, Icon } from 'antd';

import { TabWrapper } from './style';



class UiTabPage extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <TabWrapper>
        <Row gutter={16}>
          <Col>
            <Card title="默认选中第一项">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">Content of Tab 1</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">Content of Tab 2</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">Content of Tab 3</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 4" key="4">Content of Tab 4</Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="禁用某一项">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">Content of Tab 1</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">Content of Tab 2</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3" disabled>Content of Tab 3</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 4" key="4">Content of Tab 4</Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="带图标的标签">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={<span><Icon type="apple" /></span>} key="1">Content of Tab 1</Tabs.TabPane>
                <Tabs.TabPane tab={<span><Icon type="laptop" /></span>} key="2">Content of Tab 2</Tabs.TabPane>
                <Tabs.TabPane tab={<span><Icon type="meh-o" /></span>} key="3">Content of Tab 3</Tabs.TabPane>
                <Tabs.TabPane tab={<span><Icon type="smile" /></span>} key="4">Content of Tab 4</Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="卡片式页签容器">
              <Tabs type="card">
                <Tabs.TabPane tab="Tab Title 1" key="1">
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab Title 2" key="2">
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab Title 3" key="3">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </TabWrapper>
    );
  }
}


export default UiTabPage;