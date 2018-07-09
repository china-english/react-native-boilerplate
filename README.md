react-native-boilerplate
=======

* react => 16.3.1
* react-native => 0.55.4

|verison|plug-in|note|
|:---:|---|---|
|[0.0.1](https://github.com/china-english/react-native-boilerplate/releases/tag/0.0.1)|react-native-router-flux,native-base,redux-immutable,redux-saga| |
|[0.1.0](https://github.com/china-english/react-native-boilerplate/releases/tag/0.1.0)|redux-form| 在 0.0.1 的基础上添加 redux-form|
|[0.1.1](https://github.com/china-english/react-native-boilerplate/releases/tag/0.1.1)|redux-form| 在 0.1.0 的基础上添加 redux-form 生成器|
|[0.2.0](https://github.com/china-english/react-native-boilerplate/releases/tag/0.2.0)|story-book| |

![img](https://github.com/china-english/react-native-boilerplate/blob/master/gif/generate.gif)

插件介绍
--------

1. [react => 16.3.1](https://5b05c94e0733d530fd1fafe0--reactjs.netlify.com/docs/hello-world.html)

2. [react-native => 0.55.4](https://facebook.github.io/react-native/docs/0.55/getting-started.html)

3. [native-base => 2.6.1](https://docs.nativebase.io/Components.html#Components)

4. [prop-types => 15.6.2](https://github.com/facebook/prop-types)

5. [react-native-router-flux => 4.0.0-beta.31](https://github.com/aksonov/react-native-router-flux)

6. [redux-saga => 0.16.0](https://redux-saga.js.org/)

7. [redux-immutable => 4.0.0](https://github.com/gajus/redux-immutable)

8. [redux-form => 7.4.2](https://redux-form.com/7.4.2/examples/)

开始使用
-------

1. ```git clone https://github.com/china-english/react-native-boilerplate.git```

2. ```cd react-native-boilerplate```

3. ```npm i or yarn```

4. ```npm start && react-native run-ios or npm start && react-native run-android```

模版生成器的使用
---------
### container

  1. ```npm run generate```，然后选择 container 选项；

  2. container 分三类：Component, stateless function, pureComponent；

  3. 输入 container 的名字；

  4. container 是否需要链接 route；

  5. 输入 route 的名字；

  6. 是否需要翻译 container；

  7. 是否需要 app 的 header 部分；

  8. 是否需要 app 的 footer 部分；

  9. 是否需要进行数据交互（action、redux...）；

  10. 是否需要 saga；

  > 当 container 的类型为 stateless function 时，8、9不会进行 <br/>
  > 当 container 不需要链接 route 的时候，5不会执行<br/>
  > 当 container 需要链接 route 的时候，会自动在 route 中添加相关 route

### component

  1. ```npm run generate```，然后选择 component 选项；

  2. component 分三类：Component, stateless function, pureComponent；

  3. 输入 component 的名字；

  4. 是否需要翻译 component；

  5. 是否需要链接 storybook；


### form

  1. ```npm run generate```，然后选择 form 选项；

  2. form 分三类：Component, stateless function, pureComponent；

  3. 输入 form 的名字；

  4. 是否需要翻译 form；

  5. 是否需要链接 storybook；


### formField

  1. ```npm run generate```，然后选择 formField;

  2. 输入 formField 的名字；

  3. 是否需要翻译 formField；

  4. 是否需要链接 storybook；

  > formField 生成时会自动修改相关引入文件，你只需要在 form 文件中修改相应的 formField type 名即可.


storybook 的使用
-------

1. ```npm run storybook```

2. ```react-native run-ios or react-native run-android```

3. 打开 http://localhost:7007/ 就可以测试已有的组件了

> 当你运行 storybook 时，你的应用将无法运行(被 storybook 覆盖)，想要返回应用时，需要停止 ```npm run storybook``` 重跑 ```npm start``` <br />
> 当你使用 native-base 时，存在两个特殊组件（ header 和 container ），已将其单独处理。
> 当你使用 ```npm run generate``` 生成新的 storybook 时，请 重新跑一次 ```npm run storybook```
