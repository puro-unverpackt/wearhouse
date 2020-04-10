
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public interface ISupplierUseCase
    {
        Supplier Create(SupplierCreateDto supplierCreateDto);
        bool Delete(int id);
        Supplier Edit(SupplierEditDto supplierEditDto);
        Supplier Get(int id);
        IQueryable<Supplier> GetAll();
    }
}