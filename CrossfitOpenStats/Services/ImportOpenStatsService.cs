using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace CrossfitOpenStats.Services
{
    public class ImportOpenStatsService
    {
        private HttpClient Client { get; set; }

        public ImportOpenStatsService()
        {
            this.Client = new HttpClient();
            Client.BaseAddress = new Uri("https://games.crossfit.com/");
            Client.DefaultRequestHeaders.Accept.Clear();
            Client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("text/json"));
        }

        public async Task<string> GetPage(int pageNum)
        {
            var response = await Client.GetAsync($"competitions/api/v1/competitions/open/2018/leaderboards?page={pageNum}");
            var json = response.Content.ReadAsStringAsync().Result;
            return json;
        }
    }
}