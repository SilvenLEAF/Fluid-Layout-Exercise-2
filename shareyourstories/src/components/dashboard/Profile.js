import React from 'react';
import './../../styles/Profile.css';

function Profile({ profile, auth }) {
  const profileInfo = profile.firstName ? (
    <>      
      <div id="my-water-color-profile-holder">
        <div id="my-water-color-profile">Profile</div>
      </div>
      <h4>Profile</h4>
      <div className = "my-profile-content">
        <span className= "my-profile-label">First Name: </span><span>{ profile.firstName }</span>
      </div>
      <div className = "my-profile-content">
        <span className= "my-profile-label">Last Name: </span><span>{ profile.lastName }</span>
      </div>
      <div className = "my-profile-content">
        <span className= "my-profile-label">Email: </span><span>{ auth.email }</span>
      </div>
    </>
  ) : null;


  return (
    <div className="container">
      <div className="my-profile-image right"></div>
      
      <div id="my-profile-info">
        { profileInfo }
      </div>
      
      <div id="extra-content">
        <p>
          <span className= "my-profile-hello">Hello there{ profile.firstName ? ' ' + profile.firstName : null }!</span> Welcome to our beautiful comunity!! Share your stories and create a beautiful book of memories! Every new day brings a new chapter of our lives! So let's write our own story! Every moment is a treasure! Every second is priceless!! Make your moments immortal here!!!
        </p>
        <p>
          Sadness, Gladness, Happiness, sorrow....are all the spices, of an unknown morrow....tales to tell, of Heaven and Hell, a sail to sail to my unseen tomorrow...What's your story today???
        </p>
      </div>
    </div>
  )
}

export default Profile
