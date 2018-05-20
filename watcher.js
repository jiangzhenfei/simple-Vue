//声明一个订阅者
class Watcher{
    //node 订阅的节点
    //vm 全局vm对象
    //cb 发布时需要做事情
    constructor ( vm, expr, cb ) {
        //缓存重要属性
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;

        //缓存当前值
        this.value = this.get()

    }
    get () {
        //把当前订阅者添加到全局
        Dep.target = this;
        //获取当前值
        var value = this.vm.$data[this.expr]
        //清空全局
        Dep.target = null;
        return value;
    }
    //提供更新方法，应对发布后
    update () {
        //获取新值
        var newValue = this.vm.$data[this.expr]
        //获取老值
        var old = this.value;

        //判断后
        if(newValue !== old){
            //执行回调
            this.cb(newValue)
        }
            
    }
}