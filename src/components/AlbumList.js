import React from 'react'

const AlbumList = ({ albums }) => {

    return (
    <div>
      <h1>Albums listened to this year!</h1>
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

export default AlbumList;
