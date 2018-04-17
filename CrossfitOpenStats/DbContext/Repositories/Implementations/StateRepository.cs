using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CrossfitOpenStats.DbContext.Repositories.Interfaces;

namespace CrossfitOpenStats.DbContext.Repositories.Implementations
{
    public class StateRepository : IStateRepository
    {
        private readonly PolicyDBEntities _policyDb = new PolicyDBEntities();

        public IEnumerable<State> GetStates()
        {
            return _policyDb.States.AsEnumerable();
        }
    }
}