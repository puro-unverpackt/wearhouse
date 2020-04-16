using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class ProductSupplierDto : ProductBaseDto
    {
        public int? Quantity { get; }
        public ProductSupplierDto(ProductSupplier product) : base(product)
        {
            if (product != null)
            {
                Quantity = product.Quantity;
            }
        }
    }
}