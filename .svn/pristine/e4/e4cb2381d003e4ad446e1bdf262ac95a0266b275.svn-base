<template>
    <el-dialog
        top="20vh"
        :lock-scroll="false"
        :visible.sync="$store.state.common.loginConfig.show"
        width="768px"
        :show-close="false"
        custom-class="loginDialog"
        @opened="open"
        @closed="close"
    >
        <div ref="login-container" class="login-container">
            <!--注册-->
            <div class="form-login-container sign-up-login-container">
                <el-tabs v-model="activeName" stretch @tab-click="handleClick">
                    <el-tab-pane label="个人注册" name="first">
                        <el-form ref="registerPersonalForm" :rules="registerPersonalFormRules" :model="registerPersonalForm" class="demo-form-inline per-register">
                            <el-form-item prop="phone">
                                <el-input v-model="registerPersonalForm.phone" size="mini" placeholder="请输入手机号">
                                    <template slot="prepend">
                                        +86
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-input v-model="registerPersonalForm.code" size="mini" placeholder="请输入6位短信验证码">
                                    <template slot="append">
                                        <p v-if="show" @click="validSend('registerPersonalForm',registerPersonalForm)">
                                            获取验证码
                                        </p>
                                        <p v-if="!show">
                                            {{ count }}s后重新获取
                                        </p>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-button size="mini" @click="validRegister('registerPersonalForm',registerPersonalForm)">
                                注 册
                            </el-button>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="企业注册" name="second">
                        <el-form ref="registerFormCompany" :model="registerFormCompany" :rules="registerFormCompanyRules" class="demo-form-inline bus-register">
                            <el-form-item prop="phone">
                                <el-input v-model="registerFormCompany.phone" size="mini" placeholder="请输入手机号">
                                    <template slot="prepend">
                                        +86
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-input v-model="registerFormCompany.code" size="mini" placeholder="请输入6位短信验证码">
                                    <template slot="append">
                                        <p v-if="showCompany" @click="validSend('registerFormCompany',registerFormCompany)">
                                            获取验证码
                                        </p>
                                        <p v-if="!showCompany">
                                            {{ countCompany }}s后重新获取
                                        </p>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="fullName">
                                <el-input v-model="registerFormCompany.fullName" class="border" size="mini" placeholder="请输入真实姓名">
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="enterpriseName">
                                <el-input v-model="registerFormCompany.enterpriseName" class="border" size="mini" placeholder="请输入企业名称">
                                </el-input>
                            </el-form-item>
                            <el-button size="mini" @click="validRegister('registerFormCompany',registerFormCompany)">
                                注 册
                            </el-button>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <!--登录-->
            <div class="form-login-container sign-in-login-container">
                <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" class="demo-form-inline user-login">
                    <h1>用户登录</h1>
                    <el-form-item prop="phone">
                        <el-input v-model="loginForm.phone" size="mini" placeholder="请输入手机号">
                            <template slot="prepend">
                                +86
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="code">
                        <el-input v-model="loginForm.code" size="mini" placeholder="请输入6位短信验证码">
                            <template slot="append">
                                <p v-if="showLogin" @click="validSend('loginForm',loginForm)">
                                    获取验证码
                                </p>
                                <p v-if="!showLogin">
                                    {{ countLogin }}s后重新获取
                                </p>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-button size="mini" @click="validLogin('loginForm',loginForm)">
                        登录
                    </el-button>
                </el-form>
            </div>
            <div class="overlay-login-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>已有账号</h1>
                        <p>与我们保持联系请登录您的个人信息</p>
                        <el-button id="signIn" size="mini" class="ghost" @click="switchLogin">
                            登录
                        </el-button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>账号注册</h1>
                        <p>输入您的个人资料，开启您的个性化定制服务</p>
                        <el-button id="signUp" size="mini" class="ghost" @click="switchRegister">
                            注册
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import { send_code, register, login } from '@/server/common.js'
export default {
    name: 'Login',
    data() {
        var validatorPhone = function(rule, value, callback) {
            if (value === '') {
                callback(new Error('手机号不能为空'))
            } else if (!/^1\d{10}$/.test(value)) {
                callback(new Error('手机号格式错误'))
            } else {
                callback()
            }
        }
        return {
            registerPersonalForm: {
                phone: '',
                code: ''
            },
            registerPersonalFormRules: {
                phone: { required: true, validator: validatorPhone, trigger: 'blur' },
                code: { required: true, message: '请输入短信验证码', trigger: 'blur' }
            },
            registerFormCompany: {
                phone: '',
                code: '',
                fullName: '',
                enterpriseName: ''
            },
            registerFormCompanyRules: {
                phone: { required: true, validator: validatorPhone, trigger: 'blur' },
                code: { required: true, message: '请输入短信验证码', trigger: 'blur' },
                fullName: { required: true, message: '请输入真实姓名', trigger: 'blur' },
                enterpriseName: { required: true, message: '请输入企业名称', trigger: 'blur' }
            },
            loginForm: {
                phone: '',
                code: ''
            },
            loginFormRules: {
                phone: { required: true, validator: validatorPhone, trigger: 'blur' },
                code: { required: true, message: '请输入短信验证码', trigger: 'blur' }
            },
            isLogin: true,
            registerType: 'first',
            showCompany: true,
            countCompany: 0,
            timerCompany: null,
            show: true,
            count: 0,
            timer: null,
            showLogin: true,
            countLogin: 0,
            timerLogin: null,
            activeName: 'first'
        }
    },
    computed: {
        type() {
            console.log('类型', this.$store.state.common.loginConfig.type)
            return this.$store.state.common.loginConfig.type
        }
    },
    watch: {
        type: {
            handler(newVal, oldVal) {
                console.log('监听主题', newVal)
            }
        }
    },

    mounted() {

    },
    methods: {
        open() {
            if (this.type === 0) {
                this.switchLogin()
                this.isLogin = true
            }
            if (this.type === 1) {
                this.switchRegister()
                this.isLogin = false
            }
        },
        resetForm() {
            this.$refs.registerPersonalForm.resetFields()
            this.$refs.registerFormCompany.resetFields()
            this.$refs.loginForm.resetFields()
            this.registerPersonalForm = {
                phone: '',
                code: ''
            }
            this.registerFormCompany = {
                phone: '',
                code: '',
                fullName: '',
                enterpriseName: ''
            }
            this.loginForm = {
                phone: '',
                code: ''
            }
        },
        close() {
            this.resetForm()
        },
        validRegister(formName, obj) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.register(obj)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        validLogin(formName, obj) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login(obj)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        login(obj) {
            const data = {
                queryData: {},
                paramsData: {
                    username: obj.phone,
                    verificationCode: obj.code
                }
            }
            login(data).then(res => {
                console.log('res', res)
                this.$message({
                    message: '登录成功',
                    type: 'success'
                })
                this.$setlocalStorage('userInfo', res)
                this.$store.commit('switchUserInfo', res)
                this.$store.commit('switchLoginShow', {
                    show: false,
                    type: this.$store.state.common.loginConfig.type
                })
            }).catch(error => {
                console.log('error', error)
            })
        },
        register(obj) {
            const data = {
                queryData: {},
                paramsData: {
                    username: obj.phone,
                    verificationCode: obj.code,
                    type: this.registerType === 'first' ? 0 : 1
                }
            }
            if (this.registerType === 'second') {
                data.paramsData.fullName = obj.fullName
                data.paramsData.enterpriseName = obj.enterpriseName
            }
            register(data).then(res => {
                this.$message({
                    message: '注册成功',
                    type: 'success'
                })
                this.switchLogin()
            }).catch(error => {
                console.log('error', error)
            })
        },
        validSendCompany(formName, obj) {
            this.$refs[formName].validateField(['phone'], (error) => {
                if (!error) {
                    this.sendCode(obj)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        getPhoneCodeLogin() {
            const TIME_COUNT = 60
            if (!this.timerLogin) {
                this.countLogin = TIME_COUNT
                this.showLogin = false
                this.timerLogin = setInterval(() => {
                    if (this.countLogin > 0 && this.countLogin <= TIME_COUNT) {
                        this.countLogin--
                    } else {
                        this.showLogin = true
                        clearInterval(this.timerLogin)
                        this.timerLogin = null
                    }
                }, 1000)
            }
        },
        getPhoneCodeCompany() {
            const TIME_COUNT = 60
            if (!this.timerCompany) {
                this.countCompany = TIME_COUNT
                this.showCompany = false
                this.timerCompany = setInterval(() => {
                    if (this.countCompany > 0 && this.countCompany <= TIME_COUNT) {
                        this.countCompany--
                    } else {
                        this.showCompany = true
                        clearInterval(this.timerCompany)
                        this.timerCompany = null
                    }
                }, 1000)
            }
        },
        getPhoneCode() {
            const TIME_COUNT = 60
            if (!this.timer) {
                this.count = TIME_COUNT
                this.show = false
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--
                    } else {
                        this.show = true
                        clearInterval(this.timer)
                        this.timer = null
                    }
                }, 1000)
            }
        },
        validSend(formName, obj) {
            this.$refs[formName].validateField(['phone'], (error) => {
                if (!error) {
                    this.sendCode(obj)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        sendCode(obj) {
            //
            console.log('this.registerType ', this.registerType)
            if (this.isLogin) {
                this.getPhoneCodeLogin()
            } else {
                if (this.registerType === 'first') {
                    this.getPhoneCode()
                } else if (this.registerType === 'second') {
                    this.getPhoneCodeCompany()
                }
            }

            const data = {
                queryData: {},
                paramsData: {
                    username: obj.phone,
                    type: this.isLogin ? 1 : 0
                }
            }
            send_code(data).then(res => {
                this.$message({
                    message: '发送成功',
                    type: 'success'
                })
            }).catch(error => {
                console.log('error', error)
            })
        },
        onSubmit() {

        },
        handleClick(val) {
            console.log(val)
            this.registerType = val.name
        },
        switchLogin() {
            this.isLogin = true
            this.$refs['login-container'].classList.remove('right-panel-active')
        },
        switchRegister() {
            this.isLogin = false
            console.log(this.$refs['login-container'])
            this.$refs['login-container'].classList.add('right-panel-active')
        },
        handleLogin(formName) {
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
<style scoped lang="scss">
.login-container >>> .el-tabs,
.login-container >>> .el-tabs .el-tab-pane{
    height: 100%;
}
.login-container >>> .el-tabs .el-tabs__content{
    height: calc(100% - 145px);
    background-color: #fff;
}
.login-container >>> .el-tabs__nav-scroll{
    width:72%;
    margin:0 auto
}
.login-container >>> .el-tabs__nav-wrap::after {
    background-color: transparent;
}
.login-container >>> .el-tabs__item.is-top {
    font-size: 20px;
    color: #333333;
}
.login-container >>> .el-tabs__item.is-active {
    color: #2e80ff;
}
.login-container >>> .el-tabs__active-bar {
    background-color: #2e80ff;
}
.login-container >>> .el-tabs__header.is-top {
    padding-top: 75px;
    margin-bottom: 0;
    background-color: #fff;
}
.form-login-container >>> .el-form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 42px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    .el-form-item {
        margin-bottom: 30px;
    }
    .el-input {
        width: 300px;
        height: 38px;
        line-height: 38px;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
    }
    .el-input-group__prepend,
    .el-input-group__append,
    .el-input__inner{
        border: none;
        height: 38px;
        line-height: 38px;
        background-color: #fff;
    }
    .el-input-group__append {
        p {
            color: #2e80ff;
            cursor: pointer;
        }
    }
    .border .el-input__inner {
        border-bottom: 1px solid #e6e6e6 !important;
    }
    .el-button {
        width: 300px;
        height: 38px;
        background-color: #2e80ff;

        span {
            color: #fff;
        }
    }
}
.form-login-container >>> .per-register {
    margin-top: -28px;
}
.form-login-container >>> .bus-register {
    margin-top: 12px;
}
.overlay-login-container .overlay-panel {
    h1 {
        font-size: 28px;
        color: #fff;
        font-weight: normal;
        letter-spacing: 3px;
    }
    p {
        font-size: 14px;
        letter-spacing: 1px;
        color: #ffffff;
        margin: 29px 0 43px;
    }
    >>> .el-button {
        width: 100px;
        height: 38px;
        span {
            color: #2e80ff;
        }
    }
}
.user-login {
    h1 {
        font-size: 28px;
        font-weight: normal;
        letter-spacing: 3px;
        color: #333333;
        margin-bottom: 50px;
    }
    >>> .el-button {
        margin-top: 50px;
    }
}

</style>
<style>
.loginDialog{
    background-color: rgba(0,0,0,0);
    box-shadow:none;
}
.loginDialog .el-dialog__header{
    padding:0;
}

.login-container {
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%); */
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    background-color:#fff;
    opacity: 1;
}

.form-login-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-login-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-login-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 1;
}

.overlay-login-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.login-container .overlay {
    background: url("../../assets/img/loginBg.jpg") center;
    background-size: 100%;
    color: #fff;
    position: absolute;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.login-container .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.login-container .overlay-right {
    right: 0;
    transform: translateX(0);
}

.login-container .overlay-left {
    transform: translateX(-20%);
}

/*....Animation....*/

/*....Move signin to the right....*/
.login-container.right-panel-active .sign-in-login-container {
    transform: translateX(100%);
}

/*....Move overlay to the left....*/
.login-container.right-panel-active .overlay-login-container {
    transform: translateX(-100%);
}

/*....Bring sign up over sign in....*/
.login-container.right-panel-active .sign-up-login-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

/*...Move overlay back to right....*/
.login-container.right-panel-active .overlay {
    transform: translateX(50%);
}

.login-container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.login-container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

</style>
