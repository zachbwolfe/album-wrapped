const host = "http://localhost:3000/"

const fetchAllAlbums = () =>
  fetch(host).then(response => {
    console.log("fetching!");
    let resp = response.json();
    console.log(resp);
    // console.log(resp.length())
      return resp;
})

const upsertAlbum = (albumName, artist) =>
  fetch(host + albumName + "/" + artist, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
    return response.json()
  })

const deleteAlbum = (albumName, artist) =>
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
