using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using CrossfitOpenStats.Services.JsonModels;
using Newtonsoft.Json;

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

        public async Task<string> Get2018OpenData()
        {
            var firstPage = await  GetPage(1);
            var totalPages = firstPage.Pagination.TotalPages;
            for(var page = 2; page < totalPages; page++)
            {
                
            }
            return "whateverforthemoment";
        }

        public async Task<PageData> GetPage(int pageNum, int year = 2018)
        {
            var response = await Client.GetAsync($"competitions/api/v1/competitions/open/{2018}/leaderboards?page={pageNum}");
            var json = response.Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<PageData>(json);
        }
    }
}