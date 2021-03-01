/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
import colors from "../../../../styles/_colors.scss";

const MusicLibraryActiveItemContent = ({
  musicLibraryItems,
  activeItem,
  value,
  color,
  largeScreenSize,
}) => {
  return musicLibraryItems[activeItem].value === value ? (
    <div
      className="spotify-playlist"
      css={css`
        border: 20px solid ${colors[color]};
      `}
    >
      <iframe
        title="spotify-playlist"
        src={`https://open.spotify.com/embed?uri=spotify:user:122367656:playlist:${musicLibraryItems[activeItem].playlistURL}`}
        width="300"
        height={largeScreenSize ? "380" : "80"}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  ) : null;
};

MusicLibraryActiveItemContent.propTypes = {
  musicLibraryItems: PropTypes.objectOf(Object).isRequired,
  activeItem: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
};

MusicLibraryActiveItemContent.defaultProps = {
  activeItem: undefined,
  value: undefined,
  color: undefined,
};

export default MusicLibraryActiveItemContent;
