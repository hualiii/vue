export default {
    namespaced:true,
    state:{
        sum:0
    },
    mutations:{
        add(state,value){
            console.log('count')
            state.sum += value
        },
        sub(state,value){
            state.sum -= value
        },
    },
    getters:{
      bigSum(state){
          return state.sum *10
      }
    },
    actions:{
        addOdd(context,value){
            if (context.state.sum % 2){
                context.commit("add",value)
            }
        },
        addAsync(context,value){
            setTimeout(()=>{
                context.commit("add",value)
            },1000)
        }
    }
}