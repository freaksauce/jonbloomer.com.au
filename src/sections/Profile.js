import React from 'react';
import { object } from 'prop-types';

const Profile = props => {
  const { profileData} = props
  return (
    <div>
      <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileData.picture} width="200" alt="profile pic" /></div>
      <h1 className="text-center">{profileData.name}</h1>
      <h2 className="text-center">{profileData.label}</h2>
      <div className="divider"></div>
      <ul className="contact-links text-center">
        <li><i className="fa fa-location-arrow"></i>{profileData.location.city}, {profileData.location.region}, {profileData.location.countryCode}</li>
        <li><i className="fa fa-envelope"></i><a href={`mailto:${profileData.email}`}>{profileData.email}</a></li>
      </ul>
      <div className="divider"></div>
      <ul className="profileLinks text-center">
        <li><a className="fa fa-twitter fa-2x" href={'https://twitter.com/'+profileData.profiles[0].username}></a></li>
        <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileData.profiles[1].username}></a></li>
      </ul>
      <div className="divider"></div>
      <p className="small-text">I built this site with <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The full source code can be found in <a href="https://github.com/freaksauce/React-Resume-ES6">my Github repo</a>.</p>
    </div>
  )
};

Profile.propTypes = {
  profileData: object.isRequired
}

export default Profile;
