
using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.Entities;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductUseCase _productUseCase;

        public ProductService(IProductUseCase productUseCase)
        {
            _productUseCase = productUseCase;
        }

        public ProductDto Create(ProductCreateDto productCreateDto)
        {
            return new ProductDto(_productUseCase.Create(productCreateDto));
        }

        public bool Delete(int id)
        {
            return _productUseCase.Delete(id);
        }

        public ProductDto Edit(ProductEditDto productEditDto)
        {
            return new ProductDto(_productUseCase.Edit(productEditDto));
        }

        public ProductDto Get(int id)
        {
            return new ProductDto(_productUseCase.Get(id));
        }

        public IEnumerable<ProductDto> GetAll()
        {
            IList<ProductDto> productDtos = new List<ProductDto>();
            foreach (Product product in _productUseCase.GetAll())
            {
                productDtos.Add(new ProductDto(product));
            }
            return productDtos;
        }
    }
}