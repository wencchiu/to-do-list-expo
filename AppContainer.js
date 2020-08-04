import { connect } from 'react-redux';
import { updateTask, addTodo, deleteTodo } from './actions'
import App from './components/App.js'

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => {
    return {
        updateTask: text => dispatch(updateTask(text)), 
        addTodo: task => dispatch(addTodo(task)),
        deleteTodo: index => dispatch(deleteTodo(index))  
    }
}

const AppContainer = connect( 
    mapStateToProps, 
    mapDispatchToProps
)(App)

export default AppContainer;