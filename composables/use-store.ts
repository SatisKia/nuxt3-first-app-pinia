import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

export const useTodoStore = defineStore(
  'todoStore',
  () => {
    const todoList = ref([] as Todo[])
    const dateType = ref(1)
    const dispYear = ref(true)
    const initialize = () => {
      todoList.value = [] as Todo[]
    }
    const push = (payload: { todo: Todo }) => {
      todoList.value.push(payload.todo)
    }
    const add = (payload: { todo: Todo }) => {
      todoList.value = [...todoList.value, payload.todo]
    }
    const remove = (payload: { id: string }) => {
      todoList.value = todoList.value.filter(todo => todo.id !== payload.id)
    }
    const done = (payload: { id: string }) => {
      const todo = todoList.value.find(todo => todo.id === payload.id)
      if (todo) {
        todo.done = !todo.done
      }
    }
    const setDateType = (payload: { dateType: number }) => {
      dateType.value = payload.dateType
    }
    const setDispYear = (payload: { dispYear: boolean }) => {
      dispYear.value = payload.dispYear
    }
    return {
      todoList,
      dateType,
      dispYear,
      initialize,
      push,
      add,
      remove,
      done,
      setDateType,
      setDispYear
    }
  }
)
