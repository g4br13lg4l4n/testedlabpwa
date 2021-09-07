<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: "default",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");
/*GENERAL*/
html,
body {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: #494949;
  margin: 0 auto;
  padding: 0;
}

html {
  min-height: 100%;
  position: relative;
}

p {
  color: #222222;
}

body {
  background: #fff;
}

*,
button {
  outline: none !important;
}

/*END GENERAL*/

/*LOGIN*/
.gray-text {
  color: #606266;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.bg-blue-login {
  background: #f8f8fa;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.position-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content-form {
  width: 100%;
  max-width: 350px;
}

h2 {
  font-size: 24px;
  color: #0360ad;
  font-weight: 700;
}

hr {
  border-top: 1px solid #e0e0e0;
  margin-top: 40px;
  margin-bottom: 40px;
}

.content-form label {
  margin-bottom: 7px;
  color: #696f79;
}

.content-form label:nth-child(2) {
  margin-top: 30px;
}

.content-form input {
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #8692a6;
  transition: top 0.2s ease-in-out;
  padding: 0 15px;
  margin-top: -10px;
}

.content-form input:focus {
  border-color: #1565d8;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
}

.input-btn {
  display: flex;
  position: relative;
  width: 100%;
}

.input-btn input {
  padding: 0 100px 0 15px;
}

.input-btn button {
  background: transparent;
  border: 0;
  font-size: 14px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #696f79;
}

.input-txt {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

input.check {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.input-txt label {
  margin: 0 0 0 10px !important;
  color: #494949 !important;
  cursor: pointer;
}

.btn-blue {
  background: #3e64ff;
  width: 100%;
  height: 45px;
  border: 0;
  color: #fff !important;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
}

.btn-blue-2 {
  background: #3e64ff;
  width: 100%;
  height: 35px;
  border: 0;
  color: #fff !important;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
}

.btn-blue-plain {
  background: transparent !important;
  width: 100%;
  height: 35px;
  border: 1px solid #1565d8 !important;
  color: #1565d8 !important;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
}

.btn-blue:hover,
.btn-blue-2:hover {
  background: #1565d8;
}

.btn-blue:focus,
.btn-blue-2:focus {
  background: #1565d8;
}

.content-form a {
  margin-top: 30px;
  color: #696f79;
  text-decoration: none;
  display: block;
}

.content-form a:hover {
  color: #1565d8;
}
/*END LOGIN*/

/* GENERAL */
.mt-1 {
  margin-top: 1em !important;
}
.mt-2 {
  margin-top: 2em !important;
}
.mt-3 {
  margin-top: 3em !important;
}
.mt-4 {
  margin-top: 4em !important;
}
.mt-5 {
  margin-top: 5em !important;
}

.mb-1 {
  margin-bottom: 1em !important;
}
.mb-2 {
  margin-bottom: 2em !important;
}
.mb-3 {
  margin-bottom: 3em !important;
}
.mb-4 {
  margin-bottom: 4em !important;
}
.mb-5 {
  margin-bottom: 5em !important;
}

.ml-1 {
  margin-left: 1em !important;
}
.ml-2 {
  margin-left: 2em !important;
}
.ml-3 {
  margin-left: 3em !important;
}
.ml-4 {
  margin-left: 4em !important;
}
.ml-5 {
  margin-left: 5em !important;
}

.mr-1 {
  margin-right: 1em !important;
}
.mr-2 {
  margin-right: 2em !important;
}
.mr-3 {
  margin-right: 3em !important;
}
.mr-4 {
  margin-right: 4em !important;
}
.mr-5 {
  margin-right: 5em !important;
}
.pb-0 {
  padding-bottom: 0 !important;
}

.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.r-2 {
  right: 2em;
}
.z-1 {
  z-index: 1;
}
.capitalize {
  text-transform: capitalize;
}
/* END GENERAL */

.el-table th > .cell {
  font-weight: 400;
}

.push-right {
  float: right !important;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  max-width: 100%;
}

.table-container {
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
}

.el-radio-button__inner {
  border: none;
}

.table-tag {
  border-radius: 50px !important;
  width: 6.5em !important;
  text-align: center !important;
}

.el-tag--success {
  background-color: #1cd1a1 !important;
  border-color: #1cd1a1 !important;
}

.el-tag--warning {
  background-color: #ffaf00 !important;
  border-color: #ffaf00 !important;
}

.el-tag--danger {
  background-color: #eb3232 !important;
  border-color: #eb3232 !important;
}

.title-name {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.333721px;
  color: #222b45;
}

.text-gray {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.233605px;
  color: #6b779a;
}

.title-list-test {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.365217px;
  color: #000000;
}
.number-test-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.517391px;
  color: #222b45;
}
.with-modal {
  width: 45em;
  margin: 0 auto;
}
.el-dialog {
  border-radius: .8em;
}
.picker-full {
  width: 100% !important;
}
.morado-background .el-input__inner {
  background: rgba(107, 119, 154, 0.05);
  border-radius: 10px;
  border: 0;
  color: #222222;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.266977px;
}
.morado-background .el-input__inner::placeholder {
  color: #222222;
}
.el-loading-spinner {
  left: 50%;
}
.row-select img {
  width: 1.6em;
  height: 1em;
}

.el-dialog__body {
  word-break: inherit;
  text-align: center !important;
}
@media (max-width: 480px) {
  .with-modal {
    width: 95%;
    margin: 0 auto;
  }
  .el-dialog {
    width: 95%;
  }
  .flex-mobile {
    display: flex;
    align-items: center;
  }
  .flex-none-mobile {
    display: block;
  }
  .diplay-none-mobile {
    display: none;
  }
  .position-form {
    margin-top: 2em;
  }
  .position-form .flex-mobile img {
    width: 30%;
    margin-right: 12px;
  }
  .position-form .flex-mobile {
    margin-bottom: 2em;
  }
  .show-mobile {
    display: block;
    margin: 0 auto;
  }
  .card-profile {
    width: 100%;
  }
}
@media (max-width: 320px) {
  .position-form {
    padding: 0 10px;
  }
  .with-modal {
    width: 95%;
    margin: 0 auto;
  }
  .el-dialog {
    width: 95%;
  }
}
</style>
