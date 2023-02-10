import { IBoard } from "@/src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

interface IProps {
  el: IBoard;
}

export default function CommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickIsEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <div>
          <span>{props.el.writer} : </span>
          <span>{props.el.title}</span>
          <button onClick={onClickIsEdit}>수정하기</button>
        </div>
      )}
      {isEdit && (
        <div>
          <span>
            {props.el.writer} : <input type="text" value={props.el.title} />
          </span>
        </div>
      )}
    </div>
  );
}
