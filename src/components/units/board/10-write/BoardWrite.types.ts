import { IQuery } from "@/src/commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export interface IBlueButtonProps {
  fontSize: string;
  backgroundColor: string;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
