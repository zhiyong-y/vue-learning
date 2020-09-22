
## vue生命周期
```bash
所有的生命周期钩子自动绑定 this 上下文到实例中。在生命周期中不能使用箭头函数来定义生命周期方法（箭头函数的this是父上下文和实例的this不一致）。
```

```bash
# beforeCreate
beforeCreate() {}

实例初始化之后，data observer和event/watch之前调用
```

```bash
# created
created() {}

实例创建后立即调用。该生命周期中完成：data observer，proproperty和方法的运算，watch/event的回调；
异步获取数据；
DOM未渲染，$el无法使用；
```

```bash
# beforeMount
beforeMount() {}

实例挂载之前执行；
相关的render函数首次调用；
渲染期间不被调用；
```

```bash
# mounted
mounted() {}

挂载之后调用；
DOM渲染完成；
服务器端渲染期间不被调用；
```

```bash
# beforeUpdate
beforeUpdate() {}

调用methods方法，数据变化，触发
```

```bash
# updated
update() {}

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick
```

```bash
# beforeDestroy
```

```bash
# destroyed
```