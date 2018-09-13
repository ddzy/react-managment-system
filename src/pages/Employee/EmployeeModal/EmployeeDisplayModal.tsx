import * as React from 'react';
import { Modal } from 'antd';


export interface IEmployeeDisplayModalProps {
  displayModalVisible: boolean;
  displayModalTitle: string;

  onToggleModal: () => void;
};


//// 员工详情modal
const EmployeeDisplayModal: React.SFC<
  IEmployeeDisplayModalProps
> = (props: IEmployeeDisplayModalProps): JSX.Element => {

  return (
    <Modal
      okText="了解" 
      visible={props.displayModalVisible}
      title={props.displayModalTitle}
      onCancel={props.onToggleModal}
      onOk={props.onToggleModal}
    />
  );

};


export default EmployeeDisplayModal;