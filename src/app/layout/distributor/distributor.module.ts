import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DistributorListComponent } from './distributor.component';
import { DistributorListRoutingModule } from './distributor-routing.module';
import { StatModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { AdminService, UtilService } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DistributorListRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        DistributorListComponent,
    ],
    providers: [AdminService, UtilService]
})
export class DistributorListModule { }
