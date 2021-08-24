<template>
  <div>
    <el-container>
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <Aside />
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <Menu />
        </el-header>
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.300349px;
  color: #0360AD;
}
.sub-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.300349px;
  color: #222B45;
}
.row-select {
  background: #FFFFFF;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
}
.round-primary {
  border: 1px solid #3E64FF !important;
  color: #3E64FF;
}
</style>