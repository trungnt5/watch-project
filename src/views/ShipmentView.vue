<template>
  <div>
    
          <shipment-form />
          <v-col cols="12" class="flex justify-between mt-10">
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
              to="/thanks"
            >
              <div class="font-bold text-right mr-1">ĐẶT HÀNG</div>
            </v-btn>
          </v-col>
        </v-card>
        <total-order />
      </div>
    </v-container>
  </div>
</template>

<script>
import TotalOrder from "@/components/TotalOrder.vue";
import ShipmentForm from "@/components/ShipmentForm.vue";

export default {
  name: "ShipmentView",
  components: {
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
