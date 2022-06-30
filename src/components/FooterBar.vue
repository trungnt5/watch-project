<template>
  <div>
    <div class="footer bg-footer-up text-white py-6">
      <v-container>
        <v-col cols="12" class="py-4 mx-auto grid grid-cols-10 items-start">
          <div class="col-span-4 gap-1">
            <div class="border w-1/3 h-9 border-white"></div>
            <div class="w-full mt-2">Đẳng cấp cùng thời gian</div>
            <div class="mt-5 w-full">
              Địa chỉ: 132 Phạm Ngọc Thạch, quận Đống Đa, Hà Nội.
            </div>
            <div class="w-full">Hotline: 0981 248 736</div>

            <div class="col-span-3 gap-3 mt-5">
              <router-link
                v-for="(item, i) in social"
                :key="i"
                :to="item.to"
                class="no-underline mr-3"
              >
                <v-icon color="white">
                  {{ item.name }}
                </v-icon>
              </router-link>
            </div>
          </div>

          <div class="col-span-3 flex flex-col mx-7">
            <router-link
              v-for="(item, i) in col2"
              :key="i"
              :to="item.to"
              class="no-underline col-span-12 mb-2 normal-case"
            >
              <span class="text-white col-span-12">{{ item.name }}</span>
            </router-link>
          </div>

          <div class="col-span-3 flex flex-col mx-7">
            <router-link
              v-for="(item, i) in col3"
              :key="i"
              :to="item.to"
              class="no-underline col-span-12 mb-2 normal-case"
            >
              <span class="text-white col-span-12">{{ item.name }}</span>
            </router-link>
          </div>
        </v-col>
      </v-container>
    </div>

    <div class="footer bg-dark text-white">
      <v-container>
        <v-col cols="12" class="py-4 items-start">
            <span>Bản quyển 2020 thuộc về Firenzo</span>
          
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data: () => ({
    social: [
      {
        name: "mdi-facebook",
        to: "/",
      },
      {
        name: "mdi-youtube",
        to: "/",
      },
      {
        name: "mdi-instagram",
        to: "/",
      },
    ],
    col2: [
      {
        name: "Dây da đồng hồ",
        to: "/",
      },
      {
        name: "Đặt hàng thiết kế riêng",
        to: "/",
      },
      {
        name: "Bộ sưu tập",
        to: "/",
      },
      {
        name: "Tất cả sản phẩm",
        to: "/",
      },
    ],
    col3: [
      {
        name: "Giới thiệu về Firenzo",
        to: "/",
      },
      {
        name: "Chính sách đổi trả",
        to: "/",
      },
      {
        name: "Chính sách bảo hành",
        to: "/",
      },
      {
        name: "Hình thức vận chuyển",
        to: "/",
      },
      {
        name: "Liên hệ",
        to: "/",
      },
    ],
  }),
};
</script>
<style>
.icon-font {
  font-size: 18px !important;
}
</style>