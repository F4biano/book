module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: '5c8b003d-9c7a-4ba0-93cb-44758454767f'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://bookutfpr.vercel.app/api' // production api
    }
    
}
