import { useEffect, useRef } from 'react';

const MediaPlayer = ({ sources }) => {
    const videoRef = useRef();
    const filteredSources = sources.filter((source) => {
        const acceptedPlaybacks = ['mp4Avc', 'hlsCloud', 'highBit'];
        return acceptedPlaybacks.includes(source.playback);
    });
    const sortedSources = filteredSources.sort((source) =>
        source.playback === 'hlsCloud' ? -1 : 0,
    );
    const getType = (source) => {
        if (source.playback === 'hlsCloud') {
            return 'application/x-mpegURL';
        }
        if (['highBit', 'mp4Avc'].includes(source.playback)) {
            return 'video/mp4';
        }
    };
    useEffect(() => {
        videoRef.current?.load();
    }, [sources]);
    return (
        <video
            ref={videoRef}
            autoPlay={true}
            muted={true}
            controls={true}
            style={{ width: '320px', height: '180px' }}
        >
            {sortedSources.map((source, index) => {
                const { location } = source;
                const type = getType(source);
                return <source key={`source-${index}`} src={location} type={type} />;
            })}
        </video>
    );
};

export default MediaPlayer;
