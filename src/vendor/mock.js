import Mock from 'mockjs'
Mock.mock('http://localhost:8080/getIntegralRankList.do', (req, res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let answer = {
        "resultCode": "0000",
        "resultMsg": "查询成功",
        "total": "2",
        "map": {
          "result|3000": [
            {
              "number|+1": 1,
              "profile": "http://cc//dd",
              "userName": "cc",
              "score": "200",
              "name": "每日签到",
                "score": "2",
                "time": "03-03 20:00"
            },
          ],
          "myScore": "120",
          "myRank": "2"
        },
        "allTotal": 2
      }
  
    return  Mock.mock(answer) 
    
})