import { computed } from 'vue'
import type { Todo } from '@/types/todo'

export default () => {
  const sortedTodo = computed(() => {
    const todoStore = useTodoStore()
    const { todoList } = storeToRefs(todoStore)
    return todoList.value.sort((a: Todo, b: Todo) => {
      return b.date.getTime() - a.date.getTime()
    })
  })

  return {
    sortedTodo
  }
}
