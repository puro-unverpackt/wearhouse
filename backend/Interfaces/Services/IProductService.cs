
using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public interface IProductService
    {
        ProductDto Create(ProductCreateDto productCreateDto);
        bool Delete(int id);
        ProductDto Edit(ProductEditDto productEditDto);
        ProductDto Get(int id);
        IEnumerable<ProductDto> GetAll();
    }
}