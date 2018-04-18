"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var policy_service_1 = require("../Service/policy.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var PolicyComponent = /** @class */ (function () {
    function PolicyComponent(formBuilder, policyService) {
        this.formBuilder = formBuilder;
        this.policyService = policyService;
        this.indLoading = false;
    }
    PolicyComponent.prototype.ngOnInit = function () {
        this.policyForm = this.formBuilder.group({
            PolicyId: [''],
            PolicyNumber: ['', forms_1.Validators.required],
            PolicyEffectiveDate: ['', forms_1.Validators.required],
            PolicyExpirationDate: ['', forms_1.Validators.required],
            PrimaryInsuredName: ['', forms_1.Validators.required],
            PrimaryInsuredMailingAddress: ['', forms_1.Validators.required],
            PrimaryInsuredCity: ['', forms_1.Validators.required],
            PrimaryInsuredStateId: [''],
            PrimaryInsuredZipCode: ['', forms_1.Validators.required],
            RiskConstructionId: [''],
            RiskYearBuilt: ['', forms_1.Validators.required],
            RiskAddress: ['', forms_1.Validators.required],
            RiskCity: ['', forms_1.Validators.required],
            RiskStateId: [''],
            RiskZipCode: ['', forms_1.Validators.required]
        });
        this.loadPolicies();
    };
    PolicyComponent.prototype.loadPolicies = function () {
    };
    PolicyComponent.prototype.addPolicy = function () {
        this.dboperation = enum_1.DBOperation.create;
        this.setControlsState(true);
        this.modalTitle = "Add New Policy";
        this.modalBtnTitle = "Add";
        this.policyForm.reset();
        this.modal.open();
    };
    PolicyComponent.prototype.editPolicy = function (policyId) {
        this.dboperation = enum_1.DBOperation.update;
        this.setControlsState(true);
        this.modalTitle = "Edit Policy";
        this.modalBtnTitle = "Update";
        this.policy = this.policies.filter(function (x) { return x.PolicyId == policyId; })[0];
        this.updatePolicyForm();
        this.modal.open();
    };
    PolicyComponent.prototype.deletePolicy = function (policyId) {
        this.dboperation = enum_1.DBOperation.delete;
        this.setControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.policy = this.policies.filter(function (x) { return x.PolicyId == policyId; })[0];
        this.updatePolicyForm();
        this.modal.open();
    };
    PolicyComponent.prototype.updatePolicyForm = function () {
        var datePipe = new common_1.DatePipe("en-US");
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
    };
    PolicyComponent.prototype.onSubmit = function (formData) {
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
    };
    PolicyComponent.prototype.handleApiResponse = function (successMessage, returnStatus) {
        if (returnStatus == 1) //Success
         {
            this.msg = successMessage;
            this.loadPolicies();
        }
        else {
            this.msg = "There was an issue while saving record, please contact to system administrator!";
        }
        this.modal.dismiss();
    };
    PolicyComponent.prototype.setControlsState = function (isEnable) {
        isEnable ? this.policyForm.enable() : this.policyForm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], PolicyComponent.prototype, "modal", void 0);
    PolicyComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/policy.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, policy_service_1.PolicyService])
    ], PolicyComponent);
    return PolicyComponent;
}());
exports.PolicyComponent = PolicyComponent;
//# sourceMappingURL=policy.component.js.map