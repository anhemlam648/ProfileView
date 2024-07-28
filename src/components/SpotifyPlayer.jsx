import { useState } from 'react';
import YouTube from 'react-youtube'; // Import react-youtube

const SpotifyPlayer = () => {
  // List Sing
  const [songs] = useState([
    {
      id: 1,
      title: 'Từ Ngày Em Đến',
      artist: 'Da LAB',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0QrzyiZ3TjBlW8LK0XZqauA9T-MYIB2reg&s',
      url: 'https://www.youtube.com/watch?v=AmvA-XJF0j8', 
    },
    {
      id: 2,
      title: 'Ngày Khác Lạ',
      artist: 'Đen Vâu',
      cover: 'https://i.ytimg.com/vi/U1M5GDNNhCo/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=U1M5GDNNhCo', 
    },
    {
      id: 3,
      title: 'Kém Duyên',
      artist: 'RUM X NIT X MASEW',
      cover: 'https://i.ytimg.com/vi/cvoyUIIAdrY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgXihTMA8=&rs=AOn4CLA6uDliYmtAxJ9zYggjtCdmGIkbHQ',
      url: 'https://www.youtube.com/watch?v=cvoyUIIAdrY', 
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
