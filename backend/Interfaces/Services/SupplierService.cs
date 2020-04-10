
using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.Entities;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierUseCase _supplierUseCase;

        public SupplierService(ISupplierUseCase supplierUseCase)
        {
            _supplierUseCase = supplierUseCase;
        }

        public SupplierDto Create(SupplierCreateDto supplierCreateDto)
        {

            return new SupplierDto(_supplierUseCase.Create(supplierCreateDto));
        }

        public bool Delete(int id)
        {
            return _supplierUseCase.Delete(id);
        }

        public SupplierDto Edit(SupplierEditDto supplierEditDto)
        {
            return new SupplierDto(_supplierUseCase.Edit(supplierEditDto));
        }

        public SupplierDto Get(int id)
        {
            return new SupplierDto(_supplierUseCase.Get(id));
        }


        public IEnumerable<SupplierDto> GetAll()
        {
            IList<SupplierDto> supplierDtos = new List<SupplierDto>();
            foreach (Supplier supplier in _supplierUseCase.GetAll())
            {
                supplierDtos.Add(new SupplierDto(supplier));
            }
            return supplierDtos;
        }
    }
}