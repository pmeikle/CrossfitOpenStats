namespace CrossfitOpenStats.Services.JsonModels
{
    public class Entrant
    {
        public string CompetitorId { get; set; }
        public string CompetitorName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Status { get; set; }
        public string PostCompStatus { get; set; }
        public string Gender { get; set; }
        public string ProfilePicS3Key { get; set; }
        public string CountryShortCode { get; set; }
        public string RegionalCode { get; set; }
        public string RegionId { get; set; }
        public string RegionName { get; set; }
        public string DivisionId { get; set; }
        public string Profession { get; set; }
        public string AffiliateId { get; set; }
        public string AffiliateName { get; set; }
        public string Age { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string TeamCaptain { get; set; }
    }
}