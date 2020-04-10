using System.ComponentModel.DataAnnotations;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class ProductCreateDto
    {
        public int AmountFactor { get; set; }
        [MaxLength(1000)]
        public string AmountUnit { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Name { get; set; }
        [Required]
        [MaxLength(10)]
        public string Number { get; set; }
        public int PurchasingPrice { get; set; }
        public int SellingPrice { get; set; }
        [Required]
        public int SupplierId { get; set; }
    }
}