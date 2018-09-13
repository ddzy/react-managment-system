import * as React from 'react';
import {
  Modal,
} from 'antd';


export interface IEmployeeModalProps {
  modalShow: boolean;
  modalTitle: string;
};


/**
 * 员工管理 模态框
 * @param props props
 */
const EmployeeModal: React.SFC<
  IEmployeeModalProps
> = (props: IEmployeeModalProps): JSX.Element => {
  
  return (
    <Modal 
      visible={props.modalShow}
      title={props.modalTitle}
    >
      
    </Modal>
  );

};


export default EmployeeModal;