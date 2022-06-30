import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { getNowPlaying } from 'utils/spotify';

const nowPlayingSongValidator = z.object({
  isPlaying: z.boolean(),
  title: z.string().optional(),
  artists: z.string().optional(),
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
  const artists = song.item.artists
    .map((artist: { name: string }) => artist.name)
    .join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json(
    nowPlayingSongValidator.parse({
      isPlaying,
      title,
      artists,
      album,
      albumImageUrl,
      songUrl,
    })
  );
}

export default handler;
