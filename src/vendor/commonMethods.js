import axios from 'axios';
// let Base64 = require('js-base64').Base64;

//分享功能接口


export function recordData(page,channel){
    let baseURl='http://lxh5.cmread.com:8443';
    if(location.href.indexOf('debug')>-1){
        baseURl='http://112.13.170.197:8443'
    }
    axios.get(baseURl+'/rttpage/recordVisitInfo.do?token=' 
    + '&activityId=26&lxType=2'  
    + '&channelNo=' + channel 
    + '&webNo=' + page +
    '&sourceType=2')
    .then((res)=>{
    })
}
export function recordOpration(){
    axios.post('http://lxh5.cmread.com:8443/rttpage/auserOperationrecord.do', {
        operartionType:29, // 操作类型
        token: '', // token
        lxType: 2, // 1-灵犀token，2-wap授权token
        identification: 'sprite', // 标识（以前的所属项目）
        targetId:36, // 33 翻译作品id 34 翻译作品id 35 活动id
        channelNo: '', // 渠道号
        activityId:26,
        sourceType:'2',
        requestUrl:window.location.href,
        loginName:''
    }).then((res) => {
        
    })
}