import React, { useState, useEffect } from 'react'
import AlbumList from './AlbumList';
import api from '../service/AlbumService'

const AlbumForm = () => {

  const [state, setState] = useState({
    albumName: '',
    artist: '',
    albums: [],
    error: null
  });

  const getAlbums = () => {
    api.fetchAllAlbums()
    .then(data => {
      const sorted = data.sort(function(a, b) {
        return b.timestamp - a.timestamp;
    });
      setState({
        ...state,
        artist: '',
        albumName: '',
        albums: sorted
      });
    })
    .catch(error => {
      console.log(error);
      setState({ error: 'Error fetching data' });
    });
  }

  const createEntry = async () => {
    await api.upsertAlbum(state.albumName, state.artist)
        .then(response => {
            console.log(response)
            getAlbums();
            console.log(state);
        })
  }

  const deleteEntry = async (albumName, artist, timestamp) => {
    await api.deleteAlbum(albumName, artist, timestamp)
        .then(response => {
            console.log(response)
            getAlbums();
            console.log(state);
        })
  }

  useEffect(() => {
    getAlbums();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>You listen to a new album big dog?</h1>
      <div>
      <label>
            Album Name </label>
        <div>
            <input className="form-control"
              id="albumName"
              onChange={(event) => setState({
                ...state,
                albumName: event.target.value
              })}
              value={state.albumName}
              placeholder=""/>
        </div>
        </div>
        <div>
        <label>
            Artist </label>
        <div>
            <input className="form-control"
              id="artist"
                onChange={(event) => setState({
                  ...state,
                  artist: event.target.value
                })}
                value={state.artist}
          placeholder=""/>
        </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (state.artist  !== "" &&
                  state.albumName !== "") {
                  createEntry()
              } else {
                console.log("you need to specify something idiot")
              }
              }}>
              Add Album
          </button>
      </div>
      <AlbumList albums={state.albums} deleteFunc={deleteEntry} />
    </div>
  );
}

export default AlbumForm;
