import axios, {AxiosInstance} from "axios";

export abstract class HandleBaseAxios {
    protected _http: AxiosInstance = axios.create();
    protected defaultOptions = {};

    constructor() {
        this._initHttp();
    }

    protected _initHttp() {
        const baseURL: string = 'https://fakestoreapi.com';
        this._http = axios.create({
            baseURL: `${baseURL}`,
        });
    }


    protected _get(path: string, options = {}) {
        return this._http.get<{ data: { [key: string]: any } }>(path, {...this.defaultOptions, ...options});
    }


}
