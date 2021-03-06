import axios, { AxiosRequestConfig } from 'axios';
export const JSON_WEB_TOKEN = 'JsonWebToken';

export default class BaseServie {
    protected BASE_URL: string | undefined = process.env.VUE_APP_BASE_URL;

    protected deleteConfig: AxiosRequestConfig;
    protected getConfig: AxiosRequestConfig;
    protected postConfig: AxiosRequestConfig;
    protected putConfig: AxiosRequestConfig;

    constructor() {
        console.debug('baseService::constructor', this.BASE_URL);

        const token = localStorage.getItem(JSON_WEB_TOKEN);

        this.deleteConfig = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token
            }
        };
        this.getConfig = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        };
        this.postConfig = {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            }
        };
        this.putConfig = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token
            }
        };
    }

    protected async DELETE(url: string, config: AxiosRequestConfig = this.deleteConfig) {
        const encodedUrl = encodeURI(url);
        console.info('API Call:=', url);

        try {
            const response = await axios.delete(encodedUrl, config);
            console.info('response', response);
            return response.data;
        } catch (error) {
            this.errorhandling(error);
        }
    }

    protected async GET(url: string, config: AxiosRequestConfig = this.getConfig) {
        const encodedUrl = encodeURI(url);
        console.info('API Call:=', url);

        try {
            const response = await axios.get(encodedUrl, config);
            console.info(response.config.url, response);
            return response.data;
        } catch (error) {
            this.errorhandling(error);
        }
    }

    protected async POST(url: string, data: any, config: AxiosRequestConfig = this.postConfig) {
        const encodedUrl = encodeURI(url);
        console.info('API Call:=', url, 'data', data);
        try {
            const response = await axios.post(encodedUrl, data, config);
            console.info('response', response);
            return response.data;
        } catch (error) {
            this.errorhandling(error);
        }
    }

    protected async PUT(url: string, data: any, config: AxiosRequestConfig = this.putConfig) {
        const encodedUrl = encodeURI(url);
        console.info('API Call:=', url, 'data', data);
        try {
            const response = await axios.put(encodedUrl, data, config);
            console.info('response', response);
            return response.data;
        } catch (error) {
            this.errorhandling(error);
        }
    }

    private errorhandling(error: any) {
        // Rethrow error
        throw error;
    }
}
