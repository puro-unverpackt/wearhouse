
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class BaseUseCase
    {
        protected WearhouseContext ModelContext { get; private set; }

        public BaseUseCase(WearhouseContext _context)
        {
            ModelContext = _context;
        }

    }
}