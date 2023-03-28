<script setup lang="ts">
</script>

<template>
  <div>
    Client
    <br/>
    <a href="/chat/">To Chat</a>
    <br/>
    <a href="/admin/">To Admin</a>
    <br/>
    <router-link to="/home">Home</router-link>
    &nbsp;<br/>
    <router-link to="/about">About</router-link>
    <br/>
    <router-view class="box"/>
  </div>
</template>

<style scoped lang="less">
body{
  margin: 0;
  padding: 0;
  display: flex;
}
.box{
  margin: 0;
  padding: 0;
  width: 100vw;
  border:1px solid @mainColor;
  height: 50vh;
}
</style>
