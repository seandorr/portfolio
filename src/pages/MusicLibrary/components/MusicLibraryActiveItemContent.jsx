/** @jsx jsx */
import { jsx, css } from "@emotion/react";
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
      css={css`
        border: 20px solid ${colors[color]};
      `}
    >
      <iframe
        title="spotify-playlist"
        src={`https://open.spotify.com/embed?uri=spotify:user:122367656:playlist:${playlistURL}`}
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
