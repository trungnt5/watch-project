<template>
  <v-card class="mx-auto py-7 mt-5" max-width="263" max-height="690">
    <div class="pl-4">
      <h2 class="font-bold">TỔNG QUAN ĐƠN HÀNG</h2>
      <v-divider class="my-4 mr-5"></v-divider>

      
      <v-card-text class="pl-0 pr-5 py-0"> 
        <span class="text-sm text-left">Dây da đồng hồ thiết kế riêng</span>
        <div v-for="(item,i) in listOrder" :key="i" class="mx-0 ml-3 grid grid-cols-3 text-xs mt-3" cols="3">
          <div class="col-span-2 text-very-dark-gray">{{item.type}}</div>
          <div class="ml-4 text-right">
            {{item.price.toLocaleString()}}đ
          </div>
          <div class="ml-3 col-span-3">{{item.name}}</div>
        </div>
      </v-card-text>

      <v-divider class="my-4 mr-5"></v-divider>

      <v-card-text class="py-1"> 
        <div class="mx-0 grid grid-cols-2 gap-2 text-sm">
          <div class="font-bold">Tạm tính</div>
          <div class="font-bold text-right">{{temporarilyTotal.toLocaleString()}}đ</div>
        </div>
      </v-card-text>
      <v-card-text class="py-1">
        <div class="mx-0 grid grid-cols-2 gap-2 text-xs">
          <div class="">Phí vận chuyển</div>
          <div class="text-right">{{shipPrice}}đ</div>
        </div>
      </v-card-text>

      <v-divider class="my-4 mr-5"></v-divider>

      <v-card-text class="py-1"> 
        <div class="mx-0 grid grid-cols-2 gap-2 text-sm">
          <div class="font-bold">TỔNG CỘNG</div>
          <div class="font-bold text-right">{{finalTotal.toLocaleString()}}đ</div>
        </div>
      </v-card-text>
      <v-card-text class="py-1 mt-4">
        <div class="mx-0 grid grid-cols-2 gap-2 text-sm font-bold text-deposit">
          <div class="">ĐẶT CỌC</div>
          <div class="text-right">{{deposit.toLocaleString()}}đ</div>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>         
<script>
export default {
  name: "TotalOrder",
  data: () => ({
      total: 0,
      deposit: 300000,
      listOrder:[
        {
            type:"Da bề mặt",
            name:"Bê Epsom - Xanh Navy",
            price: 900000
        },
         {
            type:"Da lót",
            name:"Da Silicon chống thấm",
            price:0
        },
         {
            type:"Tiêu Chuẩn",
            name:"Tiêu Chuẩn, cùng màu da",
            price:0
        },
         {
            type:"Sơn cạnh",
            name:"Tiêu Chuẩn, cùng màu da",
            price:0

        },
         {
            type:"Khóa",
            name:"Khóa kim",
            price:0
        },
        {
            type:"Cá nhân hóa",
            name:"Chưa chọn",
            price:0
        },
        {
            type:"Kích thước",
            name:"22-20mm, M (120/75mm)",
            price:0
        },
        {
            type:"Tạm tính",
            name:"Không độn",
            price:0
        }
      ],
      shipPrice: 0
  }),
  computed:{
      temporarilyTotal() {
          let sum= 0
          for( let item of this.listOrder){
            sum = sum + item.price
          }
        return sum
      },
      finalTotal(){
        let sum = 0
        return sum= sum + this.temporarilyTotal + this.shipPrice
      },
      convertNumber(number) {
        return number.toLocaleString('en-US')
      }
  }
};
</script>