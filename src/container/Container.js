import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodo, fetchTodoPost, inputHandler} from "../store/actions";

class Container extends Component {

    inputHandler = event => {
        this.props.inputHandler(event.target.value)
    };

    componentDidMount() {
        this.props.fetchTodo();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.list !== this.props.list) {
            this.props.fetchTodo();
        }
    }

    postTodo = event => {
        event.preventDefault();
        this.props.fetchTodoPost({text: this.props.text});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.postTodo}>
                    <input type="text" onChange={this.inputHandler}/>
                    <button type="submit">Add</button>
                </form>
                {Object.keys(this.props.list).map(todo => {
                    return (
                        <p key={todo}>{this.props.list[todo].text}</p>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        text: state.text,
        loading: state.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTodo: () => dispatch(fetchTodo()),
        inputHandler: text => dispatch(inputHandler(text)),
        fetchTodoPost: (text) => dispatch(fetchTodoPost(text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);