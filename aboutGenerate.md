模版生成器的使用
---------
> 使用微型框架 [plop](https://github.com/amwmedia/plop)
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

  > 当 container 不需要链接 route 的时候，5不会执行  
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
