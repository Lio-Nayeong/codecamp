import styled from "@emotion/styled";

export const Title = styled.div`
  font-weight: 600;
`;

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
`;
