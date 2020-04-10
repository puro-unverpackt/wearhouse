using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace webapp_backend_dotnet {
    public class Program {
        public static void Main(string[] args) {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => {
                webBuilder
                    .UseKestrel()
                    .UseUrls("http://localhost:31800", "http://31.7.97.115:31800")
                    .UseStartup<Startup>();
            });
    }
}