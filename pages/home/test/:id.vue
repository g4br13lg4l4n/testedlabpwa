<template>
    <div>
        <div v-if="test.status === 'success' && test.data.solicitudesEstudio[0].liberado">
            <div class="flex justify-between items-center">
                <el-button round size="small" @click="$router.push('/home')">
                    <i class="el-icon-back"></i> Regresar
                </el-button>
                <el-button round size="small" class="round-primary">
                    <a :href="test.data.urlPdfResultados" download target="_blank">
                        <i class="el-icon-download"></i> Descargar
                    </a>
                </el-button>
            </div>
            <div class="mt-1 mb-2">
                <h1 class="title">Resultados del test</h1>
                <h2 class="sub-title mt-1">Datos del paciente</h2>
                <el-row class="mt-2.5">
                    <el-col :span="12" :xs="12" :sm="6" :lg="6">
                        <p class="text-gray mb-1.5">Folio:</p>
                        <p class="sub-title">{{ test.data.solicitud.folio }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="6" :lg="6">
                        <p class="text-gray mb-1.5">Sexo:</p>
                        <p class="sub-title">{{ auth.user.sexo }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="6" :lg="6">
                        <p class="text-gray mb-1.5">Fecha de muestreo:</p>
                        <p class="sub-title">{{ test.data.solicitud.fechaSolicitud | date }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="6" :lg="6">
                        <p class="text-gray mb-1.5">Fecha de reporte:</p>
                        <p class="sub-title">{{ test.data.solicitudesEstudio[0].fechaReporte | date }}</p>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <h2 class="sub-title my-8">Datos del examen</h2>
            <el-row class="mt-2.5">
                <el-col :span="12" :xs="24" :sm="6" :lg="6">
                    <img :src="test.data.urlQR" alt="QR" width="90%" class="m0-auto">
                </el-col>
                <el-col :span="12" :xs="24" :sm="6" :lg="18">
                    <p class="sub-title mb-1">{{ test.data.solicitudesEstudio[0].nombreEstudio }}</p>
                    <el-row>
                        <el-col :span="12" :xs="24" :sm="6" :lg="8">
                            <p class="text-gray mb-1.5">Resultado:</p>
                            <p class="sub-title">{{ test.data.solicitudesEstudio[0].resultados[0].resultado }}</p>
                        </el-col>
                        <el-col :span="12" :xs="24" :sm="6" :lg="8">
                            <p class="text-gray mb-1.5">Valor de referencia:</p>
                            <p class="sub-title">{{ test.data.solicitudesEstudio[0].resultados[0].textoReferencia }}</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p class="text-gray mb-1.5 mt-1">Método:</p>
                            <p class="sub-title">{{ test.data.solicitudesEstudio[0].tipoMetodo }}</p>
                        </el-col>
                        <el-col :span="24">
                            <p class="text-gray mb-1.5 mt-1">Tipo de muestra:</p>
                            <p class="sub-title">{{ test.data.solicitudesEstudio[0].tipoMuestra }}</p>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <p class="sub-title my-8">Anexo</p>
            <div>
                <img 
                v-if="test.data.solicitudesEstudio[0].resultados[0].documentos.length > 0" 
                :src="test.data.solicitudesEstudio[0].resultados[0].documentos[0].documento" 
                alt="anexo"
                class="w-64">
                <p class="my-8">Prueba utilizada: {{ test.data.solicitudesEstudio[0].pruebaUtilizada }}</p>
                <p class="text-gray mb-1.5">
                    <strong>Nota:</strong>
                </p>
                <p class="text-gray">{{ test.data.solicitudesEstudio[0].nota }}</p>
                <div class="mt-3">
                    <el-row :gutter="20">
                        <el-col :span="12" :xs="24" :sm="12" :lg="12" class="card-white">
                            <p class="sub-title mb-1.5">{{ test.data.responsableSanitario.nombre }}</p>
                            <p class="text-gray mb-1.5">Responsable Sanitario</p>
                            <p class="text-gray mb-1.5">{{ test.data.responsableSanitario.escuelaProcedencia }}</p>
                            <p class="text-gray mb-1.5">
                                <strong>{{ test.data.responsableSanitario.cedula }}</strong>
                            </p>
                        </el-col>
                        <el-col :span="12" :xs="24" :sm="12" :lg="12" class="card-white">
                            <p class="sub-title mb-1.5">Datos de la empresa</p>
                            <p class="text-gray mb-1.5">{{ test.data.datosEmpresa.nombre }}</p>
                            <p class="text-gray mb-1.5">{{ test.data.datosEmpresa.direccion }}</p>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <el-button round size="small" @click="$router.push('/home')"><i class="el-icon-back"></i> Regresar</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    layout: "main",
    computed: {
    ...mapGetters(['auth', 'test']),
  },
    mounted() {
        console.log(this.$route?.params?.id, this.auth?.user?.cvePaciente)
        if(this.$route?.params?.id && this.auth?.user?.cvePaciente) {
            const data = {
                cvePaciente: this.auth.user.cvePaciente, 
                folio: this.$route?.params?.id
            };
            this.$store.dispatch('get_test', data);
        }
    }
}
</script>
<style>
    .card-white {
        background: #FFFFFF;
        box-shadow: 0px 10px 60px rgba(107, 119, 154, 0.1);
        border-radius: 20px;
        padding: 22px 28px;
    }
</style>