import React from 'react';

function ProfilePic() {
  return (
    <div>
      <img
        src={ ProfilePicture }
        alt="imagem de perfil"
        data-testid="profile-top-btn"
      />
    </div>
  );
}

export default ProfilePic;
