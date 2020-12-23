import { reactive } from 'vue'
function useAddStudent(state) {
    let state2 = reactive({
      stu:{
        id:'',
        name: '',
        age: ''
      }
    })
  
    function addStu(e) {
      e.preventDefault();
      let stu = Object.assign({}, state2.stu)   //防止还没添加过去就被清除
      console.log(stu)
      state.stus.push(stu)
      state2.stu.id = '';
      state2.stu.name = '';
      state2.stu.age = '';
    }
    return { state2, addStu }
  }
  export default useAddStudent;