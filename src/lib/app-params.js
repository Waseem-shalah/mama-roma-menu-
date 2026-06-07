/**
 * Clean Application Configuration
 * All Base44 proxy and URL scraping logic has been removed.
 */

const isNode = typeof window === 'undefined';

const getAppParams = () => {
    if (isNode) {
        return {
            appId: 'mamaroma-id',
            appBaseUrl: '',
            isLocal: true
        };
    }

    return {
        appId: "mamaroma-prod",
        appName: "MamaRoma",
        
        appBaseUrl: import.meta.env.VITE_API_URL || "http://localhost:5173",
        
        functionsVersion: "1.0.0",
        isLocal: window.location.hostname === 'localhost',
        language: 'en'
    };
};

export const appParams = {
    ...getAppParams()
};