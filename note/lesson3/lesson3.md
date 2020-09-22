
## 计算属性和监听
```bash
# computed
    计算属性中的值，不需要在data中，是通过计算属性得到的。
    !!!多个值作用影响一个值的时候使用computed
    !!!计算属性具有缓存性，如果值没有发生变化，页面不会重新渲染，如果放在methods中，每次都会渲染。
    !!!语句简洁
# watch
    监听data中定义好的。
    !!!一个值的变化影响多个值。
    !!!默认不会立即执行，如果需要立即执行，需要使用带操作的watch.
    watch: {
        course(newValue, oldValue) {
            // 最新变化的值
            // newValue === this.course
            console.info(newValue)
        }
    }
    watch: {
        course: {
            immediate: true, // 立即执行
            deep: true, // 监控深层属性
            handler(newValue, oldValue) {
                console.info(newValue)
            }
        }
    }

3. lodash.js
```