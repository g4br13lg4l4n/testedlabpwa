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

<script>
export default {};
</script>