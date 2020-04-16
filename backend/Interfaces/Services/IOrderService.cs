using System.Collections.Generic;
using webapp_backend_dotnet.Interfaces.Dtos;
using webapp_backend_dotnet.Model.UseCases;

namespace webapp_backend_dotnet.Services
{
    public interface IOrderService
    {
        OrderDto Create();
        bool Delete(int id);
        OrderDto Edit(OrderEditDto orderEditDto);
        OrderDto Get(int id);
        IEnumerable<OrderDto> GetAll();
    }
}