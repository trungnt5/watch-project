<template>
  <div class="form">
      <v-col cols="12">
        <span class="font-bold">Họ và tên</span>
        <v-col cols="12" class="px-0">
          <v-text-field
            placeholder="Bắt buộc"
            single-line
            outlined
            class="p-3"
            height="43"
          ></v-text-field>
        </v-col>
      </v-col>

      <v-col cols="12" class="gap-2 grid-cols-2 grid px-0">
        <v-col cols="12">
          <span class="font-bold">Số điện thoại</span>
          <v-col cols="12" class="px-0 py-0">
            <v-text-field
              placeholder="Bắt buộc"
              single-line
              outlined
              class="p-3"
              height="43"
            ></v-text-field>
          </v-col>
        </v-col>
        <v-col cols="12">
          <span class="font-bold">Email</span>
          <v-col cols="12" class="px-0 py-0 address">
            <v-text-field
              placeholder="Bắt buộc"
              single-line
              outlined
              class="p-3"
              height="43"
            ></v-text-field>
          </v-col>
        </v-col>
      </v-col>

      <v-col cols="12">
        <span class="font-bold">Địa chỉ nhận hàng</span>
        <v-col cols="12" class="px-0 my-0">
          <v-text-field
            placeholder="Số nhà, đường"
            single-line
            outlined
            class="p-3"
            height="43"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-0 grid grid-cols-3 gap-3">
          <v-text-field
            v-for="(item, i) in division"
            :key="i"
            :placeholder="item"
            single-line
            outlined
            class="p-3"
            height="43"
          ></v-text-field>
        </v-col>
      </v-col>

      <v-col cols="12">
        <span class="font-bold">Mã giảm giá</span>
        <v-col cols="12" class="gap-2 grid-cols-2 grid px-0">
          <v-col cols="12" class="px-0 py-0">
            <v-text-field
              placeholder="Nếu có"
              single-line
              outlined
              class="p-3"
              height="43"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="px-0 py-0">
            <v-btn height="54" dark class="p-3">ÁP DỤNG</v-btn>
          </v-col>
        </v-col>
      </v-col>

      <v-col cols="12">
        <span class="font-bold">Phương thức thanh toán</span>
        <v-col cols="12" class="px-0 py-0">
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="n in payment"
              :key="n"
              :label="`${n}`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="9" class="border border-gray p-5 grid grid-cols-1 gap-1">
          <span
            >Quý khách vui lòng chuyển khoản đến một trong các tài khoản
            sau</span
          >
          <span class="mt-1 mb-4"
            >Ngân hàng: Vietcombank. Chi nhánh Hùng Vương, TP. Hồ Chí Minh Tên
            tài khoản: Công ty TNHH H2 Technology Số tài khoản:
            0421000472765</span
          >
        </v-col>
      </v-col>
  </div>
</template>

<script>
export default {
  name: "ShipmentForm",
  data: () => ({
    radioGroup: 1,
    payment: [
      "Thẻ tín dụng/ Thẻ thanh toán quốc tế",
      "Chuyển khoản",
      "COD (Thanh toán khi nhận hàng)",
    ],
    division: ["Thành phố", "Quận", "Phường"],
  }),
};
</script>
<style>
.v-text-field__details {
  display: none !important;
}
</style>