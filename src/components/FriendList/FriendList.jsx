import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
   // console.log(friends);

    return (
      <ul className={css.friend__list}>
        
        {friends.map(({ id, avatar, name, isOnline }) => {
          
        return (
        <li className={css.item} key={id}>
                <span className={`${css.status} ${css[isOnline]}`}>
              {isOnline}
            </span>   
        <img className={css.avatar} src={avatar} alt={name} width="48"/>
          <p className={css.name}>{name}</p>              
        </li>)
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