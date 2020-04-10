using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp_backend_dotnet.Services;
using webapp_backend_dotnet.Model.UseCases;
using webapp_backend_dotnet.Interfaces.Dtos;

namespace webapp_backend_dotnet.Controllers
{
    [Route("v0.1.0/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductDto>> GetProduct()
        {
            return new ActionResult<IEnumerable<ProductDto>>(_productService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<ProductDto> GetProduct(int id)
        {
            return new ActionResult<ProductDto>(_productService.Get(id));
        }

        [HttpPut("{id}")]
        public ActionResult<ProductDto> PutProduct(int id, ProductEditDto productEditDto)
        {
            return new ActionResult<ProductDto>(_productService.Edit(productEditDto));
        }

        [HttpPost]
        public ActionResult<ProductDto> PostProduct(ProductCreateDto productCreateDto)
        {
            return new ActionResult<ProductDto>(_productService.Create(productCreateDto));
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteProduct(int id)
        {
            return new ActionResult<bool>(_productService.Delete(id));
        }

    }
}
