import PropTypes from 'prop-types';
//import css from './Profile.module.css'

export const Profile = (props) => {
   // console.log(props);
    return (
        <div className="profile">
  <div className="description">
    <img
      src={props.avatar}
      alt={props.username}
      className="avatar"
    />
    <p className="name">{props.username}</p>
    <p className="tag">@{props.tag}</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{props.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{props.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{props.stats.likes}</span>
    </li>
  </ul>
</div>
    )
};

Profile.prototypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
} 