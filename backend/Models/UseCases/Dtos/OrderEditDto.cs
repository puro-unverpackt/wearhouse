using System.Collections.Generic;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class OrderEditDto
    {
        public int Id { get; set; }
        public IList<ProductSupplier> Products { get; set; }
        public Supplier Supplier { get; set; }
    }
}