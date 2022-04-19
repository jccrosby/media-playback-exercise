import useSWR from 'swr';
import { simpleGetFetcher } from '../service/fetchers';

const Playlist = ({ playlist, setSources }) => {
    const { data, error } = useSWR(playlist.url, simpleGetFetcher);
    return (
        <>
            <h2>{playlist.title}</h2>
            {!!data?.items
                ? data.items.map((item) => {
                      return (
                          <div key={item.slug}>
                              <h3 style={{ display: 'inline' }}>{item.title}</h3>
                              <button
                                  onClick={() => {
                                      console.log('PLAY', `${item.title}`);
                                      item.fields.playbackScenarios.forEach((scenario) =>
                                          console.log(scenario),
                                      );
                                      setSources(item.fields.playbackScenarios);
                                  }}
                              >
                                  PLAY
                              </button>
                          </div>
                      );
                  })
                : null}
        </>
    );
};
export default Playlist;
