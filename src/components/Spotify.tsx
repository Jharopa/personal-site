import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

import { NowPlayingSong } from 'pages/api/spotify';

const Spotify = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR<NowPlayingSong>('api/spotify', fetcher);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        data?.isPlaying || data?.songUrl
          ? data.songUrl
          : 'https://open.spotify.com/user/vcfxx95s46q7ekzmr56t4te6g'
      }
      className="w-58 relative flex h-24 w-64 items-center space-x-4 border border-black p-5 dark:border-white md:w-96"
    >
      <div className="hidden w-16 md:inline">
        {data?.isPlaying ? (
          <img className="w-16" src={data?.albumImageUrl} alt={data?.album} />
        ) : data?.songUrl ? (
          <img
            className="hidden w-16 grayscale md:inline"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <SiSpotify size={64} color={'#64748B'} className="hidden md:inline" />
        )}
      </div>

      <div className="flex-1">
        <p>
          {data?.isPlaying
            ? 'Playing'
            : data?.songUrl
            ? 'Recently Playing'
            : ''}
        </p>
        <p className="font-bold">
          {data?.isPlaying || data?.songUrl ? data.title : 'Not Listening'}
        </p>
        <p className="font-dark text-xs">
          {data?.isPlaying || data?.songUrl ? data.artists : 'Spotify'}
        </p>
      </div>

      <div className="absolute top-1.5 right-1.5">
        <SiSpotify size={20} color={'#1ED760'} />
      </div>
    </a>
  );
};

export default Spotify;
