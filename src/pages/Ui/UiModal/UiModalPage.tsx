import * as React from 'react';
import { Row, Col, Button, Card, Modal } from 'antd';

import {
  ModalWrapper,
} from './style';



interface IUiModalPageState {
  readonly showModalBasic: boolean;
  readonly showModalInfo: boolean;
  readonly showModalError: boolean;
  readonly showModalWarning: boolean;
  readonly showModalSuccess: boolean;
};


class UiModalPage extends React.PureComponent<{}, IUiModalPageState> {

  public readonly state = {
    showModalBasic: false,
    showModalInfo: false,
    showModalError: false,
    showModalWarning: false,
    showModalSuccess: false,
  };

  // Toggle ModalBasic 
  public handleToggleBasicModal = (): void => {
    this.setState((prevState) => {
      return {
        showModalBasic: !prevState.showModalBasic,
      };
    });
  }

  public handleShowModalOther: React.MouseEventHandler = (e: React.MouseEvent): void => {
    const type = e.currentTarget.getAttribute('data-type') as string;
    
    Modal[type]({
      title: `This is ${type} message`,
      content: (
        <div>
          <p>some messages... about this</p>
          <p>some messages... about this</p>
          <p>some messages... about this</p>
        </div>
      ),
    });
  }


  public render(): JSX.Element {
    return (
      <ModalWrapper>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="基础对话框">
              <Button 
                htmlType="button" 
                type="primary" 
                onClick={this.handleToggleBasicModal}
              >普通对话框</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '15px' }}>
          <Col span={24}>
            <Card title="提示对话框">
              <Button 
                htmlType="button" 
                type="primary" 
                data-type="info"
                onClick={this.handleShowModalOther}
              >Info</Button>
              <Button 
                htmlType="button" 
                type="primary" 
                data-type="success"
                onClick={this.handleShowModalOther}
              >Success</Button>
              <Button 
                htmlType="button" 
                type="primary" 
                data-type="error"
                onClick={this.handleShowModalOther}
              >Error</Button>
              <Button 
                htmlType="button" 
                type="primary" 
                data-type="warning"
                onClick={this.handleShowModalOther}
              >Warning</Button>
            </Card>
          </Col>
        </Row>
        <Modal
          title="普通对话框"
          visible={this.state.showModalBasic}
          onOk={this.handleToggleBasicModal}
          onCancel={this.handleToggleBasicModal}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </ModalWrapper>
    );
  }
}


export default UiModalPage;