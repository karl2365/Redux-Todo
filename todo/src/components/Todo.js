import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo, toggleTodo } from '../actions';


class Todo extends React.Component {
    state = {
        newTodo: ''
    }


    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
    };

    render(){
        
        return(
            <div>

                {this.props.todos.map((todo, index) => (
                    <p onClick={e => this.toggleTodo(e, index)} key={index}>{todo.value}&nbsp;&nbsp;{todo.completed && <strong>Completed</strong>}</p>
                ))}
                <input type='text' value={this.state.newTodo} onChange={this.handleChanges} placeholder='New Todo' />
                <button onClick={this.addTodo}>Add Todo</button>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}


export default connect(mapStateToProps,{addNewTodo, toggleTodo})(Todo);
