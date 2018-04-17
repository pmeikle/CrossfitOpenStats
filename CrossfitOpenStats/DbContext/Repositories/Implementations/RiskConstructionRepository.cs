using System.Collections.Generic;
using System.Linq;
using CrossfitOpenStats.DbContext.Repositories.Interfaces;

namespace CrossfitOpenStats.DbContext.Repositories.Implementations
{
    public class RiskConstructionRepository : IRiskConstructionRepository
    {
        private readonly PolicyDBEntities _policyDb = new PolicyDBEntities();

        public IEnumerable<RiskConstruction> GetRiskConstructions()
        {
            return _policyDb.RiskConstructions.AsEnumerable();
        }
    }
}