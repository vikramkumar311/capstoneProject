// utils/tokenService.js
export const tokenService = {
  setTokens: (accessToken, refreshToken, rememberMe) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("accessToken", accessToken);
    storage.setItem("refreshToken", refreshToken);
  },
  getAccessToken: () => {
    return localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");
  },
  clearTokens: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  }
};

export default tokenService;