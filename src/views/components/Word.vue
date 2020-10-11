<template>
  <div>
    <div id="header">
      <h1>{{ msg }}</h1>
    </div>
    <div id="dis">
      <div v-if="!state.visible">
        <button 
          v-bind:key="显示状态ID"
          @click="action.想不起来()">
          想不起来
        </button>
      </div>
      <div v-if="state.visible">
        aaaaa
      </div>
    </div>
    <div id="footer">
      <button
        v-bind:key="知道ID"
        @click="action.知道()">
          知道
      </button>
      <button
        v-bind:key="忘了ID"
        @click="action.忘了()">
          忘了
      </button>
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
    const action = reactive({
      想不起来: ()=>{
        state.visible = true;
      },
      知道: ()=>{
        state.visible = true;
      },
      忘了: ()=>{
        state.visible = false;
      }
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

    return {
      data,
      state,
      action,
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