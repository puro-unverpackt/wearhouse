using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp_backend_dotnet.Services;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Controllers
{
    [Route("v0.1.0/orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<OrderDto>> GetOrder()
        {
            return new ActionResult<IEnumerable<OrderDto>>(_orderService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<OrderDto> GetOrder(int id)
        {
            return new ActionResult<OrderDto>(_orderService.Get(id));
        }

        [HttpPut("{id}")]
        public ActionResult<OrderDto> PutOrder(int id, OrderEditDto orderEditDto)
        {
            return new ActionResult<OrderDto>(_orderService.Edit(orderEditDto));
        }

        [HttpPost]
        public ActionResult<OrderDto> PostOrder()
        {
            return new ActionResult<OrderDto>(_orderService.Create());
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteOrder(int id)
        {
            return new ActionResult<bool>(_orderService.Delete(id));
        }

    }
}
