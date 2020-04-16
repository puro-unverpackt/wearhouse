
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapp_backend_dotnet.Model.Entities
{
    public class Order
    {
        public Order()
        {
            Products = new HashSet<ProductSupplier>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public OrderState State { get; set; }
        public virtual Supplier Supplier { get; set; }

        public virtual ICollection<ProductSupplier> Products { get; set; }
    }
}