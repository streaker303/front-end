<template>
    <el-form
        ref="registerForm"
        :model="registerUser"
        :rules="registerRules"
        label-width="100px"
        class="registerForm sign-up-form"
    >
        <el-form-item label="用户名" prop="name">
            <el-input
                v-model="registerUser.name"
                placeholder="Enter UserName..."
            />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input
                v-model="registerUser.email"
                placeholder="Enter Email..."
            />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                v-model="registerUser.password"
                type="password"
                placeholder="Enter Password..."
            />
        </el-form-item>
        <el-form-item label="确认密码" prop="password2">
            <el-input
                v-model="registerUser.password2"
                type="password"
                placeholder="Enter Password..."
            />
        </el-form-item>

        <el-form-item label="选择身份">
            <el-select v-model="registerUser.role" placeholder="请选择身份">
                <el-option label="管理员" value="admin" />
                <el-option label="用户" value="user" />
                <el-option label="游客" value="visitor" />
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button
                type="primary"
                class="submit-btn"
                @click="handleRegister('registerForm')"
            >
                注册
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        registerUser: {
            type: Object,
            required: true
        },
        registerRules: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleRegister(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>
<style scoped>
</style>
