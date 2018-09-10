import * as React from 'react';
import { Card, Col, Row, Collapse } from 'antd';

import { CallapseWrapper } from './style';


class UiCollapsePage extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <CallapseWrapper>
        <Row>
          <Col>
            <Card title="折叠面板">
              <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="This is panel header 1" key="1">
                  <p>1111</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2">
                  <p>2222</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3" disabled>
                  <p>3333</p>
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card title="手风琴" style={{ marginTop: 15 }}>
              <Collapse accordion>
                <Collapse.Panel header="This is panel header 1" key="1">
                  <p>1111</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2">
                  <p>2222</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3">
                  <p>3333</p>
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card title="面板嵌套" style={{ marginTop: 15 }}>
              <Collapse>
                <Collapse.Panel header="This is panel header 1" key="1">
                  <Collapse>
                    <Collapse.Panel header="This is panel nest panel" key="1">
                      <p>......</p>
                    </Collapse.Panel>
                  </Collapse>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2">
                  <p>2222</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3">
                  <p>3333</p>
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card title="简洁风格" style={{ marginTop: 15 }}>
              <Collapse accordion bordered={false}>
                <Collapse.Panel header="This is panel header 1" key="1">
                  <p>1111</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2">
                  <p>2222</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3">
                  <p>3333</p>
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </CallapseWrapper>
    );
  }
}


export default UiCollapsePage;