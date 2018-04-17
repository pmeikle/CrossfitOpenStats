using System.Collections.Generic;

namespace CrossfitOpenStats.DbContext.Repositories.Interfaces
{
    public interface IPolicyRepository
    {
        IEnumerable<Policy> GetPolicies();
        int AddPolicy(Policy policy);
        int SavePolicy(Policy policy);
        int DeletePolicy(int policyId);
    }
}
