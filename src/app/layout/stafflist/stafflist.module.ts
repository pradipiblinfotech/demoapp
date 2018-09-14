import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StaffListComponent } from './stafflist.component';
import { StaffListRoutingModule } from './stafflist-routing.module';
import { StatModule,AdminService,UtilService } from '../../shared';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        StaffListRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        StaffListComponent,
    ],
    providers : [AdminService,UtilService]

})
export class StaffListModule {}
