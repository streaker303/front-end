<template>
    <div class="btn_box cancel" @click="searchBtn">
        <button class="btn">
            <p>{{ title }}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CancelBtn',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        searchBtn() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
	.btn_box {
		cursor: pointer;
		display: inline-block;
	}

	.btn_box+.btn_box {
		margin-left: 10px;
	}

	.btn {
		position: relative;
		width: 80px;
		height: 30px;
		box-sizing: border-box;
		background: url(./images/cancleBg.png) no-repeat 100%;
		color: #fff;
		font-family: "微软雅黑";
		pointer-events: none;

        p{
            width: 80px;
            text-align: center;
            font-size:12px;
            color:#fff;
        }
		/*穿透效果*/
	}
</style>
