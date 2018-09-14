import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private commonApiService: CommonAPIService
    ) {

    }

    // public sendRequests(data: any) {
    //     return this.commonApiService.post('/api/add_request', data);
    // }


    public checkLogin(data: any) {
        return this.commonApiService.post('login', data);
    }
    public otplogin(data: any) {
        return this.commonApiService.post('verifyLoginOtp', data);
    }

    public logout() {
        return this.commonApiService.get('userLogout');
    }

    // public forgotPassword(data: any) {
    //     return this.commonApiService.post('auth/forgotpass', data);
    // }

    // public changePassword(data: any) {
    //     console.log(data);
    //     return this.commonApiService.put('users/edit/password', data);
    // }

}