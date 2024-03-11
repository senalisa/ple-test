document.getElementById('searchButton').addEventListener('click', function() {
  const url = "http://localhost:3001";
  const data = { imageUrl: "https://fastly.picsum.photos/id/513/200/300.jpg?hmac=KcBD-M89_o9rkxWW6PS2yEfAMCfd3TH9McppOsf3GZ0" };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Could not perform reverse image search.");
      }
    })
    .then((responseData) => {
      console.log(responseData);
      // Display the response data or perform further actions as needed
    })
    .catch((error) => console.error(error));
});
