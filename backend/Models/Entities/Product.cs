
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapp_backend_dotnet.Model.Entities
{
    public class Product
    {
        public int? AmountFactor { get; set; }
        [MaxLength(1000)]
        public string AmountUnit { get; set; }
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(1000)]
        public string Name { get; set; }
        [Required]
        [MaxLength(10)]
        public string Number { get; set; }
        public int? PurchasingPrice { get; set; }
        public int? SellingPrice { get; set; }



        [Required]
        public virtual Supplier Supplier { get; set; }
    }
}