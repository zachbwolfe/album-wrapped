// const host = "http://localhost:3000/"
const host = "https://album-wrapped-be6fafcd14e6.herokuapp.com/"

const fetchAllAlbums = async () =>
  await fetch(host).then(response => {
    console.log("fetching!");
    let resp = response.json();
    console.log(resp);
      return resp;
})

const upsertAlbum = async (albumName, artist) =>
  fetch(host + "upsert", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        artist: artist,
        albumName: albumName
      })
  }).then(response => {
    return response.json()
  })

const deleteAlbum = async (albumName, artist, timestamp) =>
  fetch(host + "delete", {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        artist: artist,
        albumName: albumName,
        timestamp: timestamp
      })
  }).then(response => {
      return response.json()
})

const api = {
  fetchAllAlbums,
  upsertAlbum,
  deleteAlbum
};

export default api;
