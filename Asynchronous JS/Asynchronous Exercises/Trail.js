function sayJoke(apiUrl, jokeId) {
  return fetch(apiUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (!data.jokes) {
        throw new Error("jokes is not defined");
      }

      const joke = data.jokes.find(j => j.id === jokeId);

      if (!joke) {
        throw new Error(`no jokes found id: ${jokeId}`);
      }

      return joke;
    })
}
sayJoke('http://no.jokes/here',132)