import { useState } from 'react';
import useSWR from 'swr';
import MediaPlayer from './components/media-player';
import Playlist from './components/playlist';
import { simpleGetFetcher } from './service/fetchers';
import './styles.css';

const App = () => {
    const [sources, setSources] = useState([]);
    const { data, error } = useSWR(
        'https://mastapi.mobile.mlbinfra.com/api/video/v1/playlist?topic=clips',
        simpleGetFetcher,
    );

    if (error) {
        return <h1>{error.message}</h1>;
    }

    if (data) {
        const { items, featuredContent } = data;
        return (
            <>
                <h1>Featured Content URL</h1>
                <p>{featuredContent[0].url}</p>
                {sources.length > 0 ? <MediaPlayer sources={sources} /> : null}
                <h2>Playlists</h2>
                {items.map((item) => (
                    <Playlist key={item.title} playlist={item} setSources={setSources} />
                ))}
            </>
        );
    }

    return <h1>LOADING...</h1>;
};

export default App;
