<template>
  <div>
    <todo-input
      v-on:add="addTodo"
    />
    <todo-label
      v-for="todo in sortedTodo"
      v-bind:key="todo.id"
      v-bind:todo="todo"
      v-on:done="doneTodo"
      v-on:remove="removeTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup () {
    // methods
    const { loadData } = useData()
    const { addTodo, removeTodo, doneTodo } = useAction()

    // computed
    const { sortedTodo } = useSort()

    onMounted(async () => {
      // データの読み込み
      await loadData()
    })

    // template内で使用するプロパティ
    return {
      addTodo,
      removeTodo,
      doneTodo,
      sortedTodo
    }
  }
})
</script>
