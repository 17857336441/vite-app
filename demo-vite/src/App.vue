<template>
  <div>
    <form>
      <input type="text" v-model="state2.stu.id">
      <input type="text" v-model="state2.stu.name">
      <input type="text" v-model="state2.stu.age">
      <button type="button" @click="addStu">提交</button>
    </form>
    <ul>
      <li v-for="(item, index) in state.stus" :key="item.id" @click="remStu(index)"> 
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
//import { reactive } from 'vue'
import useRemoveStudent from './assets/js/remove'
import useAddStudent from './assets/js/add'

export default {
  name: 'App',
  setup() {
    
    let { state, remStu } = useRemoveStudent();
    let { state2, addStu } = useAddStudent(state);


    return { state, remStu, state2, addStu }
  }
}




</script>