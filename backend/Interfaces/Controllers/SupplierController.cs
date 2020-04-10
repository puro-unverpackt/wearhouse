using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp_backend_dotnet.Services;
using webapp_backend_dotnet.Model.Entities;
using webapp_backend_dotnet.Model.UseCases;
using webapp_backend_dotnet.Interfaces.Dtos;

namespace webapp_backend_dotnet.Controllers
{
    [Route("v0.1.0/suppliers")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {

        private readonly ISupplierService _supplierService;

        public SuppliersController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<SupplierDto>> GetSupplier()
        {
            return new ActionResult<IEnumerable<SupplierDto>>(_supplierService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<SupplierDto> GetSupplier(int id)
        {
            return new ActionResult<SupplierDto>(_supplierService.Get(id));
        }

        [HttpPut("{id}")]
        public ActionResult<SupplierDto> PutSupplier(int id, SupplierEditDto supplierEditDto)
        {
            return new ActionResult<SupplierDto>(_supplierService.Edit(supplierEditDto));
        }

        [HttpPost]
        public ActionResult<SupplierDto> PostSupplier(SupplierCreateDto supplierCreateDto)
        {
            return new ActionResult<SupplierDto>(_supplierService.Create(supplierCreateDto));
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteSupplier(int id)
        {
            return new ActionResult<bool>(_supplierService.Delete(id));
        }

    }
}
