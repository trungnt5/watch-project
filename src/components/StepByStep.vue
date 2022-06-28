<template>
  <div>
    <v-stepper alt-labels class="stepper text-base"> 
      <v-stepper-header>
        <v-stepper-step step="1" color="black">
          Chọn sản phẩm     
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">
          Thiết kế  
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" clas="break-normal">
          Giao hàng & Thanh toán
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>
<script>
  export default {
    name: 'StepByStep',
  }
</script>
<style>
.stepper{
  box-shadow: none  !important;;
}
</style>