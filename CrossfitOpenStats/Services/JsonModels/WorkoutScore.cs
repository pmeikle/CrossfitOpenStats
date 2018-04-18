namespace CrossfitOpenStats.Services.JsonModels
{
    public class WorkoutScore
    {
        public int Ordinal { get; set; }
        public string Rank { get; set; }
        public string Score { get; set; }
        public string ScoreDisplay { get; set; }
        public string MobileScoreDisplay { get; set; }
        public string ScoreIdentifier { get; set; }
        public string Scaled { get; set; }
        public string Video { get; set; }
        public string BreakDown { get; set; }
        public string Heat { get; set; }
        public string Lane { get; set; }
    }
}