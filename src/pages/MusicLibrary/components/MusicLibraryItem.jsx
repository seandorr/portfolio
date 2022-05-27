/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import MusicLibraryActiveItemContent from "./MusicLibraryActiveItemContent";
import useWindowSize from "../../../utils/customHooks/useWindowSize";
import colors from "../../../styles/_colors.scss";

const MusicLibraryItem = ({
  id,
  title,
  color,
  playlistURL,
  setActiveItem,
  isActivePlaylist,
  calcSizeOfNotActivePlaylists,
}) => {
  const handleOnClickItem = (id) => {
    setActiveItem(id);
  };

  const getWindowWidth = useWindowSize().width;
  const largeScreenSize = getWindowWidth >= 768;

  const largeScreenStyles = css`
    background-color: ${colors[color]};

    &.active-item {
      width: calc(100% - ${calcSizeOfNotActivePlaylists}px);
    }
  `;

  const smallScreenStyles = css`
    background-color: ${colors[color]};

    &.active-item {
      height: calc(100% - ${calcSizeOfNotActivePlaylists}px);
    }
  `;

  return (
    <div
      css={largeScreenSize ? largeScreenStyles : smallScreenStyles}
      className={`music-library__item ${isActivePlaylist ? "active-item" : ""}`}
      onClick={() => handleOnClickItem(id)}
    >
      <div className="music-library__item-title-wrapper">
        <h1 className="music-library__item-title">{title}</h1>
      </div>
      <div className={"music-library__selected-item-content"}>
        <MusicLibraryActiveItemContent
          playlistURL={playlistURL}
          color={color}
          isActivePlaylist={isActivePlaylist}
          largeScreenSize={largeScreenSize}
        />
      </div>
    </div>
  );
};

MusicLibraryItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
  playlistURL: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
  isActivePlaylist: PropTypes.bool,
  calcSizeOfNotActivePlaylists: PropTypes.number,
};

MusicLibraryItem.defaultProps = {
  id: undefined,
  title: undefined,
  color: undefined,
  playlistURL: undefined,
  isActivePlaylist: false,
  calcSizeOfNotActivePlaylists: undefined,
};

export default MusicLibraryItem;
