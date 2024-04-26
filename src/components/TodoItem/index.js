import './index.css'

const TodoItem = props => {
  const {title} = props
  return (
    <div>
      <h1>{title}</h1>
      <button type="button">Delete</button>
    </div>
  )
}

export default TodoItem
