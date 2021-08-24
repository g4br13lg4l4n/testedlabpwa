<template>
    <div>
        <div class="flex justify-between items-center">
            <el-button round size="small" @click="$router.push('/home')"><i class="el-icon-back"></i> Regresar</el-button>
            <el-button round class="round-primary"><i class="el-icon-download"></i> Descargar</el-button>
        </div>
        <div class="mt-1 mb-2">
            <h1 class="title">Exámenes</h1>
            <h2 class="sub-title mt-1">Datos del paciente</h2>
            <el-row class="mt-2.5">
                <el-col :span="12" :xs="24" :sm="6" :lg="6">
                    <p class="text-gray mb-1.5">Folio:</p>
                    <p class="sub-title">210712209</p>
                </el-col>
                <el-col :span="12" :xs="24" :sm="6" :lg="6">
                    <p class="text-gray mb-1.5">Sexo:</p>
                    <p class="sub-title">Masculino</p>
                </el-col>
                <el-col :span="12" :xs="24" :sm="6" :lg="6">
                    <p class="text-gray mb-1.5">Fecha de muestreo:</p>
                    <p class="sub-title">12/08/21</p>
                </el-col>
                <el-col :span="12" :xs="24" :sm="6" :lg="6">
                    <p class="text-gray mb-1.5">Fecha de reporte:</p>
                    <p class="sub-title">12/08/21</p>
                </el-col>
            </el-row>
        </div>
        <el-divider></el-divider>
        <h2 class="sub-title my-8">Datos del examen</h2>
        <el-row class="mt-2.5">
            <el-col :span="12" :xs="24" :sm="6" :lg="6">
                <img src="../../../assets/img/qr.png" alt="QR" width="90%">
            </el-col>
            <el-col :span="12" :xs="24" :sm="6" :lg="18">
                <p class="sub-title mb-1">Detección cualitativa de Antígeno del Virus SARS-CoV-2</p>
                <el-row>
                    <el-col :span="12" :xs="24" :sm="6" :lg="8">
                        <p class="text-gray mb-1.5">Resultado:</p>
                        <p class="sub-title">Negativo</p>
                    </el-col>
                    <el-col :span="12" :xs="24" :sm="6" :lg="8">
                        <p class="text-gray mb-1.5">Valor de referencia:</p>
                        <p class="sub-title">Negativo</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <p class="text-gray mb-1.5 mt-1">Método:</p>
                        <p class="sub-title">Inmunoensayo cromatográfico de flujo lateral</p>
                    </el-col>
                    <el-col :span="24">
                        <p class="text-gray mb-1.5 mt-1">Tipo de muestra:</p>
                        <p class="sub-title">Exudado nasofaríngeo</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <p class="sub-title my-8">Anexo</p>
        <div>
            <img src="../../../assets/img/test.png" alt="anexo">
            <p class="my-8">Prueba utilizada: Genrui SARS-CoV-2 Antigen Test Kit para detección Cualitativa de Antígeno de SARS-CoV-2 en muestra nasofaríngea.</p>
            <p class="text-gray mb-1.5">
                <strong>Nota:</strong>
            </p>
            <p class="text-gray">Este resultado debe ser interpretado por personal médico, haciendo correlación con la información clínica del paciente. Un resultado negativo no descarta una posible infección, no se recomienda el uso de esta prueba para diagnóstico en pacientes asintomáticos.</p>
            <div class="mt-3">
                <el-row :gutter="20">
                    <el-col :span="12" :xs="24" :sm="12" :lg="12" class="card-white">
                        <p class="sub-title mb-1.5">Q.B.P. Noé Mendoza Alvarez</p>
                        <p class="text-gray mb-1.5">Responsable Sanitario</p>
                        <p class="text-gray mb-1.5">Instituto Politécnico Nacional</p>
                        <p class="text-gray mb-1.5">Cédula profesional:</p>
                        <p class="text-gray mb-1.5">
                            <strong>11933758</strong>
                        </p>
                    </el-col>
                    <el-col :span="12" :xs="24" :sm="12" :lg="12" class="card-white">
                        <p class="sub-title mb-1.5">Datos de la empresa</p>
                        <p class="text-gray mb-1.5">Grupo RAC y SPE Solutions S.A de C.V.</p>
                        <p class="text-gray mb-1.5">Prol. Paseo de la Reforma #61, piso 3, oficina 3-A. Paseo de las Lomas, Álvaro Obregón. CDMX. CP: 01330</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "main",
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