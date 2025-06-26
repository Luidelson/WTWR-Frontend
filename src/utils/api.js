const baseUrl = "http://localhost:3001";

export function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) return res.json();
    return res.text().then((text) => {
      console.error("Non-JSON response:", text);
      return Promise.reject(`Error: ${res.status}`);
    });
  });
}
