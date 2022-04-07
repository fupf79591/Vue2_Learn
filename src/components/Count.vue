<template>
    <div>
        <h3>当前求和为：{{sum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="oddAdd">当前和为奇数再加</button>
        <button @click="waitAdd">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
                sum: 0
            }
        },
        methods: {
            add() {
                this.sum += this.n
            },
            sub() {
                this.sum -= this.n
            },
            oddAdd() {
                if (this.sum % 2) {
                    this.sum += this.n
                }
            },
            waitAdd() {
                setTimeout(() => {
                    this.sum += this.n
                }, 500);
            },
        }
    }
</script>

<style>

</style>