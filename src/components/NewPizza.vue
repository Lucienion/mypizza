<template>
  <form action>
    <h3 class="text-center text-warning">添加新pizza</h3>
    <div class="form-group">
      <label for="Input1">
        <h5 class="text-warning">品种</h5>
      </label>
      <input type="text" class="form-control" id="Input1" placeholder="请输入您的pizza种类">
    </div>
    <div class="form-group">
      <label for="Textarea1">
        <h5 class="text-warning">商品描述</h5>
      </label>
      <textarea class="form-control" id="Textarea1" rows="3" placeholder="请写下这款pizza有什么特点..."></textarea>
    </div>
    <div class="form-group">
      <label for="Select1">
        <h5 class="text-warning">尺寸 & 价格</h5>
      </label>
      <br>
      <span class="spans">尺寸：</span>
      <select class="form-control col-2" id="Select1">
        <option value="7">5</option>
        <option value="9">7</option>
        <option value="10">9</option>
        <option value="12">11</option>
        <option value="14">14</option>
      </select>
      <span class="spans">价格 :</span>
      <input type="text" class="form-control col-4" id="Input2">
    </div>
    <br>
    <span class="spans">尺寸：</span>
    <select class="form-control col-2" id="Select2">
      <option value="7">5</option>
      <option value="9">7</option>
      <option value="10">9</option>
      <option value="12">11</option>
      <option value="14">14</option>
    </select>
    <span class="spans">价格 :</span>
    <input type="text" class="form-control col-4" id="Input2">
    <button type="button" class="btn btn-primary btn-lg btn-block mt-5">添加Pizza</button>
  </form>
</template>
<script>
import axios from 'axios'
export default {};
</script>
<style>
</style>

