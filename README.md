# simple-Vue
### TemplateCompiler.js是模本解析器，用来解析{{text}}，v-text="test"或者v-model='test'等指令
### watcher.js文件是创建订阅者，即上述的指令都会创建一个订阅者，上述的三个指令创建三个订阅者，放到属于test这个属性的发布者中，每当test属性更新，就会通知所有的订阅者，更新自己。
### observer.js是创建观察者，功能就是劫持vue的data中的数据，使用getter和setter,协调什么时候添加订阅者，什么时候让发布者通知订阅者
### vue发布订阅.png是整个发布订阅的流程图
