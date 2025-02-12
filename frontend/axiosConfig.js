import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
axiosInstance.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    response => response, // successful responses.
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            console.log('401 :>> ', 401);
            originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                // Make a request to your auth server to refresh the token.
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:3000/user/getAccessToken',
                    headers: { 
                      'Authorization': `Bearer ${refreshToken}`
                    }
                  };
                const response = await axios.request(config)
                const { accessToken } = response.data;
                // Store the new access and refresh tokens.
                localStorage.setItem('accessToken', accessToken);
                // Update the authorization header with the new access token.
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                return axiosInstance(originalRequest); // Retry the original request with the new access token.
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error); // For all other errors, return the error as is.
    }
);

export default axiosInstance;

