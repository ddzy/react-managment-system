import * as React from 'react';
import { Row, Col, Card, Button, message } from 'antd';

import { MessageWrapper } from './style';


class UiMessagePage extends React.PureComponent<{}, {}> {

  public handleShowMessageBasic: React.MouseEventHandler = (e: React.MouseEvent): void => {
    const type: any = e.currentTarget.getAttribute('data-type');

    message[type](`This is ${type} content`);
  }

  public handleShowMessagePromise: React.MouseEventHandler = (): void => {
    // 使用 Promise 拨错 

    // message.loading('Action in progress..', 3)
    // .then(() => message.success('Loading finished', 2.5))
    // .then(() => message.info('Loading finished is finished', 2.5));

    message['loading']('Action in progress...', 3, () => {
      message.success('Loading success finished...', 2.5, () => {
        message.info('finished info', 2.5);
      });
    });
  }

  public render(): JSX.Element {
    return (
      <MessageWrapper>
        <Row gutter={16}>
          <Col>
            <Card title="全局提示">
              <Button htmlType="button" data-type="success" onClick={this.handleShowMessageBasic}>Success</Button>
              <Button htmlType="button" data-type="error" onClick={this.handleShowMessageBasic}>Error</Button>
              <Button htmlType="button" data-type="info" onClick={this.handleShowMessageBasic}>Normal</Button>
              <Button htmlType="button" data-type="warning" onClick={this.handleShowMessageBasic}>Warning</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col>
            <Card title="Promise接口">
              <Button htmlType="button" onClick={this.handleShowMessagePromise}>Success</Button>
            </Card>
          </Col>
        </Row>
      </MessageWrapper>
    );
  }
}


export default UiMessagePage;