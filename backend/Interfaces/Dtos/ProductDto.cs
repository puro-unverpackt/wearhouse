using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class ProductDto
    {
        public int AmountFactor { get; }
        public string AmountUnit { get; }
        public int Id { get;  }
        public string Name { get;  }
        public string Number { get; }
        public int PurchasingPrice { get; }
        public int SellingPrice { get; }
        public SupplierDto Supplier { get;  }

        public ProductDto(Product product){
            AmountFactor = product.AmountFactor;
            AmountUnit = product.AmountUnit;
            Id = product.Id;
            Name = product.Name;
            Number = product.Number;
            PurchasingPrice = product.PurchasingPrice;
            SellingPrice = product.SellingPrice;
            Supplier = new SupplierDto(product.Supplier);
        }
    }
}