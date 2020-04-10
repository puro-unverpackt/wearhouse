
using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public interface ISupplierService
    {
        SupplierDto Create(SupplierCreateDto supplierCreateDto);
        bool Delete(int id);
        SupplierDto Edit(SupplierEditDto supplierEditDto);
        SupplierDto Get(int id);
        IEnumerable<SupplierDto> GetAll();
    }
}