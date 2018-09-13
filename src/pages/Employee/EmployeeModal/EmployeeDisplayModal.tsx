import * as React from 'react';
import { Modal } from 'antd';

import {
  DisplayModalWrapper,
  DisplayModalList,
  DisplayModalListItem,
  ItemLabel,
  ItemContent,
} from '../style';


export interface IEmployeeDisplayModalProps {
  displayModalVisible: boolean;
  displayModalTitle: string;

  one_employee_info: {
    employeeId: string,
    employeeName: string,
    employeeGender: string,
    employeeState: string,
    employeeMarry: string,
    employeeAddress: string,
    employeeJoinTime: string,
    employeeBelongCity: string,
  },

  onToggleModal: () => void;
};


//// 员工详情modal
const EmployeeDisplayModal: React.SFC<
  IEmployeeDisplayModalProps
> = (props: IEmployeeDisplayModalProps): JSX.Element => {


  /**
   * 初始化Modal内容
   */
  function handleInitModalContent(): JSX.Element {
    return (
      <DisplayModalWrapper>
        <DisplayModalList>
          <DisplayModalListItem>
            <ItemLabel>
              员工编号:
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeId}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              姓名:
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeName}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              性别
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeGender}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              婚姻
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeMarry}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              在职状态
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeState}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              地址
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeAddress}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              所属城市
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeBelongCity}
            </ItemContent>
          </DisplayModalListItem>
          <DisplayModalListItem>
            <ItemLabel>
              入职时间
            </ItemLabel>
            <ItemContent>
              {props.one_employee_info.employeeJoinTime}
            </ItemContent>
          </DisplayModalListItem>
        </DisplayModalList>
      </DisplayModalWrapper>
    );
  }


  return (
    <Modal
      okText="了解" 
      visible={props.displayModalVisible}
      title={props.displayModalTitle}
      onCancel={props.onToggleModal}
      onOk={props.onToggleModal}
    >
      {handleInitModalContent()}
    </Modal>
  );

};


export default EmployeeDisplayModal;