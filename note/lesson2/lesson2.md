## 模板语法
``` bash
# 插值
> 文本
1. {{}}: Mustache语法
2. v-once指令，只能执行一次插值操作。
> 原始HTML
v-html="str"
> 属性
v-bind:attr="data"
:attr="data"
> 使用JavaScript表达式
# 指令
```

## 列表渲染
```bash
1. v-for 指令，item in items
```

## 表单输入绑定
```bash
1. v-model
```

## 事件处理
```bash
1. v-on:click="eventName" / @click="eventName"
2. 事件修饰符：
3. 按键修饰符：v-on:keyup.enter/v-on:keyup.page-down
    .enter / .tab / .delete / .esc / .space / .up / .down / .left / .right / .page-down
    
```

## 绑定样式
```bash
1. :class="{className: expression}"
2. :style="{propName: expression}"
```

## 条件渲染
```bash
1. :class="{className: expression}"
2. :style="{propName: expression}"
```