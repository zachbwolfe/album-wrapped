const host = "http://localhost:3000/"

const fetchAllAlbums = async () =>
  await fetch(host).then(response => {
    console.log("fetching!");
    let resp = response.json();
    console.log(resp);
      return resp;
})

const upsertAlbum = async (albumName, artist) =>
  fetch(host + albumName + "/" + artist, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
    return response.json()
  })

const deleteAlbum = async (albumName, artist) =>
  fetch(host + albumName + "/" + artist, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
      return response.json()
})

const api = {
  fetchAllAlbums,
  upsertAlbum,
  deleteAlbum
};

export default api;
