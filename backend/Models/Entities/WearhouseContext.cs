using Microsoft.EntityFrameworkCore;

namespace webapp_backend_dotnet.Model.Entities
{
    public class WearhouseContext : DbContext
    {
        public WearhouseContext(DbContextOptions<WearhouseContext> options)
            : base(options)
        {

        }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
    }
}