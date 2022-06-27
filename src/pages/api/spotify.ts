import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from 'utils/spotify';

export interface NowPlayingSong {
  isPlaying: boolean;
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  songUrl?: string;
  title?: string;
}

async function handler(
  _: NextApiRequest,
  res: NextApiResponse<NowPlayingSong>
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}

export default handler;
