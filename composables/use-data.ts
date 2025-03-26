export default () => {
  const loadData = async () => {
    console.log('loadData')

    // データの読み込み処理
    const todoStore = useTodoStore()
    const { initialize, push, setDateType, setDispYear } = todoStore
    initialize()
    const nuxtApp = useNuxtApp()
    for (let i = 0; ; i++) {
      const id = nuxtApp.$myCookie.getValue('id' + i, '')
      if (id.length === 0) {
        break
      }
      const done = nuxtApp.$myCookie.getBool('done' + i, false)
      const date = new Date(nuxtApp.$myCookie.getNumber('date' + i, 0))
      const text = nuxtApp.$myCookie.getValue('text' + i, '')
      const color = nuxtApp.$myCookie.getValue('color' + i, '')
      push({ todo: {
        id: id,
        done: done,
        date: date,
        text: text,
        color: color
      } })
    }
    setDateType({ dateType: nuxtApp.$myCookie.getNumber('dateType', 1) })
    setDispYear({ dispYear: nuxtApp.$myCookie.getBool('dispYear', true) })
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
      nuxtApp.$myCookie.setValue('id' + i, todo.id)
      nuxtApp.$myCookie.setBool('done' + i, todo.done)
      nuxtApp.$myCookie.setNumber('date' + i, todo.date.getTime())
      nuxtApp.$myCookie.setValue('text' + i, todo.text)
      nuxtApp.$myCookie.setValue('color' + i, todo.color)
    }
    nuxtApp.$myCookie.setValue('id' + i, '')
  }

  return {
    loadData,
    saveData
  }
}
