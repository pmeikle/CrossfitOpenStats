using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using CrossfitOpenStats.DbContext.Repositories.Interfaces;

namespace CrossfitOpenStats.DbContext.Repositories.Implementations
{
    public class PolicyRepository : IPolicyRepository
    {
        private readonly PolicyDBEntities _policyDb = new PolicyDBEntities();

        public IEnumerable<Policy> GetPolicies()
        {
            return _policyDb.Policies.AsEnumerable();
        }

        public int AddPolicy(Policy policy)
        {
            _policyDb.Policies.Add(policy);
            return _policyDb.SaveChanges();
        }

        public int SavePolicy(Policy policy)
        {
            _policyDb.Entry(policy).State = EntityState.Modified;
            return _policyDb.SaveChanges();
        }

        public int DeletePolicy(int policyId)
        {
            _policyDb.Policies.Remove(_policyDb.Policies.FirstOrDefault(x => x.PolicyId == policyId));
            return _policyDb.SaveChanges();
        }
    }
}