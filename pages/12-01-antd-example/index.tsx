import { useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Rate, Button, Modal } from "antd";
import styled from "@emotion/styled";

const MyIcon = styled(MenuUnfoldOutlined)`
  color: blue;
  font-size: 50px;
`;
const MyStar = styled(Rate)`
  color: yellow;
  font-size: 50px;
`;
const MyDiv = styled.div`
  padding: 10px;
`;

export default function AntdExamplePage() {
  const [value, setValue] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChange(value: number) {
    setValue(value);
    console.log(value);
  }

  const success = () => {
    Modal.success({ content: "게시글 등록 성공" });
  };
  const error = () => {
    Modal.error({ content: "게시글 등록 실패" });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MyDiv>
        <MyIcon />
      </MyDiv>

      <MyDiv>
        <MyStar />
      </MyDiv>
      <MyDiv>
        <Rate onChange={handleChange} value={value} />
      </MyDiv>

      <MyDiv>
        <Button onClick={success}>성공</Button>
        <Button onClick={error}>실패</Button>
      </MyDiv>

      <MyDiv>
        <Button type="primary" onClick={showModal}>
          Modal 열기
        </Button>
        <Modal
          title="Modal 제목"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            비밀번호 입력 : <input type="password" />
          </p>
        </Modal>
      </MyDiv>
    </>
  );
}
