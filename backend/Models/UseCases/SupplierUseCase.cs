using System.Collections.Generic;
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class SupplierUseCase : BaseUseCase, ISupplierUseCase
    {

        public SupplierUseCase(WearhouseContext _context) : base(_context)
        {        }

        public Supplier Create(SupplierCreateDto supplierCreateDto)
        {
            Supplier supplier = new Supplier();
            supplier.Name = supplierCreateDto.Name;

            ModelContext.Suppliers.Add(supplier);
            ModelContext.SaveChanges();

            return supplier;
        }
        public bool Delete(int id)
        {
            Supplier supplier = Get(id);

            ModelContext.Suppliers.Remove(supplier);
            ModelContext.SaveChanges();

            return true;
        }
        public Supplier Edit(SupplierEditDto supplierEditDto)
        {
            Supplier supplier = Get(supplierEditDto.Id);
            supplier.Name = supplierEditDto.Name;

            ModelContext.SaveChanges();

            return supplier;
        }

        public Supplier Get(int id)
        {
            Supplier supplier = ModelContext.Suppliers.Find(id);

            if (supplier == null)
            {
                throw new KeyNotFoundException();
            }

            return supplier;
        }
        public IQueryable<Supplier> GetAll()
        {
            return ModelContext.Suppliers;
        }

    }
}
