function getAuthHeaders() {
  const { token } = JSON.parse(localStorage.getItem('access-info') || '{}');
  const headers = {
    Authorization: token,
  };
  return headers;
}

export { getAuthHeaders };
