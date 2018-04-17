import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PolicyService } from '../Service/policy.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IPolicy } from '../Model/policy';
import { IState } from '../Model/state';
import { IRiskConstruction } from '../Model/riskConstruction';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'app/Components/policy.component.html'
})

export class PolicyComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    policies: IPolicy[];
    policy: IPolicy;
    states: IState[];
    riskConstructions: IRiskConstruction[];
    msg: string;
    indLoading: boolean = false;
    policyForm: FormGroup;
    dboperation: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private formBuilder: FormBuilder, private policyService: PolicyService) { }

    ngOnInit(): void {
        this.policyForm = this.formBuilder.group({
            PolicyId: [''],
            PolicyNumber: ['', Validators.required],
            PolicyEffectiveDate: ['', Validators.required],
            PolicyExpirationDate: ['', Validators.required],
            PrimaryInsuredName: ['', Validators.required],
            PrimaryInsuredMailingAddress: ['', Validators.required],
            PrimaryInsuredCity: ['', Validators.required],
            PrimaryInsuredStateId: [''],
            PrimaryInsuredZipCode: ['', Validators.required],
            RiskConstructionId: [''],
            RiskYearBuilt: ['', Validators.required],
            RiskAddress: ['', Validators.required],
            RiskCity: ['', Validators.required],
            RiskStateId: [''],
            RiskZipCode: ['', Validators.required]
        });

        this.loadPolicies();
        

    }

    loadPolicies(): void {/*
        this.indLoading = true;
        this.policyService.get(Global.BASE_POLICY_ENDPOINT)
            .subscribe(policies => { this.policies = policies; this.indLoading = false; },
                       error => this.msg = <any>error);*/
    }

    addPolicy() {
        this.dboperation = DBOperation.create;
        this.setControlsState(true);
        this.modalTitle = "Add New Policy";
        this.modalBtnTitle = "Add";
        this.policyForm.reset();
        this.modal.open();
    }

    editPolicy(policyId: number) {
        this.dboperation = DBOperation.update;
        this.setControlsState(true);
        this.modalTitle = "Edit Policy";
        this.modalBtnTitle = "Update";
        this.policy = this.policies.filter(x => x.PolicyId == policyId)[0];
        this.updatePolicyForm();
        this.modal.open();
    }

    deletePolicy(policyId: number) {
        this.dboperation = DBOperation.delete;
        this.setControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.policy = this.policies.filter(x => x.PolicyId == policyId)[0];
        this.updatePolicyForm();
        this.modal.open();
    }

    updatePolicyForm(): void {
        var datePipe = new DatePipe("en-US");
        this.policyForm.setValue({
            PolicyId: this.policy.PolicyId,
            PolicyNumber: this.policy.PolicyNumber,
            PolicyEffectiveDate: datePipe.transform(this.policy.PolicyEffectiveDate, 'y-MM-dd'),
            PolicyExpirationDate: datePipe.transform(this.policy.PolicyExpirationDate, 'y-MM-dd'),
            PrimaryInsuredName: this.policy.PrimaryInsuredName,
            PrimaryInsuredMailingAddress: this.policy.PrimaryInsuredMailingAddress,
            PrimaryInsuredCity: this.policy.PrimaryInsuredCity,
            PrimaryInsuredStateId: this.policy.PrimaryInsuredStateId,
            PrimaryInsuredZipCode: this.policy.PrimaryInsuredZipCode,
            RiskConstructionId: this.policy.RiskConstructionId,
            RiskYearBuilt: this.policy.RiskYearBuilt,
            RiskAddress: this.policy.RiskAddress,
            RiskCity: this.policy.RiskCity,
            RiskStateId: this.policy.RiskStateId,
            RiskZipCode: this.policy.RiskZipCode
        });
    }

    onSubmit(formData: any) {
        this.msg = "";
        /*
        switch (this.dboperation) {
            case DBOperation.create:
                this.policyService.post(Global.BASE_POLICY_ENDPOINT, formData._value).subscribe(
                    data => {
                        this.handleApiResponse("Policy successfully added.", data);
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this.policyService.put(Global.BASE_POLICY_ENDPOINT, formData._value.PolicyId, formData._value).subscribe(
                    data => {
                        this.handleApiResponse("Policy successfully updated.", data);
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this.policyService.delete(Global.BASE_POLICY_ENDPOINT, formData._value.PolicyId).subscribe(
                    data => {
                        this.handleApiResponse("Policy successfully deleted.", data);
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

        }
        */
    }

    handleApiResponse(successMessage: string, returnStatus: number) {
        if (returnStatus == 1) //Success
        {
            this.msg = successMessage;
            this.loadPolicies();
        }
        else {
            this.msg = "There was an issue while saving record, please contact to system administrator!";
        }

        this.modal.dismiss();
    }

    setControlsState(isEnable: boolean) {
        isEnable ? this.policyForm.enable() : this.policyForm.disable();
    }
}