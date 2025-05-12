import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <img src={require('@images/profile.jpg')} alt="" />
      <div className="profile__text">
        <div className="profile__name">Chaewon Hwang</div>
        <div className="profile__job">@web publisher</div>
      </div>
    </div>
  );
};

export default Profile;
