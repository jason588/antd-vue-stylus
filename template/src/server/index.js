//全部配置 https://github.com/axios/axios#request-config
$http.get('userinfo',{
  method: 'get',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
}).then((res)=>{
    console.log(`欢迎你，${res.data.userName}先生`);
})
