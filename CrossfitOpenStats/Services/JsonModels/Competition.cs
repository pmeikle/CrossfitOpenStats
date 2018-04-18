namespace CrossfitOpenStats.Services.JsonModels
{
    public class Competition
    {
        public string Year { get; set; }
        public string CompetitionType { get; set; }
        public int CompetitionId { get; set; }
        public string FittestIn { get; set; }
        public string InSubCat { get; set; }
        public string RegionId { get; set; }
        public string RegionName { get; set; }
        public string CountryId { get; set; }
        public string CountryName { get; set; }
        public string StateId { get; set; }
        public string StateName { get; set; }
        public string Scaled { get; set; }
        public string Profession { get; set; }
        public string Division { get; set; }
        public string Regional { get; set; }
        public string Age_Group { get; set; }
        public string Weight_Group { get; set; }
    }
}