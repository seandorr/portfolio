import React from "react";
import { useState } from "react";
import musicLibraryItems from "./utils/constants/musicLibraryItems";
import MusicLibraryItem from "./components/MusicLibraryItem";
import "./music-library.scss";

const MusicLibrary = () => {
  const numberOfItems = musicLibraryItems.length;
  const lastItem = musicLibraryItems[musicLibraryItems.length - 1];
  const [activeItem, setActiveItem] = useState(lastItem);

  return (
    <div className="music-library__main-container">
      {musicLibraryItems.map((item) => {
        const { id, title, value, color } = item;

        return (
          <MusicLibraryItem
            id={id}
            title={title}
            value={value}
            color={color}
            key={id}
            musicLibraryItems={musicLibraryItems}
            numberOfItems={numberOfItems}
            lastItem={lastItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        );
      })}
    </div>
  );
};

export default MusicLibrary;
