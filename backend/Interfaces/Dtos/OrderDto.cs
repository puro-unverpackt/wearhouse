using System;
using System.Collections.Generic;
using webapp_backend_dotnet.Model.Entities;

namespace webapp_backend_dotnet.Interfaces.Dtos
{
    public class OrderDto
    {
        public int Id { get; }
        public DateTime Date { get; }
        public OrderState OrderState { get; }
        public SupplierDto Supplier { get; }
        public IList<ProductSupplierDto> Products { get; }

        public OrderDto(Order order)
        {
            if (order != null)
            {
                Id = order.Id;
                Date = order.Date;
                OrderState = order.State;
                Supplier = new SupplierDto(order.Supplier);
                Products = new List<ProductSupplierDto>();
                foreach (ProductSupplier product in order.Products)
                {
                    Products.Add(new ProductSupplierDto(product));
                }
            }
        }
    }
}