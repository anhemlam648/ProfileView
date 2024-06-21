import { useState } from 'react';
import YouTube from 'react-youtube'; // Import react-youtube
import './SpotifyPlayer.css';

const SpotifyPlayer = () => {
  // Danh sách các bài hát
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
  return (
    <div className="spotify-player">
      <h2 style={{ fontSize: '23px' }}>Spotify Playing 🎧</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} className="song-item">
            <img src={song.cover} alt="Song Cover" />
            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
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
