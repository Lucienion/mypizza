<template>
  <div class="menu container row">
    <!-- 左侧菜单 -->
    <div class="col-7">
      <h3 class="text-center text-primary">点餐</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格(元)</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
            <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="3">{{item.description}}</td>
          </tr>
          <tr v-for="(item1,index1) in item.options" :key="index1">
            <td>{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td>
              <button class="btn btn-success" @click="addTo(item,item1)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 右购物车 -->
    <div class="col-5 text-center">
      <h3 class="text-primary">购物车</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">数量</th>
            <th scope="col">种类</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <template v-if="newItems.length>0">
          <tbody v-for="(item,index) in newItems" :key="index">
            <tr>
              <td>
                <button class="btn btn-primary" @click="reduce(item,index)">-</button>
                <input type="number" class="input" v-model.number="item.quantity">
                <button class="btn btn-primary" @click="add(item)">+</button>
              </td>
              <td>{{item.name}}-{{item.size}}</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
          <!-- 计算总价和总数 -->
          <tr>
            <td></td>
            <td colspan="2" class="text-info">
              商品总件数：
              <span>{{toNum}}</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td colspan="2" class="text-info">
              商品总价格：
              <span>{{toPrice}}</span>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3">
              <h3 class="text-danger">此购物车空空如也~</h3>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: {
        0: {
          name: "芝士pizza",
          description: "这是一款被大众喜爱的pizza.",
          options: [
            {
              size: "7寸",
              price: "70"
            },
            {
              size: "10寸",
              price: "100"
            }
          ]
        },
        1: {
          name: "榴莲pizza",
          description: "这是一款口味独特的pizza,依据客人口味自行购买.",
          options: [
            {
              size: "7寸",
              price: "90"
            },
            {
              size: "10寸",
              price: "140"
            }
          ]
        }
      },
      newItems: []
    };
  },
  methods: {
    addTo(item, options) {
      var result = this.newItems.filter(item1 => {
        return item.name == item1.name && options.size == item1.size;
      });
      if (result != null && result.length > 0) {
        result[0].quantity++;
      } else {
        this.newItems.push({
          name: item.name,
          size: options.size,
          quantity: 1,
          price: options.price
        });
      }
    },
    reduce(item, index) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.newItems.splice(index, 1);
      }
    },
    add(item) {
      if (item.quantity >= 10) {
        item.quantity = 10;
      } else {
        item.quantity++;
      }
    }
  },
  computed: {
    toNum() {
      return this.newItems.length;
    },
    toPrice() {
      return this.newItems.reduce((sum, cur) => {
        return sum + cur.quantity * cur.price;
      }, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  width: 50px;
  text-align: center;
}
.btn {
  width: 30px;
  height: 30px;
  padding: 0;
}
.strong {
  font-weight: bolder;
}
</style>
