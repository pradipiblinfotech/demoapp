import { Injectable } from '@angular/core';
import { CommonAPIService } from './common.service';

@Injectable()
export class AdminService {
    constructor(
        private commonApiService: CommonAPIService
    ) {

    }
    public addstaff(data: any) {
        return this.commonApiService.post('registerStaff', data);
    }
    public adddistributor(data: any) {
        return this.commonApiService.post('registerDistributor', data);
    }
    public getstaff() {
        return this.commonApiService.get('getStaffDetails');
    }
    public getdistributor() {
        return this.commonApiService.get('getDistributorDetails');
    }
}