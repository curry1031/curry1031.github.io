var posts=["2024/03/13/Linux/","2024/03/13/c-学习手册/","2024/03/14/python-netcoding/","2024/03/13/安全产品/","2024/03/13/渗透测试基础/","2024/03/14/Sqlmap工具使用/","2024/03/13/相关应用层服务/","2024/03/13/网络通信与互联/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };