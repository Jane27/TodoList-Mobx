import * as React from "react";
import "./index.scss";
import { observer } from "mobx-react";
import todoStore from '../../store/TodoStore';

interface IProps {
  no: number;
  title: string;
  done: boolean;
}

const TodoItem: React.FC<IProps> = ({ no, title, done }) => {
  const isDone = done ? "todo done" : "todo";
  return (
    <div className={isDone}>
      <div className="block no">{`NO. ${no}`}</div>
      <div className="block checkbox">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => (todoStore.finish(no))}
        />
      </div>
      <div className="block title">{`${title}`}</div>
      {!done && (
        <div className="block delete">
          <div onClick={() => todoStore.delete(no)}>delete</div>
        </div>
      )}
    </div>
  );
};

export default observer(TodoItem);
