import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, UtilService } from '../../shared';
@Component({
    selector: 'app-distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.scss']
})
export class DistributorListComponent implements OnInit {
    closeResult: string;
    DistributorList: any = {
    };
    phone_number: any;
    Distributordata = [];
    constructor(private modalService: NgbModal,
        public adminService: AdminService,
        public utilService: UtilService
    ) { }
    ngOnInit() {
        this.getdistributor();
    }
    getdistributor() {
        this.adminService.getdistributor().subscribe((res: any) => {
            this.Distributordata = res.response_data;
            // this.utilService.showErrorSuccess('Staff Added', 'Successfully');
        }, err => {
            // this.utilService.showErrorSuccess('Staff Added', 'UnSuccessfully');
        });
    }
    OpenStaffModal(data, key, addstaffmodal) {
        if (key == 'add') {
            this.DistributorList = {};
            this.phone_number = ''
        }
        else {
            this.DistributorList.first_name = data.first_name;
            this.DistributorList.last_name = data.last_name;
            this.DistributorList.email = data.email;
            this.phone_number = data.phone_number;
            this.DistributorList.address = data.address;
            this.DistributorList.birth_date = data.birth_date;
        }
        this.modalService.open(addstaffmodal).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    AddDistributor() {
        let tempphone = [];
        tempphone.push(this.phone_number)
        this.DistributorList['phone_number'] = tempphone;
        this.adminService.adddistributor(this.DistributorList).subscribe(res => {
            if (res.response_code == 0) {
                this.getdistributor();
                this.utilService.showErrorSuccess('Distributor Added', 'Successfully');
            }
            else {
                this.utilService.showErrorSuccess('Distributor', res.response_message);
            }
        }, err => {
            this.utilService.showErrorSuccess('Distributor Added', 'UnSuccessfully');
        });
    }
}
