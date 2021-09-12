import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        const todoList = ['タスク１', 'タスク２', 'タスク３'];
        return (
            <div>
                {todoList.map((todoItem) => {
                    return (
                        <div>・{todoItem}</div>
                    )
                })}
            </div>
        )
    }
}