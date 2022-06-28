import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from 'utils/spotify';
import { z } from 'zod';

const nowPlayingSongValidator = z.object({
  isPlaying: z.boolean(),
  title: z.string().optional(),
  artist: z.string().optional(),
  album: z.string().optional(),
  albumImageUrl: z.string().optional(),
  songUrl: z.string().optional(),
});

export type NowPlayingSong = z.infer<typeof nowPlayingSongValidator>;

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

  return res.status(200).json(
    nowPlayingSongValidator.parse({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    })
  );
}

export default handler;
