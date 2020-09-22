
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