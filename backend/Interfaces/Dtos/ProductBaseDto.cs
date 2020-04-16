using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class ProductBaseDto
    {
        public int? AmountFactor { get; }
        public int Id { get; }
        public string Name { get; }
        public int? PurchasingPrice { get; }

        public ProductBaseDto(ProductBase productBase)
        {
            if (productBase != null)
            {
                AmountFactor = productBase.AmountFactor;
                Id = productBase.Id;
                Name = productBase.Name;
                PurchasingPrice = productBase.PurchasingPrice;
            }
        }
    }
}