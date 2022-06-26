<template>
    <div class="login_container" ref="loginRef">
        <img
            src="@/assets/pictures/2.png"
            class="bgc"
        />
        <el-form
            class="box"
            :rules="rules"
            :model="inputData"
        >
            <h1 class="title">LOGIN</h1>
            <el-form-item
                label="用户名"
                prop="Username"
            >
                <el-input
                    placeholder="请输入用户名"
                    v-model="inputData.Username"
                />
            </el-form-item>
            <el-form-item
                label="密 码"
                prop="Password"
            >
                <el-input
                    placeholder="请输入密码"
                    v-model="inputData.Password"
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    auto-insert-space
                    size="large"
                    class="login_btn"
                >
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import {
    defineComponent,
    onMounted,
    reactive,
    watch,
    ref,
    getCurrentInstance
} from 'vue';
import { rules } from './config/rules';

const loginRef = ref(null);
const inputData = reactive({
    Username: '',
    Password: ''
});
</script>

<style lang="less" scoped>
.login_container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .bgc {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -999;
        width: 100vw;
        height: 100vh;
    }
    .box {
        padding: 40px 40px;
        width: 400px;
        background: #fff;
        border-radius: 10px;
        z-index: 1;
        .title {
            margin-bottom: 20px;
            letter-spacing: 3px;
        }
        .login_btn {
            margin-top: 20px;
            width: 100%;
        }
    }
}
</style>