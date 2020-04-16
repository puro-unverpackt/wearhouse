using System;
using System.Collections.Generic;
using System.Linq;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Model.UseCases
{
    public class OrderUseCase : BaseUseCase, IOrderUseCase
    {
        public OrderUseCase(WearhouseContext _context) : base(_context) { }
        public Order Create()
        {
            Order order = new Order();

            order.Date = DateTime.Now;
            order.State = OrderState.New;

            ModelContext.Orders.Add(order);
            ModelContext.SaveChanges();

            return order;
        }

        public bool Delete(int id)
        {
            Order order = Get(id);

            // todo
            if (order.State != OrderState.New)
            {
                return false;
            }

            ModelContext.Orders.Remove(order);
            ModelContext.SaveChanges();

            return true;
        }

        public Order Edit(OrderEditDto orderEditDto)
        {
            Order order = Get(orderEditDto.Id);
            if (order.State != OrderState.New)
            {
                throw new NotSupportedException();
            }



            if (orderEditDto.Supplier != null)
            {
                if (order.Supplier == null && orderEditDto.Supplier != null)
                {
                    order.Supplier = ModelContext.Suppliers.Find(orderEditDto.Supplier.Id);
                    AddProductsFromSupplier(order);
                }
                else
                {
                    order.Products = orderEditDto.Products;
                }
            }

            ModelContext.SaveChanges();

            return order;
        }

        public Order Get(int id)
        {
            Order order = ModelContext.Orders.Find(id);

            if (order == null)
            {
                throw new KeyNotFoundException();
            }

            return order;
        }

        public IQueryable<Order> GetAll()
        {
            return ModelContext.Orders;
        }

        private void AddProductsFromSupplier(Order order)
        {

            if (order.Supplier != null)
            {
                IList<Product> productsToAdd = order.Supplier.Products.Where(p => !order.Products.Any(ps => ps.Name.Equals(p.Name))).ToList();

                foreach (Product product in productsToAdd)
                {
                    order.Products.Add(
                       new ProductSupplier()
                       {
                           AmountFactor = product.AmountFactor,
                           Name = product.Name,
                           PurchasingPrice = product.PurchasingPrice,
                       });
                }
            }

            ModelContext.SaveChanges();
        }
    }
}