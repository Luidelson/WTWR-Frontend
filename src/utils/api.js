const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      return Promise.reject(err);
    });
}

export function addItem(item) {
  return fetch("http://localhost:3001/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  });
}

export function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  });
}

export { getItems };
