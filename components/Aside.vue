<template>
    <div class="px-5 min-h-full min-h-screen">
        <el-row class="flex justify-center mt-8">
            <img src="../assets/img/logo.svg" alt="Logo TestedLab" class="w-1/3">
        </el-row>
        <div class="perfil">
            <el-row class="mt-2">
                <el-col :span="12" :xs="24" :sm="12" :lg="8" class="flex justify-center items-center">
                    <img v-if="auth.user.SEXO === 'Femenino'" src="../assets/img/woman.png" alt="perfil femenino" class="w-2/3">
                    <img v-if="auth.user.SEXO === 'Masculino'" src="../assets/img/man.png" alt="perfil masculino" class="w-2/3">
                </el-col>
                <el-col :span="12" :xs="24" :sm="12" :lg="16">
                    <p class="title-name">{{ auth.user.nombre_completo }}</p>
                    <p class="text-gray mt-1">{{ auth.user.edad }} años</p>
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

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["auth"]),
    }   
}
</script>