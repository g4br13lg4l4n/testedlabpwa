<template>
    <div class="px-5 min-h-full min-h-screen">
        <el-row class="flex justify-center mt-8">
            <img src="../assets/img/logo.svg" alt="Logo TestedLab" class="w-1/3">
        </el-row>
        <div class="perfil">
            <el-row class="mt-2">
                <el-col :span="12" :xs="24" :sm="12" :lg="8" class="flex justify-center items-center">
                    <img src="../assets/img/logo.png" alt="perfil" class="w-2/3">
                </el-col>
                <el-col :span="12" :xs="24" :sm="12" :lg="16">
                    <p class="title-name">Alejandra Hernández López</p>
                    <p class="text-gray mt-1">27 años</p>
                </el-col>
            </el-row>
            <div class="container-list-test mt-2">
                <p class="title-list-test mb-1">Test realizados</p>
                <div class="content-list-test mb-8">
                    <CardCategory />
                </div>
            </div>
        </div>
    </div>
</template>