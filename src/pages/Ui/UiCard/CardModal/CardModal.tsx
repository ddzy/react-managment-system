import * as React from 'react';
import { Modal, Card } from 'antd';


export interface ICardModalProps {
  visible: boolean;   // 开关
  url: string | '';   
  desc: string | '';
  title: string | '';
  onCancel: () => void; // 取消按钮事件
};


/**
 * 卡片modal
 */
const CardModal = (props: ICardModalProps): JSX.Element => {
  return (
    <React.Fragment>
      <Modal
        cancelText="离开"
        okText="不错"
        title={props.title}
        destroyOnClose={true}
        visible={props.visible}
        onCancel={props.onCancel}
        onOk={props.onCancel}
      >
        <Card
          style={{ width: 240 }}
          cover={<img alt={props.title} src={props.url} />}
        >
          <Card.Meta
            description={props.desc}
          />
        </Card>,
      </Modal>
    </React.Fragment>
  );
}


export default CardModal;