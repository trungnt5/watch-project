<template>
  <v-container>
    <v-breadcrumbs :items="items" divider=">" class="text-black">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled">
          <router-link
            :to="item.to"
            :style="`color: ${item.color}`"
            class="no-underline"
          >
            {{ item.text }}
          </router-link>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <step-by-step class="w-3/5" />
    <span class="font-bold">THÔNG TIN GIAO HÀNG</span>
    <div class="grid grid-cols-3">
      <div class="col-span-2 gap-1">
        <shipment-form />
        <div class="flex justify-between mt-12">
          <v-btn
            text
            right
            class="flex items-center justify-start"
            to="/design"
          >
            <v-icon>mdi-arrow-left</v-icon>
            <div class="font-bold text-right ml-1">Quay lại</div>
          </v-btn>

          <v-btn
            dark
            left
            class="flex items-center justify-center"
            max-width="262"
            to="/shipment"
          >
            <div class="font-bold text-right mr-1">ĐẶT HÀNG</div>
          </v-btn>
        </div>
      </div>
      <total-order />
    </div>
  </v-container>
</template>

<script>
import StepByStep from "../components/StepByStep";
import TotalOrder from "@/components/TotalOrder.vue";
import ShipmentForm from '@/components/ShipmentForm.vue';

export default {
  name: "ShipmentView",
  components: {
    StepByStep,
    TotalOrder,
    ShipmentForm,
  },
  data: () => ({
    items: [
      {
        text: "Trang chủ",
        disabled: false,
        to: "/",
        color: "black",
      },
      {
        text: "Đặt hàng tự thiết kế",
        disabled: false,
        to: "/about",
        color: "black",
      },
    ],
  }),
};
</script>
