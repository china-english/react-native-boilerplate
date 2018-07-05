react-native-boilerplate
=======

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
  6. 是否需要 app 的 header 部分；
  7. 是否需要 app 的 footer 部分；
  8. 是否需要进行数据交互（action、redux...）；
  9. 是否需要 saga；
  > 当 container 的类型为 stateless function 时，8、9不会进行 <br/>
  > 当 container 不需要链接 route 的时候，5不会执行<br/>
  > 当 container 需要链接 route 的时候，会自动在 route 中添加相关 route

### component
  1. ```npm run generate```，然后选择 component 选项；
  2. component 分三类：Component, stateless function, pureComponent；
  3. 输入 component 的名字；

### form
  1. ```npm run generate```，然后选择 form 选项；
  2. 同 component

### formField
  1. ```npm run generate```，然后选择 formField;
  2. 输入 formField 的名字；
  > formField 生成时会自动修改相关引入文件，你只需要在 form 文件中修改相应的 formField type 名即可.


持续更新中...
-------

1. 添加 story-book;
