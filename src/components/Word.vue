<template>
  <div>
    <div id="header">
      <h1>{{ msg }}</h1>
    </div>
    <div id="dis">
      <div v-if="!state.visible">
        <button 
          v-bind:key="显示状态"
          @click="想不起来()">
          想不起来
        </button>
      </div>
      <div v-if="state.visible">
        aaaaa
      </div>
    </div>
    <div id="footer">
      <button>知道</button>
      <button>忘了</button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive,onMounted } from "vue";
export default{
  setup() {
    const state = reactive({
      visible:false
    });
    const data = reactive({
      girls:"",
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    //Init
    onMounted(() => {
      state.visible = false;
    });


    const 想不起来 = ()=>{
      state.visible = true;
    }
    const 知道 = ()=>{
      state.visible = true;
    }
    const 不知道 = ()=>{
      state.visible = true;
    }
    return {
      data,
      state,
      想不起来
    };

  }
}
</script>
<style lang="less">
#header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;
    height:80px;
}
#dis {
    background-color:#eeeeee;
    height:300px;
    padding:5px; 
}
#footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    height:50px;
    padding:5px; 
}
</style>