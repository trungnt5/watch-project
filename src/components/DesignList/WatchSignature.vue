<template>
  <div class="WatchSignature">
    <span class="text-base font-bold">Khắc chữ Laser</span>
    <div class="flex mt-5">
      <div class="flex flex-col">
        <span>Giới hạn 20 kí tự.</span>
        <span>Chữ sẽ được khắc vào mặt dưới của Dây Gắn Khóa</span>
        <v-col cols="5" class="px-0">
          <v-text-field outlined counter maxlength="20"></v-text-field>
        </v-col>

        <span>Kiểu font</span>
        <v-col cols="5" class="px-0">
          <v-select
            :items="items1"
            placeholder="Arial"
            dense
            outlined
          ></v-select>
        </v-col>
      </div>
      <div class="border w-32 h-20"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchSignature",
  data: () => ({
    row: null,
    locks: [
      {
        text: "Khóa kim",
        bonus: "",
        value: "1",
      },
      {
        text: "Khóa bướm",
        bonus: "+150,000đ",
        value: "2",
      },
    ],
  }),
};
</script>
<style>
.radio {
  font-size: 10px !important;
}
.checked .v-label {
  color: #1790e9 !important;
}
</style>