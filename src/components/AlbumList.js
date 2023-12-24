import React from 'react'

const AlbumList = ({ albums, deleteFunc }) => {

    return (
    <div>
      <h1>Albums listened to this year!</h1>
      <ul>
        {
          albums.map(
            item => (
              <li key={item.id}>artist: {item.artist}, album: {item.albumName}
              <button onClick={() => deleteFunc(item.albumName, item.artist)}>x</button></li>
            )
          )
        }
      </ul>
    </div>
  );
};

export default AlbumList;
