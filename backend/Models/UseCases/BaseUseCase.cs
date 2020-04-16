
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class BaseUseCase
    {
        protected WearhouseContext ModelContext { get; private set; }

        public BaseUseCase(WearhouseContext _context)
        {
            ModelContext = _context;

            if (ModelContext.Suppliers.Any())
            {
                return;   // Data was already seeded
            }

            // Suppliers
            Supplier supplier01 = new Supplier() { Name = "Uni Sapon" };
            Supplier supplier02 = new Supplier() { Name = "Test 2" };

            // Products
            Product product001 = new Product() { Name = "Erdnüsse", Number = "001", Supplier = supplier01, AmountFactor = 2, PurchasingPrice = 2500, SellingPrice = 3000 };
            Product product002 = new Product() { Name = "Mandeln", Number = "002", Supplier = supplier01 };
            Product product100 = new Product() { Name = "Ingwersaft", Number = "100", Supplier = supplier02 };
            Product product101 = new Product() { Name = "Ingwer-Mango Saft", Number = "101", Supplier = supplier02 };

            ModelContext.Suppliers.AddRange(supplier01, supplier02);
            ModelContext.Products.AddRange(product001, product002, product100, product101);

            ModelContext.SaveChanges();
        }

    }
}