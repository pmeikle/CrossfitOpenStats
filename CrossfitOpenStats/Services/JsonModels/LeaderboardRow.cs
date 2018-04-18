using System.Collections.Generic;

namespace CrossfitOpenStats.Services.JsonModels
{
    public class LeaderboardRow
    {
        public Entrant Entrant { get; set; }
        public Ui Ui { get; set; }
        public List<WorkoutScore> Scores { get; set; }
        public string OverallRank { get; set; }
        public string OverallScore { get; set; }
        public string NextStage { get; set; }
    }
}