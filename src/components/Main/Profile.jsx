import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('/')
  }

  return (
    <div className="profile-page">
      <h1>PROFILE</h1>
      <button onClick={handleButton}>Back to Home!</button>
    </div>
  );
}

export default Profile;
