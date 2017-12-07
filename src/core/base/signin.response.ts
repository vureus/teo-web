import { Http, Headers, RequestOptions } from '@angular/http';

export class SigninResponse {
    public key: string;
    public user_id: number;
    public first_name: string;
    public last_name: string;
    public email: string;
    public avatar: string;
    public facebook_id: string;
}
