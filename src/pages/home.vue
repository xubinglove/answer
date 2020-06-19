<template>
    <ul @keyup.up="changeSelect(5)">
        <li v-for="(item,index) in dataList"  :key="index" @click="changeSelect(index)" :class="[setlectIndex===index?'active':'']">{{index}}</li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            dataList:[],
            lostpage:[],
            listLength:0,
            start:0,
            setlectIndex:0
        };
    },
    filters: {},
    mounted() {
        //初始化渲染
        this.getOrignData();
        //键盘上下键控制选中
        document.onkeydown=(event)=>{
            var e = event || window.event ;
            console.log(e.keyCode);
            var index=this.setlectIndex;
            if(e.keyCode===38){
                index--
            }
            if(e.keyCode===40){
                index++
            };
            index<0?index=0:(index>this.listLength-1?index=this.listLength-1:'');
            this.changeSelect(index)
        }
    },
    computed: {},
    methods: {
        showList(start,dataArr){
            window.requestAnimationFrame((stamp)=>{
                var end=start+100;
                if(end<this.listLength){    
                    this.dataList.push(...dataArr.slice(start, end));
                    this.showList(end,dataArr)
                }else{
                    this.dataList.push(...dataArr.slice(start, this.listLength));
                }
            })
        },
        getOrignData(){
            this.totalPage++;
            this.$axios.post("http://localhost:8080/getIntegralRankList.do")
            .then(res => {
                var getlist=res.data.map.result;
                this.listLength=getlist.length;
                var start=0;
                this.showList(start,getlist)
            }).catch(()=>{
                
            });
        },
        changeSelect(index){
            this.setlectIndex=index
        }
    },
    components: {}
};
</script>

<style scoped>
li{
    height: 200px;
    text-align: center
}
.active{
    border: 1px solid green
}
</style>


