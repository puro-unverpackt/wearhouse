using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class SupplierDto
    {
        public int Id { get; }
        public string Name { get; }

        public SupplierDto(Supplier supplier)
        {
            Id = supplier.Id;
            Name = supplier.Name;
        }
    }
}