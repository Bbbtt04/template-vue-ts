import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
} from 'axios';

//接口
interface BTRequestInterceptors {
    requestInterceptor: (
        config: AxiosRequestConfig
    ) => AxiosRequestConfig;
    requestInterceptorCatch: (err: any) => any;
    responseInterceptor: (
        config: AxiosResponse
    ) => AxiosResponse;
    responseInterceptorCatch: (err: any) => any;
}
interface BTRequestConfig
    extends AxiosRequestConfig {
    insterceptors?: BTRequestInterceptors;
}

class BTRequest {
    instance?: AxiosInstance;
    insterceptors?: BTRequestInterceptors;

    constructor(config: BTRequestConfig) {
        this.instance = axios.create(config);

        this.instance.interceptors.request.use(
            this.insterceptors
                ?.requestInterceptor,
            this.insterceptors
                ?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.insterceptors
                ?.responseInterceptor,
            this.insterceptors
                ?.responseInterceptorCatch
        );
    }

    request(config: AxiosRequestConfig) {
        this.instance
            ?.request(config)
            .then(res => {
                console.log(res);
            });
    }
}

export default BTRequest;
