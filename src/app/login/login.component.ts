import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { UtilService, AdminService, AuthenticationService } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm') loginForm: NgForm;
    public loginModel: any = {
    };
    loginData: any;
    otpoption: boolean = true;
    constructor(public router: Router,
        public utilService: UtilService,
        public sdminService: AdminService,
        public authenticationService: AuthenticationService) { }

    ngOnInit() { }

    onLoggedin(loginForm) {
        console.log(this.loginModel);
        if (this.otpoption) {
            this.authenticationService.checkLogin(this.loginModel).subscribe(res => {
                this.otpoption = false;
                this.loginData = res;
                this.utilService.showErrorSuccess('Login', res.response_message);
                // localStorage.setItem('isLoggedin', 'true');
                // localStorage.setItem('access_token', res.token);
                // this.router.navigate(['dashboard']);
            }, err => {
                this.otpoption = true;
                this.utilService.showErrorSuccess('Login', 'UnSuccessfully');
            });
        }
        else {
            var data = {
                "user_id": this.loginData.response_date,
                "otp": this.loginModel.otp,
                "device_token": "",
                "device_type": "android"
            }
            this.authenticationService.otplogin(data).subscribe(res => {
                console.log(res);
                this.utilService.showErrorSuccess('Login', 'Successfully');
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('access_token', res.response_data.access_token);
                this.router.navigate(['dashboard']);
            }, err => {
                this.utilService.showErrorSuccess('Login', 'UnSuccessfully');
            });
        }
    }
}
