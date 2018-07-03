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

3.
```
npm i
or
yarn
```

4.
```
npm start && react-native run-ios
or
npm start && react-native run-android
```

模版生成器的使用
---------
* container:
  1. ```npm run generate```，然后选择 container 选项；
  2. container 分三类：Component, stateless function, pureComponent；
  3. 输入 container 的名字；
  4. 是否需要 app 的 header 部分；
  5. 是否需要 app 的 footer 部分；
  6. 是否需要进行数据交互（action、redux...）；
  7. 是否需要saga（当第二步选择 stateless function 时，不会创建 saga 相关文件）；


* component:
  1. ```npm run generate```，然后选择 component 选项；
  2. component 分三类：Component, stateless function, pureComponent；
  3. 输入 component 的名字；


持续更新中...
-------

1. 添加 story-book;
