<template>
  <div>
    <button style="width:100%" v-on:click="onSet">設定</button>
    <div style="margin-top:10px">
      <span>年月日表記:</span>
      <div>
        <input type="radio" id="date1" name="date" value="1" v-on:change="selectDateType1" v-bind:checked="state.dateType == 1" />
        <label for="date1">{{ state.dateType1String }}</label>
        <input type="radio" id="date2" name="date" value="2" v-on:change="selectDateType2" v-bind:checked="state.dateType == 2" />
        <label for="date2">{{ state.dateType2String }}</label>
      </div>
    </div>
    <div style="margin-top:10px">
      <input type="checkbox" id="disp-year" v-on:change="changeCheckYear" v-bind:checked="state.dispYear" />
      <label for="disp-year">年を表示する</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'

interface State {
  dateType: number
  dispYear: boolean
  dateType1String: string
  dateType2String: string
}

export default defineComponent({
  setup () {
    const todoStore = useTodoStore()
    const { dateType, dispYear } = storeToRefs(todoStore)
    const { setDateType, setDispYear } = todoStore

    const state = reactive<State>({
      dateType: dateType.value,
      dispYear: dispYear.value,
      dateType1String: dispYear.value ? 'YYYY年MM月DD日' : 'MM月DD日',
      dateType2String: dispYear.value ? 'YY/MM/DD' : 'MM/DD'
    })

    // methods
    const onSet = () => {
      setDateType({ dateType: state.dateType })
      setDispYear({ dispYear: state.dispYear })

      const nuxtApp = useNuxtApp()
      nuxtApp.$myCookie.setNumber('dateType', state.dateType)
      nuxtApp.$myCookie.setBool('dispYear', state.dispYear)

      const router = useRouter()
      router.back()
    }
    const selectDateType1 = () => {
      state.dateType = 1
    }
    const selectDateType2 = () => {
      state.dateType = 2
    }
    const changeCheckYear = () => {
      state.dispYear = !state.dispYear
      state.dateType1String = state.dispYear ? 'YYYY年MM月DD日' : 'MM月DD日'
      state.dateType2String = state.dispYear ? 'YY/MM/DD' : 'MM/DD'
    }

    onBeforeMount(() => {
      console.log('MySetting onBeforeMount')
    })
    onMounted(async () => {
      console.log('MySetting onMounted')
    })
    onBeforeUpdate(() => {
      console.log('MySetting onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('MySetting onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('MySetting onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('MySetting onUnmounted')
    })

    // template内で使用するプロパティ
    return {
      state,
      onSet,
      selectDateType1,
      selectDateType2,
      changeCheckYear
    }
  }
})
</script>
