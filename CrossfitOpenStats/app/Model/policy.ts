export interface IPolicy {
    PolicyId: number,
    PolicyNumber: string,
    PolicyEffectiveDate: Date,
    PolicyExpirationDate: Date,
    PrimaryInsuredName: string,
    PrimaryInsuredMailingAddress: string,
    PrimaryInsuredCity: string,
    PrimaryInsuredStateId: number,
    PrimaryInsuredZipCode: string,
    RiskConstructionId: number,
    RiskYearBuilt: number,
    RiskAddress: string,
    RiskCity: string,
    RiskStateId: number,
    RiskZipCode: string
}