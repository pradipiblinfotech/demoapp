import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UtilService,AdminService,AuthenticationService } from '../shared';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [UtilService,AdminService,AuthenticationService]
})
export class LoginModule { }
