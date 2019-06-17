import React from 'react';
import { connect } from 'react-redux';


class Todo extends React.Component {



    render(){
        
        return(
            <div>
                {this.props.todos.map(todo => (
                    <p>{todo}</p>

                ))}

            </div>
        )


    }
}


const mapStateToProps = state => {
    return{
        todos: state.todos
    }
}





export default connect(mapStateToProps,{})(Todo);
