import React, { useState } from 'react';
import './index.scss';
import TodoItem from '../TodoItem';
import todoStore from '../../store/TodoStore';
import { observer } from 'mobx-react';

const TodoList = () => {
    const [text, setText] = useState<string>('');
    return (
        <div className='todoList'>
            <div className='input'>
                <input type="text" 
                    placeholder='Please Input the todo Item' 
                    value={text} 
                    onChange={(e: any) => setText(e.target.value)}
                />
                <button onClick={() => todoStore.add(text)}>Add Todo</button>
            </div>
            {
                todoStore.todos.map((todo: any) =>
                    <TodoItem key={todo.no} {...todo} />
                )
            }
            <div className="text">
                <span>Total: {todoStore.total}</span>
                <span>Completed: {todoStore.completed}</span>
            </div>
        </div>
    )
}

export default observer(TodoList);