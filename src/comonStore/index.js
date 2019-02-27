import { Container } from 'unstated'

class TodoContainer extends Container {
  state = {
    todos: [
      'Mess around with unstated',
      'Start dance class'
    ],
    todo: '',
    selectedImage:"",
    photos: []
  };

  handleDeleteTodo = (todo) => {
    this.setState({
      todos: this.state.todos.filter(c => c !== todo)
    })
  }

  handleInputChange = (event) => {
    const todo = event.target.value
    this.setState({ todo });
  };

  selectedImage = (img) => {
    this.setState({
      selectedImage:img
    })
  }

  handleCameraPhotos = (photos) => {
    this.setState({
      photos
    })
  }

}

export default TodoContainer