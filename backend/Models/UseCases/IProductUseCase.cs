
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public interface IProductUseCase
    {
        Product Create(ProductCreateDto productCreateDto);
        bool Delete(int id);
        Product Edit(ProductEditDto productEditDto);
        Product Get(int id);
        IQueryable<Product> GetAll();
    }
}