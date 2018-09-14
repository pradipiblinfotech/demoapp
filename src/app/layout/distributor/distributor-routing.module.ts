import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistributorListComponent } from './distributor.component';

const routes: Routes = [
    {
        path: '', component: DistributorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DistributorListRoutingModule {
}
