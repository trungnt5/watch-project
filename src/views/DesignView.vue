<template>
  <div>
    <div class="bg-background">
      <v-expansion-panels focusable tile accordion class="shadow-none">
        <v-expansion-panel
          v-for="(item, i) in listDesign"
          :key="i"
          active-class="Dasdas"
        >
          <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="item.type === 'face'">
              <watch-face />
            </div>
            <div v-if="item.type === 'leather'">
              <watch-leather />
            </div>
            <div v-if="item.type === 'fiber'">
              <watch-fiber />
            </div>
            <div v-if="item.type === 'lock'">
              <watch-lock />
            </div>
            <div v-if="item.type === 'signature'">
              <watch-signature />
            </div>
            <div v-if="item.type === 'size'">
              <watch-size />
            </div>
            {{ item.coponent }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import WatchFace from "../components/DesignList/WatchFace";
import WatchLeather from "../components/DesignList/WatchLeather";
import WatchFiber from "../components/DesignList/WatchFiber";
import WatchLock from "../components/DesignList/WatchLock";
import WatchSignature from "../components/DesignList/WatchSignature";
import WatchSize from "@/components/DesignList/WatchSize.vue";

export default {
  name: "DesignView",

  components: {
    WatchFace,
    WatchLeather,
    WatchFiber,
    WatchLock,
    WatchSignature,
    WatchSize,
  },
  data: () => ({
    step: 2,
    e1: 3,
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
        type: "face",
      },
      {
        name: "Loại da",
        type: "leather",
      },
      {
        name: "Chỉ & Sơn cạnh",
        type: "fiber",
      },
      {
        name: "Khóa",
        type: "lock",
      },
      {
        name: "Khắc chữ cá nhân hóa",
        type: "signature",
      },
      {
        name: "Kích thước & Loại độn",
        type: "size",
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