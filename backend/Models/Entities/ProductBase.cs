using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapp_backend_dotnet.Model.Entities
{
    public abstract class ProductBase
    {
        public int? AmountFactor { get; set; }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Name { get; set; }
        public int? PurchasingPrice { get; set; }
    }
}