const API_BASE_URL = process.env.API_BASE_URL;

const client = {
  get: (endpoint: string) => fetch(`${API_BASE_URL}${endpoint}`),

  post: (endpoint: string, data: any) =>
    fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
};

export default client;
