import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <form>
                <div className="input_form">
                    <label></label>
                    <input
                        type="text"
                        placeholder="TODOリスト"
                    />
                </div>
            </form>
        )
    }
}