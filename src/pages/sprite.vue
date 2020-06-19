<template>
<div >
    <vueDrawCircle 
        apiUrl="http://lxgo.cmread.com:18443/grpage/lotteryDraw.do" 
        :dataParmas="dataParmas" 
        :circlePan="circlePan"
        :point="point"
        ></vueDrawCircle>
    <scratch
        :bgImg="bgImg"
        aUrl='http://lxgo.cmread.com:18443/grpage/lotteryDraw.do'
        :aParmas="dataParmas" 
    ></scratch>
    <nineCell></nineCell>
</div> 
</template>
<script>
import {recordOpration} from '../vendor/commonMethods';
export default {
    name:'sprite',
    data(){
        return {
            showBtn:false,
            dataParmas:{
                testDemo:1
            },
            circlePan:require("../assets/images/circlePan.png"),
            point:require("../assets/images/point.png"),
            bgImg:require('../assets/images/scraping3.png')
        }
    },
    //test
    mounted(){
    },
    methods:{
        downLoadApp () {
            recordOpration();
            let ua=navigator.userAgent
            let httpUrl='at.umtrack.com/riqW9v'
            if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                window.location.href = 'lingxi://iflytek//'+httpUrl
            } else {
                if(ua.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
                    window.location.href = 'http://xz.voicecloud.cn/resources/lxdl/index.html?n=16011316';
                }else{
                    httpUrl='https://'+httpUrl
                    window.location.href = 'lingxi://data?url='+httpUrl;
                }        
            }
            setTimeout(()=> {
                //超时跳灵犀应用商店下载页
                 if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    window.location.href = 'https://at.umtrack.com/0LrKze'
                } else {
                    window.location.href = 'https://at.umtrack.com/LL59Du'             
                } 
            }, 1500);  
        }
    }
}
</script>
<style scoped>
.mainBg{
    width:100%;
    min-height: 100vh;
    background-image: url('../assets/images/mainBg.png');
    background-repeat: no-repeat;
    background-size: 100% auto; 
    position: relative;
    background-color: rgb(50,140,165)
}
.title{
    position: absolute;
    font-size:36px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    width: 100%;
    text-align:center;
    left: 0;
}
.title1{
    top: 710px;
    letter-spacing: 4px
}
.title1 span{
    margin-left:15px;
    color: #FFF074;
    letter-spacing: 0!important;
    margin-right: 20px
}
.title2{
    top: 755px;
    letter-spacing: 6px
}
.downBtn{
    position: absolute;
    width: 360px;
    height: 130px;
    background-image: url('../assets/images/downBtn.gif');
    background-repeat: no-repeat;
    background-size:100% auto;
    left: 50%;
    top: 826px;
    margin-left: -180px
}
.title3{
    width: 100%;
    font-size:24px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(149,232,255,1);
    text-align: center;
    position: absolute;
    left: 0;
    top: 985px
}
</style>
