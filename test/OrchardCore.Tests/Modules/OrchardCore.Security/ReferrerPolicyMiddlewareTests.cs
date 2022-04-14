using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using OrchardCore.Security.Middlewares;
using Xunit;

namespace OrchardCore.Security.Tests
{
    public class ReferrerPolicyMiddlewareTests
    {
        [Fact]
        public async Task AddReferrerPolicyHeader()
        {
            // Arrange
            var middleware = new ReferrerPolicyMiddleware(ReferrerPolicy.SameOrigin, request);
            var context = new DefaultHttpContext();

            // Act
            await middleware.Invoke(context);

            // Assert
            Assert.True(context.Response.Headers.ContainsKey(SecurityHeader.ReferrerPolicy));
            Assert.Equal(ReferrerPolicy.SameOrigin, context.Response.Headers[SecurityHeader.ReferrerPolicy]);

            static Task request(HttpContext context) => Task.CompletedTask;
        }
    }
}
