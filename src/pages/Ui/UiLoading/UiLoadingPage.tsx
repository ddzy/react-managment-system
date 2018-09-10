import * as React from 'react';
import {
  Col,
  Row,
  Spin,
  Alert,
  Card,
} from 'antd';

import { LoadingWrapper } from './style';



class UiLoadingPage extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <LoadingWrapper>
        <Row gutter={16}>
          <Col>
            <Card title="普通loading">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="提示文案loading">
              <Spin tip="加载中...">
                <Alert 
                  message="Alert message title"
                  description="Further details about the context of this alert"
                  type="info"
                />
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="报错文案loading">
              <Spin tip="加载中...">
                <Alert 
                  message="Alert message title"
                  description="Further details about the context of this alert"
                  type="error"
                />
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="提示文案loading">
              <Spin tip="加载中...">
                <Alert 
                  message="Alert message title"
                  description="Further details about the context of this alert"
                  type="success"
                />
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="提示文案loading">
              <Spin tip="加载中...">
                <Alert 
                  message="Alert message title"
                  description="Further details about the context of this alert"
                  type="warning"
                />
              </Spin>
            </Card>
          </Col>
        </Row>
      </LoadingWrapper>
    );
  }
}


export default UiLoadingPage;