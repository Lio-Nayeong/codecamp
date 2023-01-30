import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const Title = styled.div`
  font-weight: 600;
`;

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props: IBlueButtonProps) => props.fontSize};
  background-color: ${(props: IBlueButtonProps) => props.backgroundColor};
`;
