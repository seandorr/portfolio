/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import colors from "../../../styles/_colors.scss";

const MusicLibraryActiveItemContent = ({
  color,
  playlistURL,
  isActivePlaylist,
  largeScreenSize,
}) => {
  return isActivePlaylist ? (
    <div
      className="spotify-playlist"
      css={
        largeScreenSize
          ? css`
              border: 20px solid ${colors[color]};
            `
          : ``
      }
    >
      <iframe
        title="apple-music-playlist"
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height={largeScreenSize ? "380" : "150"}
        style={{
          width: "300px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/es/playlist/${playlistURL}?l=en`}
      />
    </div>
  ) : null;
};

MusicLibraryActiveItemContent.propTypes = {
  color: PropTypes.string,
  playlistURL: PropTypes.string,
  isActivePlaylist: PropTypes.bool,
  largeScreenSize: PropTypes.bool,
};

MusicLibraryActiveItemContent.defaultProps = {
  color: undefined,
  playlistURL: undefined,
  isActivePlaylist: false,
  largeScreenSize: true,
};

export default MusicLibraryActiveItemContent;
