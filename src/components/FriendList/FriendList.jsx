import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendListItem = ({ id, avatar, name, isOnline }) => {        
        return (
        <li className={css.item}>
                <span className={`${css.status} ${css[isOnline]}`}>
              {isOnline}
            </span>   
        <img className={css.avatar} src={avatar} alt={name} width="48"/>
          <p className={css.name}>{name}</p>              
        </li>)
 }

export const FriendList =({ friends }) => {
    return (
      <ul className={css.friend__list}>

        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
          <FriendListItem 
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline} />
          )
       })} 
</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    })).isRequired,  
}

