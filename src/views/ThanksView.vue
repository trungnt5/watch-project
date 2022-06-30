<template>
  <div>
    <v-container>
      <span class="text-2xl font-bold">XIN CẢM ƠN!</span>
      <div class="mt-7">
        <p>
          Chúng tôi đã nhận được đơn đặt hàng của quý khách. Chuyên viên Chăm
          Sóc Khách Hàng của Firenzo sẽ liên hệ lại quý khách hàng trong vòng
          24-48 tiếng để xác nhận lại đơn hàng.
        </p>
        <p>
          Nếu có thắc mắc hoặc yêu cầu hỗ trợ khẩn cấp, quý khách xin vui lòng
          gọi hotline 0981442603 hoặc đến thăm cửa hàng tại 124 Phạm Ngọc Thạch,
          quận Đống Đa, thành phố Hà Nội. Cửa hàng mở cửa từ 8 giờ sáng đến 9
          giờ tối từ thứ 2 đến thứ 7 và từ 8 giờ sáng đến 7 giờ tối vào Chủ Nhật
          hàng tuần.
        </p>
      </div>

      <div class="flex justify-between mt-12">
        <v-btn plain text class="flex items-center justify-center" to="/">
          <div class="font-bold text-center mx-auto normal-case text-picklock">
            <v-icon class="mr-1">mdi-arrow-left</v-icon>Quay về trang chủ
          </div>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ThanksView",
};
</script>
