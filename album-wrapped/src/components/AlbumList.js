import React from 'react'
import api from '../service/AlbumService'

// import {Link} from "react-router-dom";

export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      error: null,
    };
  }

  componentDidMount() {
    // Fetch the data when the component mounts
    api.fetchAllAlbums()
      .then(data => {
        this.setState({ albums: data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: 'Error fetching data' });
      });
  }

  render() {
    const { albums, error } = this.state;

    return (
    <div>
      <h1>Albums listened to this year!</h1>
      {error && <p>{error}</p>}
      <ul>
        {
          albums.map(
            item => (
              <li key={item.id}>artist: {item.artist}, album: {item.albumName}</li>
            )
          )
        }
      </ul>
    </div>
  );
        };
}
