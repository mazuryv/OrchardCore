using StackExchange.Redis;

namespace OrchardCore.Redis
{
    public class RedisOptions
    {
        /// <summary>
        /// The configuration used to connect to Redis.
        /// </summary>
        public ConfigurationOptions ConfigurationOptions => ConfigurationOptions.Parse(Configuration);
        /// <summary>
        /// Original configuration string used to connect to Redis
        /// </summary>
        public string Configuration { get; set; }
        /// <summary>
        /// Prefix alowing a Redis instance to be shared.
        /// </summary>
        public string InstancePrefix { get; set; }
    }
}
