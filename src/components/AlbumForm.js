import React from 'react'
import api from '../service/AlbumService'
import AlbumList from './AlbumList';

// import {Link} from "react-router-dom";

export default class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumName: '',
      artist: ''
    }
  }

  createEntry = () => {
    api.upsertAlbum(this.state.albumName, this.state.artist)
        .then(response => {
            console.log(response)
        })
    this.setState({
      artist: '',
      albumName: ''
    });
}

  render() {
    return (
      <div>
        <h1>You listen to a new album big dog?</h1>
        <div>
        <label>
              Album Name </label>
          <div>
              <input className="form-control"
                      id="albumName"
                      onChange={(event) => this.setState({
                                                            albumName: event.target.value
                                                        })}
                      value={this.state.albumName}
                      placeholder=""/>
          </div>
          </div>
          <div>
          <label>
              Artist </label>
          <div>
              <input className="form-control"
                      id="artist"
                      onChange={(event) => this.setState({
                                                            artist: event.target.value
                                                        })}
                      value={this.state.artist}
                      placeholder=""/>
          </div>
          </div>
          <div>
                        <button

                            onClick={() => {
                                if (this.state.artist  !== "" &&
                                    this.state.albumName !== "") {
                                    this.createEntry()
                                } else {
                                  console.log("you need to specify something idiot")
                                }
                            }}>
                            Add Album
                        </button>
                    </div>
        <AlbumList />
      </div>
    );
  }
}
