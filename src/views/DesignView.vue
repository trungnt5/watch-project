<template>
  <div>
    <div class="bg-background pb-10">
      <v-container>
        <v-breadcrumbs :items="items" divider=">" class="text-black px-0">
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
        <step-by-step
          class="w-3/5"
          :step="this.step"
          :complete="this.complete"
        />
        <div class="font-bold mt-5">HÌNH ẢNH MÔ PHỎNG</div>
        <div class="grid grid-cols-3">
          <div class="col-span-2 gap-1">
            <v-card max-width="900" class="py-7 mt-5" min-height="180">
              <div class="flex flex-col justify-center text-center"></div>
            </v-card>
            <v-card max-width="900" class="mt-7">
              <v-expansion-panels focusable tile accordion class="shadow-none">
                <v-expansion-panel
                  v-for="(item, i) in listDesign"
                  :key="i"
                  active-class="Dasdas"
                >
                  <v-expansion-panel-header>{{
                    item.name
                  }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-if="item.type === 'face' ">
                      <watch-face />
                    </div>
                    <div v-if="item.type === 'leather' ">
                      <watch-leather />
                    </div>
                     <div v-if="item.type === 'fiber' ">
                      <watch-fiber />
                    </div>
                     <div v-if="item.type === 'lock' ">
                      <watch-lock /> 
                    </div>
                     <div v-if="item.type === 'signature' ">
                      <watch-signature />
                    </div>
                     <div v-if="item.type === 'size' ">
                      <watch-size />
                    </div>
                    {{ item.coponent }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <div class="flex justify-between my-8 px-4">
                <v-btn
                  text
                  right
                  class="flex items-center justify-start"
                  to="/"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  <div class="font-bold text-right">Quay lại</div>
                </v-btn>

                <v-btn
                  dark
                  left
                  class="flex items-center justify-center mr-3"
                  max-width="262"
                  to="/shipment"
                >
                  <div class="font-bold text-right">
                    THÔNG TIN GIAO HÀNG
                  </div>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card>
          </div>
          <total-order />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import StepByStep from "../components/StepByStep";
import WatchFace from "../components/DesignList/WatchFace";
import WatchLeather from "../components/DesignList/WatchLeather";
import WatchFiber from '../components/DesignList/WatchFiber';
import WatchLock from '../components/DesignList/WatchLock';
import WatchSignature from '../components/DesignList/WatchSignature';
import WatchSize from "@/components/DesignList/WatchSize.vue";
import TotalOrder from "@/components/TotalOrder.vue";

export default {
  name: "DesignView",

  components: {
    StepByStep,
    WatchFace,
    WatchLeather,
    WatchFiber,
    WatchLock,
    WatchSignature,
    WatchSize,
    TotalOrder,
  },
  data: () => ({
    step: "1",
    complete: false,
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
    listDesign: [
      {
        name: "Mặt đồng hồ",
        type: "face"
      },
      {
        name: "Loại da",
        type: "leather"
      },
      {
        name: "Chỉ & Sơn cạnh",
        type: "fiber"
      },
      {
        name: "Khóa",
        type: "lock"
      },
      {
        name: "Khắc chữ cá nhân hóa",
        type: "signature"
      },
      {
        name: "Kích thước & Loại độn",
        type: "size"
      },
    ],
  }),
};
</script>
<style>
.v-expansion-panel-header--active {
  background: #020a1c 0% 0% no-repeat padding-box !important;
  opacity: 1 !important;
  color: white;
}
.v-expansion-panel-header--active
  .v-expansion-panel-header__icon
  .mdi-chevron-down {
  color: white !important;
  font-size: 18px !important;
}
</style>