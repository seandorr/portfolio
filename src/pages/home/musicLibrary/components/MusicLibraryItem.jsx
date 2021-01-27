/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
import colors from "../../../../styles/_colors.scss";
import MusicLibraryActiveItemContent from "./MusicLibraryActiveItemContent";

const MusicLibraryItem = (props) => {
  const {
    title,
    value,
    color,
    musicLibraryItems,
    numberOfItems,
    activeItem,
    setActiveItem,
  } = props;

  const handleOnClickItem = (value) => {
    setActiveItem((prevactiveMenuItem) => {
      return prevactiveMenuItem !== value ? value : value;
    });
  };

  return (
    <div
      css={css`
        background-color: ${colors[color]};

        &.active-item {
          width: calc(100% - ${80 * (numberOfItems - 1)}px);
        }
      `}
      className={`music-library__item ${
        activeItem && musicLibraryItems[activeItem].value === value
          ? "active-item"
          : ""
      }`}
      onClick={() => handleOnClickItem(value)}
    >
      <div className="music-library__item-title-wrapper">
        <h1 className="music-library__item-title">{title}</h1>
      </div>
      <div className={`music-library__selected-item-content ${activeItem}`}>
        <MusicLibraryActiveItemContent
          musicLibraryItems={musicLibraryItems}
          activeItem={activeItem}
          value={value}
          color={color}
        />
      </div>
    </div>
  );
};

MusicLibraryItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  activeItem: PropTypes.string,
};

MusicLibraryItem.defaultProps = {
  id: null,
  title: undefined,
  activeItem: undefined,
};

export default MusicLibraryItem;
