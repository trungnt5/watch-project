<template>
  <div>
    <v-stepper alt-labels class="stepper text-base" v-model="this.e1">
      <v-stepper-header class="bg-background">
        <template v-for="(item, n) in items">
          <v-stepper-step
            :key="`${n}-step`"
            :step="n+1"
            :complete = "e1 > n"
            class="whitespace-nowrap"
          >
            {{ item.text }}
          </v-stepper-step>
          <v-divider v-if="item.divider === true" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <!-- <v-stepper-items>
        <v-stepper-content step="4">
         <design-view />
        </v-stepper-content>
      </v-stepper-items> -->
    </v-stepper>
  </div>
</template>
<script>
// import DesignView from '@/views/DesignView.vue';
export default {
  // components: { DesignView },
  name: "StepByStep",
  data: () => ({
    e1: 0,
    items: [
      {
        text: "Chọn sản phẩm",
        divider: true,
        step: true
      },
      {
        text: "Thiết kế  ",
        divider: true,
        step: false
      },
      {
        text: "Giao hàng & Thanh toán",
        divider: false,
        step: false
      },
    ],
  }),
};
</script>
<style>
.stepper {
  box-shadow: none !important;
}
</style>