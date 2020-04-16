using System.Collections.Generic;
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class ProductUseCase : BaseUseCase, IProductUseCase
    {

        public ProductUseCase(WearhouseContext _context) : base(_context) { }

        public Product Create(ProductCreateDto productCreateDto)
        {
            Product product = new Product();
            product.AmountFactor = productCreateDto.AmountFactor;
            product.Name = productCreateDto.Name;
            product.Number = productCreateDto.Number;
            product.PurchasingPrice = productCreateDto.PurchasingPrice;
            product.SellingPrice = productCreateDto.SellingPrice;
            product.Supplier = ModelContext.Suppliers.Find(productCreateDto.SupplierId);

            ModelContext.Products.Add(product);
            ModelContext.SaveChanges();

            return product;
        }
        public bool Delete(int id)
        {
            Product product = Get(id);

            ModelContext.Products.Remove(product);
            ModelContext.SaveChanges();

            return true;
        }
        public Product Edit(ProductEditDto productEditDto)
        {
            Product product = Get(productEditDto.Id);

            product.AmountFactor = productEditDto.AmountFactor;
            product.Name = productEditDto.Name;
            product.Number = productEditDto.Number;
            product.PurchasingPrice = productEditDto.PurchasingPrice;
            product.SellingPrice = productEditDto.SellingPrice;
            product.Supplier = ModelContext.Suppliers.Find(productEditDto.SupplierId);

            ModelContext.SaveChanges();

            return product;
        }

        public Product Get(int id)
        {
            Product product = ModelContext.Products.Find(id);

            if (product == null)
            {
                throw new KeyNotFoundException();
            }

            return product;
        }

        public IQueryable<Product> GetAll()
        {
            return ModelContext.Products;
        }
    }
}
