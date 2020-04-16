
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public interface IOrderUseCase
    {
        Order Create();
        bool Delete(int id);
        Order Edit(OrderEditDto orderEditDto);
        Order Get(int id);
        IQueryable<Order> GetAll();
    }
}