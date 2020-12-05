import React from 'react';
import PropTypes from 'prop-types';
import friendListStyles from './friendsListStyles';

const { ListUl, ListItem, ListSpan, ListPhoto, ListP } = friendListStyles;

function FriendList ({ friends }){
  return (
        <ListUl>
          {friends.map(({ id, isOnline, avatar, name }) => (
            <ListItem key={id}>
              <ListSpan data-name="status" inStock={isOnline} />
              <ListPhoto data-avatar="avatar" src={avatar} alt={name} width="48" />
              <ListP data-name="name">{name}</ListP>
            </ListItem>
          ))}
        </ListUl>
      );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  export default FriendList;