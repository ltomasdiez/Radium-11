import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted'
        }
    }
    render() {
        const { id, fullName, address, phone, boilersId }=this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    {'ID: '}{id}{' '}
                    {'Name: '}{fullName}{' '}
                    {'Address: '}{address}{' '}
                    {'Phone: '}{phone}{' '}
                    {'Boilers: '}{boilersId}{' '}                    
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired,
    delTodo:PropTypes.func.isRequired
}

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding: '5px 9px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
}

export default TodoItem
