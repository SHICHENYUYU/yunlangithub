export default {
  isRequestProxy: true,
  development: {
    // 开发环境接口请求
    host: 'http://192.168.101.1:11500',
    // 开发环境 cdn 路径
    cdn: ''
  },
  test: {
    // 测试环境接口地址
    host: '',
    // 测试环境 cdn 路径
    cdn: ''
  },
  release: {
    // 正式环境接口地址：置空则走同源 /api，由 Nginx 反代到网关；
    // 否则生产包会直连下方写死的开发机 IP，绕过反代
    host: '',
    // 正式环境 cdn 路径
    cdn: ''
  }
}
