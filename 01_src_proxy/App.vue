<template>
  <div>
    <button @click="getStudentInfoList">点我查询学生信息</button>
    <button @click="getCarInfoList">点我查询汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {

    name: 'App',
    methods: {
      getStudentInfoList() {
        axios.get('http://localhost:8080/student/students').then(
          response => {
            console.log(response.data);
          },
          error => {
            console.log(error.message);
          }
        )
      },
      getCarInfoList() {
        axios.get('http://localhost:8080/car/cars').then(
          response => {
            console.log('请求成功', response.data);
          },
          error => {
            console.log('请求失败', error.message);
          }
        )

      }
    }
  }
</script>