const MediaPlayer = ({ sources }) => {
  const filteredSources = sources.filter((source) => {
    const acceptedPlaybacks = ["mp4Avc", "hlsCloud", "highBit"];
    return acceptedPlaybacks.includes(source.playback);
  });
  const getType = (source) => {
    if (source.playback === "hlsCloud") {
      return "application/x-mpegURL";
    }
    if (["highBit", "mp4Avc"].includes(source.playback)) {
      return "video/mp4";
    }
  };
  return (
    <video autoPlay={true} muted={true} controls={true}>
      {filteredSources.map((source) => (
        <source src={source.location} type={getType(source)} />
      ))}
    </video>
  );
};

export default MediaPlayer;
