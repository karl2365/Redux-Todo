import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo, toggleTodo, deleteTodo } from '../actions';
import './components.css';


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

    deleteTodo = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
    }

    render(){
        
        return(
            <div className='listContainer'>

                {this.props.todos.map((todo, index) => (
                    <div className='listItem'>
                    <button onClick={e => this.deleteTodo(e, index)}>X</button>
                    <p onClick={e => this.toggleTodo(e, index)} key={index}>{todo.value}&nbsp;&nbsp;{todo.completed && <span className='completed'>Completed</span>}</p>
                    </div>
                ))}
                <form onSubmit={this.addTodo}>
                    <input type='text' value={this.state.newTodo} onChange={this.handleChanges} placeholder='New Todo' required />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}


export default connect(mapStateToProps,{addNewTodo, toggleTodo, deleteTodo})(Todo);
