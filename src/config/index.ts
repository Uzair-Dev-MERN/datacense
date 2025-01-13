export const config = {
  backendUrl:
    import.meta.env.VITE_ENVIRONMENT !== "production"
      ? import.meta.env.VITE_BACKEND_URL_DEV
      : import.meta.env.VITE_BACKEND_URL,
};
