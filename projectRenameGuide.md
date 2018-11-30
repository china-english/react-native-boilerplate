# 常见问题解答
-------

## 刚 clone 下来的项目无法运行
修改项目设置
![correct_run_app_1](https://res.cloudinary.com/fei/image/upload/v1543563874/correct_run_app_1.png)
![correct_run_app_2](https://res.cloudinary.com/fei/image/upload/v1543563874/correct_run_app_2.png)

## 如何修改项目文件夹名称
项目原名称为 `nativeBoilerplate`，以下步骤讲述如何将项目修改为 `yourProject`。

### iOS 项目文件夹改名指南
1. 使用 Xcode 打开项目。选中旧工程名，改为新的；
![rename_step_1](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_1.png)

2. 选择 rename ，点击全部同意；
![rename_step_2](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_2.png)

3. 然后选择黄色文件夹的旧项目名称，使用新项目名称将其替换；
![rename_step_3](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_3.png)

4. 在 Xcode 中搜索旧项目名称并用新项目名称替换（部分文件需要手动替换）；
![rename_step_4](https://res.cloudinary.com/fei/image/upload/v1543563856/rename_step_4.png)
![rename_step_5](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_5.png)
![rename_step_10](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_10.png)

5. 修改项目的 Scheme；
![rename_step_6](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_6.png)
![rename_step_7](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_7.png)
![rename_step_8](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_8.png)
6. 同 Android 第一步；



### Android 项目文件夹改名指南
1. 在 Android 项目中搜索旧项目包名`nativeBoilerplate`，用`yourProject`全局替换；
![rename_step_9](https://res.cloudinary.com/fei/image/upload/v1543563855/rename_step_9.png)

2. 修改 `android/app/src/main/java/com/`下的`nativeBoilerplate`文件夹名为 为`yourProject`；


## 如何修改项目名称
全局搜索 `Boilerplate` 并替换成新项目的名称。
