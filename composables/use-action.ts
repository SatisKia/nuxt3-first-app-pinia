export default () => {
  const { saveData } = useData()

  const addTodo = (text: string, color: string) => {
    const todoStore = useTodoStore()
    const { add } = todoStore
    add({ todo: {
      id: (new Date()).getTime().toString(),
      done: false,
      date: new Date(),
      text: text,
      color: color
    } })
    saveData()
  }

  const removeTodo = (id: string) => {
    const todoStore = useTodoStore()
    const { remove } = todoStore
    remove({ id: id })
    saveData()
  }

  const doneTodo = (id: string) => {
    const todoStore = useTodoStore()
    const { done } = todoStore
    done({ id: id })
    saveData()
  }

  return {
    addTodo,
    removeTodo,
    doneTodo
  }
}
