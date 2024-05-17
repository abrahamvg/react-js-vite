const baseUrl = "https://api.thedogapi.com/v1/images/"

export const animalList = (limit, page) => {
    return fetch(
      baseUrl + `search?limit=${limit}&page=${page}&has_breeds=1`,
      {
        method: "GET",
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      }
    )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; 
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
  };

export const animalData = (id) => {
  return fetch(baseUrl + id, {
    method: 'GET',
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data; 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  });
}; 
  