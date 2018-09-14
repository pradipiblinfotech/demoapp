import { Injectable, Output, EventEmitter, TemplateRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UtilService {
    private role: string = '';
    private userRoles: any = [];

    constructor(
        public router: Router,
        private toastr: ToastrService
    ) {

    }
    showErrorToast(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
        this.toastr.error(message, title);
    }

    showErrorWarning(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
        this.toastr.warning(message, title);
    }

    showErrorSuccess(title: string = 'Something went wrong.', message: string = "Please, try again later.") {
        this.toastr.success(message, title);
    }
}