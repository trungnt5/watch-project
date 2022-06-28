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
    <span>MÔ PHỎNG</span>
    <div class="grid grid-cols-3">
      <div class="col-span-2 gap-1">
        <v-card max-width="728" class="py-7 mt-5" min-height="180">
          <div class="flex flex-col justify-center text-center"></div>
        </v-card>
        <div class="mt-10">
          <v-row justify="center">
            <v-expansion-panels popout>
              <v-expansion-panel v-for="(item, i) in listDesign" :key="i">
                <v-expansion-panel-header>{{
                  item.name
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- <watch-face /> -->
                  <!-- <watch-leather /> -->
                  <!-- <watch-fiber /> -->
                  <!-- <watch-lock /> -->
                  <!-- <watch-signature /> -->
                  <watch-size />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>
         <div class="flex justify-between mt-12">
      <v-btn text right class="flex items-center justify-start" to="/">
          <v-icon>mdi-arrow-left</v-icon>
          <div class="font-bold text-right ml-1">Quay lại</div>
      </v-btn>

      <v-btn dark left class="flex items-center justify-center" max-width="262" to="/shipment">
          <div class="font-bold text-right mr-1">THÔNG TIN GIAO HÀNG</div>
           <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
      </div>
      <total-order />
    </div>

  </v-container>
</template>

<script>
import StepByStep from "../components/StepByStep";
// import WatchFace from "../components/DesignList/WatchFace";
// import WatchLeather from "../components/DesignList/WatchLeather";
// import WatchFiber from '../components/DesignList/WatchFiber';
// import WatchLock from '../components/DesignList/WatchLock';
// import WatchSignature from '../components/DesignList/WatchSignature';
import WatchSize from "@/components/DesignList/WatchSize.vue";
import TotalOrder from "@/components/TotalOrder.vue";

export default {
  name: "DesignView",

  components: {
    StepByStep,
    // WatchFace,
    // WatchLeather,
    // WatchFiber,
    // WatchLock
    // WatchSignature
    WatchSize,
    TotalOrder,
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
    listDesign: [
      {
        name: "Mặt đồng hồ",
      },
      {
        name: "Loại da",
      },
      {
        name: "Chỉ & Sơn cạnh",
      },
      {
        name: "Khóa",
      },
      {
        name: "Khắc chữ cá nhân hóa",
      },
      {
        name: "Kích thước & Loại độn",
      },
    ],
  }),
};
</script>
