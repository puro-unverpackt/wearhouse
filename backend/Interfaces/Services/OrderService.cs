using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.Entities;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderUseCase _orderUseCase;

        public OrderService(IOrderUseCase orderUseCase)
        {
            _orderUseCase = orderUseCase;
        }

        public OrderDto Create()
        {
            return new OrderDto(_orderUseCase.Create());
        }

        public bool Delete(int id)
        {
            return _orderUseCase.Delete(id);
        }

        public OrderDto Edit(OrderEditDto orderEditDto)
        {
            return new OrderDto(_orderUseCase.Edit(orderEditDto));
        }

        public OrderDto Get(int id)
        {
            return new OrderDto(_orderUseCase.Get(id));
        }

        public IEnumerable<OrderDto> GetAll()
        {
            IList<OrderDto> orderDtos = new List<OrderDto>();
            foreach (Order order in _orderUseCase.GetAll())
            {
                orderDtos.Add(new OrderDto(order));
            }
            return orderDtos;
        }
    }
}