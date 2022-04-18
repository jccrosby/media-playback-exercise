# MLB Playback Code Exercise
Using the endpoint described below, build an application to display the playlists and allow a user to playback each playlist’s media items by clicking on them. The focus of this exercise should be on the media player and media playback interactions. The player should minimally:
- Display playback progress
- Allow the user to play and pause the video
- Control mute & volume

_NOTE: Feel free to use UI/UX libraries to reduce effort_

## Playlist endpoint
Base URL: https://mastapi.mobile.mlbinfra.com/api/video/v1/playlist?topic=clips

### URL Params
- topic: {string} value of “clips”

### Response
- featuredContent: Content to be pulled to the “top” and displayed prominently
  - title: {string} to be displayed as the title if provided
  - url: {string} endpoint of content metadata to be used for display and playback
  - displayType: {string} “vod” (any other type should result in a message to the user about not being allowed to playback the content)
  - hideSpoilers: {boolean} if true hide data that could “spoil” the game
- items: Playlists of content items
  - type: {string} one of - game, vod, svod
  - displayType: {string} “vod” (any other type should result in a message to the user about not being able to view the content)
  - hideSpoilers: {boolean} true/false
  - url: {string} endpoint of media item list to be used for display and playback
  - title: {string} to be used as the title of the playlist
