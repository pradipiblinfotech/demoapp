import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, UtilService } from '../../shared';
@Component({
    selector: 'app-stafflist',
    templateUrl: './stafflist.component.html',
    styleUrls: ['./stafflist.component.scss']
})
export class StaffListComponent implements OnInit {
    closeResult: string;
    StaffList: any = {
    };
    phone_number: any;
    Staffdata = [];
    constructor(private modalService: NgbModal,
        public adminService: AdminService,
        public utilService: UtilService) { }
    ngOnInit() {
        this.getstaff();
    }
    getstaff() {
        this.adminService.getstaff().subscribe((res: any) => {
            this.Staffdata = res.response_data;
            // this.utilService.showErrorSuccess('Staff Added', 'Successfully');
        }, err => {
            // this.utilService.showErrorSuccess('Staff Added', 'UnSuccessfully');
        });
    }
    OpenStaffModal(data, key, addstaffmodal) {
        if (key == 'add') {
            this.StaffList = {};
            this.phone_number = ''
        }
        else {
            this.StaffList.first_name = data.first_name;
            this.StaffList.last_name = data.last_name;
            this.StaffList.email = data.email;
            this.phone_number = data.phone_number;
            this.StaffList.address = data.address;
            this.StaffList.birth_date = data.birth_date;
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
    AddStaff() {
        let tempphone = [];
        tempphone.push(this.phone_number)
        this.StaffList['phone_number'] = tempphone;
        this.adminService.addstaff(this.StaffList).subscribe(res => {
            if (res.response_code == 0) {
                this.getstaff();
                this.utilService.showErrorSuccess('Staff Added', 'Successfully');
            }
            else {
                this.utilService.showErrorSuccess('Staff', res.response_message);
            }
        }, err => {
            this.utilService.showErrorSuccess('Staff Added', 'UnSuccessfully');
        });
    }
}
