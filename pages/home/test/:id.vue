<template>
    <div>
        <div v-if="test.status === 'success' && test.data.solicitudesEstudio[0].liberado && filterTest">
            <div class="flex justify-between items-center">
                <el-button round size="small" @click="$router.push('/home')">
                    <em class="el-icon-back"></em> Regresar
                </el-button>
                <el-button round size="small" class="round-primary">
                    <a :href="test.data.urlPdfResultados" download target="_blank">
                        <em class="el-icon-download"></em> Descargar
                    </a>
                </el-button>
            </div>
            <div class="mt-1 mb-2">
                <h1 class="title">Resultados del test</h1>
                <h2 class="sub-title mt-1">Datos del paciente</h2>
                <el-row class="mt-2.5">
                    <el-col :span="12" :xs="12" :sm="12" :lg="6">
                        <p class="text-gray mb-1.5">Folio:</p>
                        <p class="sub-title">{{ test.data.solicitud.folio }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="12" :lg="6">
                        <p class="text-gray mb-1.5">Sexo:</p>
                        <p class="sub-title">{{ auth.user.sexo }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="12" :lg="6">
                        <p class="text-gray mb-1.5">Fecha de muestreo:</p>
                        <p class="sub-title">{{ test.data.solicitud.fechaSolicitud | date }}</p>
                    </el-col>
                    <el-col :span="12" :xs="12" :sm="12" :lg="6">
                        <p class="text-gray mb-1.5">Fecha de reporte:</p>
                        <p class="sub-title">{{ filterTest.fechaReporte | date }}</p>
                    </el-col>
                </el-row>
            </div>
            <section v-if="filterTest.tipoEstudioDocumento === 0">
                <el-divider></el-divider>
                <h2 class="sub-title my-8">Datos del examen</h2>
                <el-row class="mt-2.5">
                    <el-col :span="12" :xs="24" :sm="16" :lg="6">
                        <img :src="test.data.urlQR" alt="QR" width="90%" class="m0-auto">
                    </el-col>
                    <el-col :span="12" :xs="24" :sm="24" :lg="18">
                        <p class="sub-title mb-1">{{ filterTest.nombreEstudio }}</p>
                        <el-row>
                            <el-col :span="12" :xs="24" :sm="6" :lg="8">
                                <p class="text-gray mb-1.5">Resultado:</p>
                                <p class="sub-title">{{ filterTest.resultados[0].resultado }}</p>
                            </el-col>
                            <el-col :span="12" :xs="24" :sm="6" :lg="8">
                                <p class="text-gray mb-1.5">Valor de referencia:</p>
                                <p class="sub-title">{{ filterTest.resultados[0].textoReferencia }}</p>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <p class="text-gray mb-1.5 mt-1">Método:</p>
                                <p class="sub-title">{{ filterTest.tipoMetodo }}</p>
                            </el-col>
                            <el-col :span="24">
                                <p class="text-gray mb-1.5 mt-1">Tipo de muestra:</p>
                                <p class="sub-title">{{ filterTest.tipoMuestra }}</p>
                            </el-col>
                            <el-col :span="24" class="mt-1 mb-1.5 sub-title alert-time">
                                *Reporte con validez oficial por las siguientes 72 horas a partir de la fecha de emisión.
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-divider></el-divider>
                <p class="sub-title my-8">Anexo</p>
                <div>
                    <div v-if="anexoImage">
                        <img 
                            v-if="filterTest.resultados[0].documentos.length > 0" 
                            :src="filterTest.resultados[0].documentos[0].documento" 
                            alt="anexo"
                            class="w-64">
                            <p class="my-8">Prueba utilizada: {{ filterTest.pruebaUtilizada }}</p>
                            <p class="text-gray mb-1.5">
                                <strong>Nota:</strong>
                            </p>
                            <p class="text-gray">{{ filterTest.nota }}</p>
                    </div>
                    <div v-else>
                        <el-button round size="small" class="round-primary">
                            <a :href="filterTest.resultados[0].documentos[0].documento" download target="_blank">
                                <em class="el-icon-download"></em> Descargar Anexo
                            </a>
                        </el-button>
                    </div>

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
            </section>
            <section v-else>
                <h2 class="sub-title my-8">Datos del examen</h2>
                <el-row class="mt-2.5">
                    <el-col :span="12" :xs="24" :sm="24" :lg="24">
                        <el-row>
                            <el-col :span="12" :xs="24" :sm="6" :lg="6">
                                <p class="text-gray mb-1.5">Estudio:</p>
                                <p class="sub-title mb-1">{{ filterTest.nombreEstudio }}</p>
                            </el-col>
                            <el-col :span="12" :xs="24" :sm="6" :lg="6">
                                <p class="text-gray mb-1.5">Resultado:</p>
                                <p class="sub-title">{{ filterTest.resultados[0].resultado }}</p>
                            </el-col>
                            <el-col :span="12" :xs="24" :sm="6" :lg="6">
                                <p class="text-gray mb-1.5 mt-1">Método:</p>
                                <p class="sub-title">{{ filterTest.tipoMetodo }}</p>
                            </el-col>
                            <el-col :span="12" :xs="24" :sm="6" :lg="6">
                                <p class="text-gray mb-1.5 mt-1">Tipo de muestra:</p>
                                <p class="sub-title">{{ filterTest.tipoMuestra }}</p>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <br />
	            <div class="pdf-wrapper">
                    <pdf
                        v-for="i in numPages"
                        :page="i"
                        :key="i"
                        :src="loadPaginates">
                    </pdf>
                </div>
            </section>
        </div>
        <div v-else>
            <div>
                <el-button round size="small" @click="$router.push('/home')"><em class="el-icon-back"></em> Regresar</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import pdf from 'vue-pdf';
export default {
    layout: "main",
    components: {
        pdf
    },
    data() {
        return {
            numPages: 2
        }
    },
    computed: {
        ...mapGetters(['auth', 'test']),
        anexoImage: function () {
            if(this.test?.data?.solicitudesEstudio[0]?.resultados[0]?.documentos[0]?.documento) {
                return this.test?.data?.solicitudesEstudio[0]?.resultados[0]?.documentos[0]?.documento.includes('.pdf') ? false : true;
            } else {
                return true;
            }
        },
        loadPaginates: function () {
            if(this.filterTest?.tipoEstudioDocumento) {
                const pdfEjemplo = `data:application/pdf;base64,${this.filterTest?.resultados[0]?.documentos[0]?.pdfBase64}`
                return pdf.createLoadingTask(pdfEjemplo);
            }
        },
        filterTest: function () {
            if(this.test?.data && this.test?.data?.solicitudesEstudio && this.$route?.params?.id && this.$route?.query.cveEstudio) {
                return  this.test.data.solicitudesEstudio.find(row => {
                    return row.cveEstudio === this.$route?.query.cveEstudio;
                });
            }
            return false;
        }
  },
    mounted() {
        if(this.$route?.params?.id && this.auth?.user?.cvePaciente) {
            const data = {
                cvePaciente: this.auth.user.cvePaciente, 
                folio: this.$route?.params?.id
            };
            this.$store.dispatch('get_test', data);
        }
        this.loadPaginates?.promise.then(pdf => {
			this.numPages = pdf.numPages;
		});
    },
}
</script>
<style>
    .card-white {
        background: #FFFFFF;
        box-shadow: 0px 10px 60px rgba(107, 119, 154, 0.1);
        border-radius: 20px;
        padding: 22px 28px;
    }
    .alert-time {
        color: #0360AD;
    }
    .pdf-wrapper {
        width: calc(100% - 10px);
        padding: 10px;
        background: #ccc;
        height: 100vh;
        overflow-y: scroll;
    }
</style>