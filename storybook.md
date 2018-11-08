storybook 的使用
-------

1. ```npm run storybook```

2. ```react-native run-ios or react-native run-android```

3. 打开 http://localhost:7007/ 就可以测试已有的组件了

> 当你运行 storybook 时，你的应用将无法运行(被 storybook 覆盖)，想要返回应用时，需要停止 ```npm run storybook``` 重新 ```npm start``` 随后刷新你的应用即可  
> 当你使用 native-base 时，存在两个特殊组件（ header 和 container ），已将其单独处理。  
> 当你使用 ```npm run generate``` 生成新的 storybook 时，请 重新跑一次 ```npm run storybook```
