#  论坛小程序（云开发）

# 一、首页

1. ### 文章展示

                   1. 使用云函数[gitlist]联合查表获取首页数据，【"myshare"，users】（2021.12.25）
                   2. 修改了首页UI【用户头像，用户名，文章标题，文章img/video,文章发布时间】。（2021.12.25）

2. ### 进入详情页

   1. 通过将Object类型转换成Stirng类型得以在跳转页面时传参，然后在响应页进行Sting转Object，获取对应数据。减少数据请求响应。
   2. 



------------------------------



# 二、发布页

1. ### 发布文字

   1. 增加了对于文字内容的数量限制 （2021.12.17）

   2. 

      

2. ### 发布图片和视频

   1. 将图片发送数量增加到3个，完善了指定删除图片    （2021.12.17）
   2. 删除了发布文章对于图片的限制【不选择图片不能发布】（2021.12.17）
   3. 增加了可以发布一个视频【发布视频则不能同时发布图片】 （2021.12.18）
   4. 用户可以不发布图片和视频 而发送内容 （2021.12.18）
   5. 

3. ###  其他 

   1. 对于发布进行不同的提示判断【如果用户没有发布图片或者视频进行提示引导】 （2021.12.17）
   2. 对于云储存在用户删除本地上传的同时删除云储存内容 （2021.12.18）

4. 

----



# 三、用户页

1. ### 用户登陆、信息展示

   1. 增加了登陆提示性引导文字 （2021.12.17）

   

2. ### 用户退出登陆  （2021.12.17）

   1. 清除本地用户信息缓存，改变用户登陆状态

   2. 

      

3. 