using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrossfitOpenStats.DbContext.Repositories.Implementations
{
    public interface IStateRepository
    {
        IEnumerable<State> GetStates();
    }
}
