using System.Collections.Generic;

namespace CrossfitOpenStats.DbContext.Repositories.Interfaces
{
    public interface IRiskConstructionRepository
    {
        IEnumerable<RiskConstruction> GetRiskConstructions();
    }
}
