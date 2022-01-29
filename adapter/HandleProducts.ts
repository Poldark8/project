import {HandleBaseAxios} from "./HandleBaseAxios";

export class HandleProducts extends HandleBaseAxios {
    getProduct(id: string) {
        return this._get(`/products/${id}`);
    }
}