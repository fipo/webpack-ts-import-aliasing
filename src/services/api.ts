export const request = async (endpoint: string, method: string, body: object = undefined) => {
  const headers = { Accept: 'application/json' };

  const response = await fetch(`http://localhost:3100${endpoint}`, { // TODO change w/ .env
    headers,
    method,
    body: body instanceof FormData ? body : JSON.stringify(body), // tslint:disable-line
  });

  if (!response.ok) {
    return response.json().then((res) => {
      throw new Error(res.message);
    });
  }

  return response.json();
};

export const getCompaniesList = async () => request('/public/companies', 'GET');
