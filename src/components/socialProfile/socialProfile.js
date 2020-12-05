import React from "react";
import PropTypes from "prop-types";

import SocialProfileStyles from "./socialProfileStyles.js";
const {
  Article,
  Description,
  Avatar,
  Name,
  P,
  Stats,
  Li,
  Label,
  Count,
} = SocialProfileStyles;

function SocialProfile({ avatar, name, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <Article>
      <Description>
        <Avatar src={avatar} alt={name} />
        <Name>{name}</Name>
        <P>{tag}</P>
        <P>{location}</P>
      </Description>

      <Stats>
        <Li>
          <Label>Followers</Label>
          <Count>{followers}</Count>
        </Li>
        <Li>
          <Label>Views</Label>
          <Count>{views}</Count>
        </Li>
        <Li>
          <Label>Likes</Label>
          <Count>{likes}</Count>
        </Li>
      </Stats>
    </Article>
  );
}

SocialProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  
};

export default SocialProfile;
