using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using CrossfitOpenStats.Services;

namespace CrossfitOpenStats.Controllers
{
    public class ImportOpenStatsController : BaseApiController
    {
        public async Task<HttpResponseMessage> Get()
        {
            var statImportService = new ImportOpenStatsService();
            var pageOne = await statImportService.GetPage(1);
            return ToJson("It's loaded your stuff");
        }
    }
}
