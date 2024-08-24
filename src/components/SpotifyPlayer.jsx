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

  const containerStyle = {
    padding: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const songItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '8px',
  };

  const imgStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const songInfoStyle = {
    flex: 1,
  };

  const songTitleStyle = {
    fontWeight: 'bold',
    color: '#888',
  };

  const songArtistStyle = {
    fontStyle: 'italic',
    color: '#888',
  };
  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '23px' }}>Spotify Playing 🎧</h2>
      <ul style={listStyle}>
        {songs.map((song) => (
          <li key={song.id} style={songItemStyle}>
            <img src={song.cover} alt="Song Cover" style={imgStyle} />
            <div style={songInfoStyle}>
              <p style={songTitleStyle}>{song.title}</p>
              <p style={songArtistStyle}>{song.artist}</p>
            </div>
            {song.url.includes('youtube.com') && (
              <YouTube videoId={song.url.split('v=')[1]} opts={{ width: '100%', height: '100%' }} />
            )}
            {!song.url.includes('youtube.com') && (
              <audio src={song.url} autoPlay controls />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyPlayer;
