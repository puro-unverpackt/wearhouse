using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class ProductDto : ProductBaseDto
    {
        public string Number { get; }
        public int? SellingPrice { get; }
        public SupplierDto Supplier { get; }

        public ProductDto(Product product) : base(product)
        {
            if (product != null)
            {
                Number = product.Number;
                SellingPrice = product.SellingPrice;
                Supplier = new SupplierDto(product.Supplier);
            }
        }
    }
}