export default {
    install(Vue){
        // 使用混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })
    }
}