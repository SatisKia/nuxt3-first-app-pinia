export default () => {
  const loadData = async () => {
    console.log('loadData')

    // データの読み込み処理
    const todoStore = useTodoStore()
    const { initialize, push, setDateType, setDispYear } = todoStore
    initialize()
    const nuxtApp = useNuxtApp()
    for (let i = 0; ; i++) {
      const id = nuxtApp.$myStorage.getValue('id' + i, '')
      if (id.length === 0) {
        break
      }
      const done = nuxtApp.$myStorage.getBool('done' + i, false)
      const date = new Date(nuxtApp.$myStorage.getNumber('date' + i, 0))
      const text = nuxtApp.$myStorage.getValue('text' + i, '')
      const color = nuxtApp.$myStorage.getValue('color' + i, '')
      push({ todo: {
        id: id,
        done: done,
        date: date,
        text: text,
        color: color
      } })
    }
    setDateType({ dateType: nuxtApp.$myStorage.getNumber('dateType', 1) })
    setDispYear({ dispYear: nuxtApp.$myStorage.getBool('dispYear', true) })
  }

  const saveData = () => {
    console.log('saveData')

    // データの書き込み処理
    const todoStore = useTodoStore()
    const { todoList } = storeToRefs(todoStore)
    const nuxtApp = useNuxtApp()
    let i = 0
    for (; i < todoList.value.length; i++) {
      const todo = todoList.value[i]
      nuxtApp.$myStorage.setValue('id' + i, todo.id)
      nuxtApp.$myStorage.setBool('done' + i, todo.done)
      nuxtApp.$myStorage.setNumber('date' + i, todo.date.getTime())
      nuxtApp.$myStorage.setValue('text' + i, todo.text)
      nuxtApp.$myStorage.setValue('color' + i, todo.color)
    }
    nuxtApp.$myStorage.setValue('id' + i, '')
  }

  return {
    loadData,
    saveData
  }
}
