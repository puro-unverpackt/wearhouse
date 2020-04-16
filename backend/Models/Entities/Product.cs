using System.ComponentModel.DataAnnotations;

namespace webapp_backend_dotnet.Model.Entities
{
    public class Product : ProductBase
    {
        [Required]
        [MaxLength(10)]
        public string Number { get; set; }
        public int? SellingPrice { get; set; }

        [Required]
        public virtual Supplier Supplier { get; set; }
    }
}