const env = process.env;

export default {
    port: env.port || 8080,
    hostname: env.HOSTNAME || '0.0.0.0'
};