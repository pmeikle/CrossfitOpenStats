using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CrossfitOpenStats.Services.JsonModels
{
    public class PageData
    {
        public int Version { get; set; }
        public string DataType { get; set; }
        public string Query { get; set; }
        public string CacheKey { get; set; }
        public Pagination Pagination { get; set; }
        public int Sort { get; set; }
        public Competition Competition { get; set; }
        public List<Ords> Ordinals { get; set; }
        public List<LeaderboardRow> LeaderboardRows { get; set; }
    }
}