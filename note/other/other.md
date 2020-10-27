
## Promise
```bash
1. 对象的状态不受外界影响
2. 四个状态pending-fulfilled(resloved)/pending-rejected
3. 缺点是无法取消。promise建立后立即执行。如果不设置回调函数，promise内部报错后不会反应到外部
4. 基本用法
    const promise = new Promise((resolve, reject) => {
        resolve(value);
        reject(err);
    })
5. promise实例建立后，通过then分别指定resolved和rejected状态的回调
    promise.then((value) => {

    },(error) => {

    })
6. promise实例建立后立即执行，then的回调则需要等待当前脚本执行完成后在执行。
7. then中的第二个用来处理error的回调可以省略，使用promise的catch捕获异常。
    promise.then((value) => {

    }).catch((error) => {

    })
8. catch只能捕获之前的异常，之后的异常如果不想抛出在控制台还需要继续catch
```


## Generator
```bash

```

## async await
```bash
1. async/await 是Generator的语法糖。函数被async修饰后表示函数内异步操作。await表示等待前一个异步方法的执行。
2. async函数返回Promise对象可使用then链，如果指定return了，那也返回一个Promise对象，return的内容作为resolve的参数。
3. async函数执行后，遇到await则会异步等待，等待同步任务执行完成后，在执行第一个await异步请求
4. await返回的Promise对象状态如果出现rejected，后边的await则会中断。为了保存报错信息，需要用try...catch
5. async/await对比Promise的优势在于，前者写法简洁明了，then链过于冗长
```
```bash
async function func(){
    try {
        const num1 = await 200;
        console.info(`num1 is ${num1}`)
    } catch(error) {

    }
}
func();
```