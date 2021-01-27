import React from "react";
import { useState } from "react";
import musicLibraryItems from "./utils/constants/musicLibraryItems";
import MusicLibraryItem from "./components/MusicLibraryItem";
import "./music-library.scss";

const MusicLibrary = () => {
  const arraymusicLibraryItems = Object.keys(musicLibraryItems);
  const numberOfItems = arraymusicLibraryItems.length;
  const lastItem = arraymusicLibraryItems[arraymusicLibraryItems.length - 1];
  const [activeItem, setActiveItem] = useState(lastItem);

  return (
    <div className="music-library__main-container">
      {Object.values(musicLibraryItems).map((item) => {
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
