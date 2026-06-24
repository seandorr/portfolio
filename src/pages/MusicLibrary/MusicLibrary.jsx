import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useTranslation from "../../utils/customHooks/useTranslation";
import musicLibraryItems from "./utils/constants/musicLibraryItems";
import MusicLibraryItem from "./components/MusicLibraryItem";
import "./music-library.scss";

export const MusicLibrary = () => {
  const { translation } = useTranslation();
  const numberOfItems = musicLibraryItems.length;
  const lastItem = musicLibraryItems[musicLibraryItems.length - 1];
  const [activeItemId, setActiveItemId] = useState(lastItem.id);
  const calcSizeOfNotActivePlaylists = 80 * (numberOfItems - 1);

  return (
    <div>
      <Helmet>
        <title>Sean Dorr | {translation("metaTitles.musicLibrary")}</title>
      </Helmet>
      <div className="music-library__main-container">
        {musicLibraryItems.map((item) => {
          const { id, title, color, playlistURL } = item;

          const isActivePlaylist = id === activeItemId;

          return (
            <MusicLibraryItem
              id={id}
              title={title}
              color={color}
              playlistURL={playlistURL}
              key={id}
              isActivePlaylist={isActivePlaylist}
              setActiveItem={setActiveItemId}
              numberOfItems={numberOfItems}
              calcSizeOfNotActivePlaylists={calcSizeOfNotActivePlaylists}
            />
          );
        })}
      </div>
    </div>
  );
};
