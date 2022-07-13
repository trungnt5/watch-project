<template>
  
    <div class="bg-background">
      <v-container>
        <v-breadcrumbs
          :items="items"
          divider=">"
          class="text-black px-0 shadow-none"
        >
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
      </v-container>
      <v-stepper
        alt-labels
        class="stepper text-base bg-background shadow-none border-none"
        v-model="e1"
      >
        <div class="w-full bg-background">
          <v-container class="py-0">
            <v-stepper-header class="w-1/2 bg-background shadow-none">
              <template v-for="(item, n) in items1">
                <v-stepper-step
                  :key="n"
                  :step="item.step"
                  :complete="e1 > n + 1"
                  class="whitespace-nowrap"
                >
                  {{ item.text }}
                </v-stepper-step>
                <v-divider v-if="item.divider === true" :key="n"></v-divider>
              </template>
            </v-stepper-header>
          </v-container>
        </div>
        <v-stepper-items>
          <v-stepper-content step="1" class="p-0 w-full bg-background">
            <v-container>
              <v-card max-width="728" class="py-8">
                <home-view v-model="disabled" />
                <v-container class="flex justify-center py-0 mt-2">
                  <v-btn
                    tile
                    :disabled="disabled"
                    class="text-dark mx-auto bg-very-dark-gray"
                    @click="e1 = 2"
                  >
                    BẮT ĐẦU THIẾT KẾ
                  </v-btn>
                </v-container>
              </v-card>
            </v-container>
          </v-stepper-content>
        </v-stepper-items>

        <v-stepper-items>
          <v-stepper-content step="2" class="p-0 w-full bg-background">
            <v-container>
              <div class="grid grid-cols-3">
                <div class="col-span-2 gap-1">
                  <div class="font-bold mt-5">MÔ PHỎNG</div>
                  <v-card max-width="900" class="py-7 mt-5" min-height="180">
                    <div class="flex flex-col justify-center text-center"></div>
                  </v-card>
                  <v-card max-width="900" class="mt-7">
                    <design-view />
                    <div class="flex justify-between my-8 px-4">
                      <v-btn
                        text
                        right
                        class="flex items-center justify-start"
                        @click="e1 = 1"
                      >
                        <v-icon>mdi-arrow-left</v-icon>
                        <div class="font-bold text-right">Quay lại</div>
                      </v-btn>

                      <v-btn
                        dark
                        left
                        class="flex items-center justify-center mr-3"
                        max-width="262"
                        @click="e1 = 3"
                      >
                        <div class="font-bold text-right">
                          THÔNG TIN GIAO HÀNG
                        </div>
                        <v-icon>mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </div>
                <total-order class="mt-16" />
              </div>
            </v-container>
          </v-stepper-content>
        </v-stepper-items>

        <v-stepper-items>
          <v-stepper-content step="3">
            <v-container>
              <span class="font-bold">THÔNG TIN GIAO HÀNG</span>
              <div class="grid grid-cols-3 py-10">
                <v-card max-width="823" class="px-5 py-7 col-span-2 gap-1">
                  <shipment-form />
                  <v-col cols="12" class="flex justify-between mt-10">
                    <v-btn
                      text
                      right
                      class="flex items-center justify-start"
                      @click="e1 = 2"
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
                      target="_blank"
                    >
                      <div class="font-bold text-right mr-1">ĐẶT HÀNG</div>
                    </v-btn>
                  </v-col>
                </v-card>
                <total-order />
              </div>
            </v-container>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
 
</template>

<script>
import HomeView from './HomeView.vue';
import DesignView from './DesignView.vue';
import TotalOrder from '@/components/TotalOrder.vue';
import ShipmentForm from '@/components/ShipmentForm.vue';

export default {
  components: {
    HomeView,
    DesignView,
    TotalOrder,
    ShipmentForm,
   
  },
  name: "MainView",

  data: () => ({
    //
    e1: 1,
    items1: [
      {
        text: "Chọn sản phẩm",
        divider: true,
        step: "1",
      },
      {
        text: "Thiết kế  ",
        divider: true,
        step: "2",
      },
      {
        text: "Giao hàng & Thanh toán",
        divider: false,
        step: "3",
      },
    ],
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
<style scoped>
.bg-background.v-sheet.v-stepper:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
.py-0 .v-stepper__header{
box-shadow: none !important;
}
</style>