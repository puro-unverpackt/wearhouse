using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using webapp_backend_dotnet.Model.Entities;
using webapp_backend_dotnet.Model.UseCases;
using webapp_backend_dotnet.Services;

namespace webapp_backend_dotnet {
    public class Startup {
        private readonly string _allowedSpecificOrigins = "_allowedSpecificOrigins";

        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddCors(options => {
                options.AddPolicy(_allowedSpecificOrigins,
                    builder => {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });

            //////////////
            // UseCases //
            //////////////
            services.AddScoped<IProductUseCase, ProductUseCase>();
            services.AddScoped<ISupplierUseCase, SupplierUseCase>();

            //////////////
            // Services //
            //////////////
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<ISupplierService, SupplierService>();

            ///////////////
            // DbContext //
            ///////////////
            services.AddDbContext<WearhouseContext>(optionsBuilder => optionsBuilder
                .UseLazyLoadingProxies()
                .UseInMemoryDatabase("api-in-memory")
            );

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors(_allowedSpecificOrigins);

            // app.UseHttpsRedirection();

            app.UseRouting();

            // app.UseAuthorization();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
        }
    }
}