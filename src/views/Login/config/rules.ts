export const rules = {
    Username: [
        {
            required: true,
            message: '必须输入账号',
            trigger: 'blur'
        },
        {
            pattern: /^[a-z0-9]{5,10}/,
            message: '账号必须是5~10个字母或数字',
            trigger: 'blur'
        }
    ],
    Password: [
        {
            required: true,
            message: '必须输入密码',
            trigger: 'blur'
        },
        {
            pattern: /^[a-z0-9]{5,10}/,
            message: '密码必须是5~10个字母或数字',
            trigger: 'blur'
        }
    ]
};
