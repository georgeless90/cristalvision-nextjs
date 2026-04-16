const api = {
    apiPort: process.env.NEXT_PUBLIC_API_PORT || 3001,
    apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN || `http://backend:`,
    apiUrl: process.env.NEXT_PUBLIC_API_URL || `/api`
}

export default {
    api
}