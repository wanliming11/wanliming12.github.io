# RN 事件

## 页面导航

> 描述

导航事件 



```js
Emitter.addListener('RNEventTypeNavigator',reminder =>{
  //reminder._event
})
```

`reminder`为json对象，字段如下：

```js
{
  '_event':'',//取值有：RNEventTypeNavigatorPush，RNEventTypeNavigatorPop
  'tag':'',//页面标记
  'type':'',//0:原生页面，1：作为原生页面的子视图显示，不进入页面栈，2：原生页面上的第一个react页面占满屏幕，使用navigator管理页面栈，3：react页面（页面栈的上一个页面也是react页面），占满屏幕，使用navigator管理页面栈，4：h5页面
}
```



## 鱼翅更新

> 描述

鱼翅更新事件

```js
Emitter.addListener('DYPayYuChiSucceed',reminder =>{
  
})
```

`reminder`为json对象，字段如下：

```js
{
	'_event':'DYPayYuChiSucceed'//目前取值只有 DYPayYuChiSucceed
}
```



## 横竖屏切换

> 描述

native发给js的横竖屏切换事件

```js


Emitter.addListener('RNEventTypeOrientationChanged',isLandscape =>{
	//isLandscape 表示是否切位横屏
})

```

## 个人信息页更新

> 描述

个人信息页更新



```js
Emitter.addListener('personalInfoPageUpdate',reminder =>{
  
})
```

`reminder`为json对象，字段如下：

```js
{
	'_event':'personalInfoPageUpdate'//目前取值只有 personalInfoPageUpdate
}
```





## 折叠状态栏变化

> 描述

折叠状态栏 状态变化的事件



```js
Emitter.addListener('DYNativeEventNavigationBarHiddenChanged',reminder =>{
  
})
```

`reminder`为json对象，字段如下：

```js
{
	'isHidden':false//bool 类型 顶部折叠状态栏是否隐藏
}
```





## 关注赛事页刷新

> 描述

刷新关注赛事的页面



```js
Emitter.addListener('DYNativeEventMatchNewsForceRefresh',reminder =>{
  
})
```

`reminder`为json对象，字段如下：

```js
{
	'cid2':''//String 类型 二级分类id
}
```





## 直播间C++消息

> 描述

### 拆包前

`DYRNActivityInfoCenter.postActivityInfo`

活动模块分包前调用该方法

```js
const InfoCenter = {
  
  /**
   * native传给RN的活动信息
   * @param {object} info 活动信息
   * 数据结构
   * 1. c++消息和静态数据
   * {
   *  componentId: ''，
   *  message: {},
   *  config: {}
   * }
   * 2. 通用消息，其他事件，使用eventType区分类型，eventType可能值
   * enterRoom - 进房事件
   * initH5 - H5加载成功
   * closeH5 - H5关闭
   */
  postActivityInfo (info) {
    
  },
}

const BatchedBridge = require('BatchedBridge')
BatchedBridge.registerCallableModule('DYRNActivityInfoCenter', InfoCenter)
```

### 拆包后

`DYRNFramework_InfoCenter.postInfo`

> 描述

活动包拆包后调用该方法



C++主要的 `msg` 如下(拆包前和拆包后的方法都适用)：

|              | componentId                    | msg                                  |
| ------------ | ------------------------------ | ------------------------------------ |
| 隐藏对话框   | *                              | {"type":"hideReactDialog"}           |
| 进房事件     | *                              | {"eventType":"enterRoom"}            |
| H5加载成功   | *                              | {"eventType":"initH5"}               |
| 关闭H5       | *                              | {"eventType":"closeH5"}              |
| 礼物面板选中 | *                              | {"eventType":"giftSelect"}           |
| 展示榜单     | *                              | {"eventType":"showGuessMainView"}    |
| 互动入口点击 | *                              | {"eventType":"interactPanelSelect"}  |
| 点击特效     | *                              | {"eventType":"touchEffectEvent"}     |


