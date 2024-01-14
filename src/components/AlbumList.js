import React from 'react'

const AlbumList = ({ albums, createFunc, deleteFunc }) => {

    return (
    <div>
      <h1>Albums listened to this year!</h1>
      <ol reversed>
        {
          albums.map(
            item => (
              <li key={item.id}>
                <button onClick={() => createFunc(item.albumName, item.artist)}>+</button>
                &nbsp;&nbsp;artist: {item.artist}, album: {item.albumName}&nbsp;&nbsp;
                <button onClick={() => deleteFunc(item.albumName, item.artist, item.timestamp)}>x</button>
              </li>
            )
          )
        }
      </ol>
    </div>
  );
};

export default AlbumList;
