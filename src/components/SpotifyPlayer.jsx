import { useState } from 'react';
import YouTube from 'react-youtube'; // Import react-youtube

const SpotifyPlayer = () => {
  // List Sing
  const [songs] = useState([
    {
      id: 1,
      title: 'Lời Yêu Ngây Dại',
      artist: 'Kha',
      cover: 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/4/7/3/f/473fc5af2cf0acdf58623ce5ea4bfac0.jpg',
      url: 'https://www.youtube.com/watch?v=UBv-GcD3jHE', 
    },
    {
      id: 2,
      title: 'Si Me You',
      artist: 'Obito',
      cover: 'https://avatar-ex-swe.nixcdn.com/song/2022/10/12/e/f/6/5/1665525495879_640.jpg',
      url: 'https://www.youtube.com/watch?v=OJgQGJuihtA', 
    },
    {
      id: 3,
      title: 'Love Me More',
      artist: 'The Sheep Original',
      cover: 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/e/9/6/be96fcc52e5b5306a03778948d7916f5.jpg',
      url: 'https://www.youtube.com/watch?v=tB1PoyZtrzY', 
    },
  ]);

  //container
  const containerStyle = {
    padding: '1rem',
  };

  //list
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  //songItem
  const songItemStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    marginBottom: '0.75rem', 
    backgroundColor: '#f9f9f9',
    padding: '0.75rem',
    borderRadius: '0.5rem', 
    position: 'relative',
  };

  //images
  const imgStyle = {
    width: '4.5rem',
    height: '4.5rem', 
    borderRadius: '50%',
    marginBottom: '0.5rem', 
  };

  //songInfo
  const songInfoStyle = {
    textAlign: 'center',
    marginBottom: '0.5rem', 
  };

  //songtitle
  const songTitleStyle = {
    fontWeight: 'bold',
    color: '#888',
    fontSize: '1rem', 
  };

  //songArtist
  const songArtistStyle = {
    fontStyle: 'italic',
    color: '#888',
    fontSize: '0.875rem', 
  };

  //playContainer
  const playerContainerStyle = {
    width: '100%', 
    maxWidth: '16rem', 
    height: 'auto',
    maxHeight: '9rem',
    marginTop: '0.5rem', 
    marginBottom: '2rem',
    borderRadius: '0.5rem', 
    overflow: 'hidden', 
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '1.375rem' }}>Spotify Playing 🎧</h2> 
      <ul style={listStyle}>
        {songs.map((song) => (
          <li key={song.id} style={songItemStyle}>
            <img src={song.cover} alt="Song Cover" style={imgStyle} />
            <div style={songInfoStyle}>
              <p style={songTitleStyle}>{song.title}</p>
              <p style={songArtistStyle}>{song.artist}</p>
            </div>
            <div style={playerContainerStyle}>
              {song.url.includes('youtube.com') ? (
                <YouTube videoId={song.url.split('v=')[1]} opts={{ width: '100%', height: '100%' }} />
              ) : (
                <audio src={song.url} autoPlay controls style={{ width: '100%' }} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyPlayer;
