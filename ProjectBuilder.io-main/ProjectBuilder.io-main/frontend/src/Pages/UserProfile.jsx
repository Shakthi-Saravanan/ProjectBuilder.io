import React, { useState } from 'react'
import '../Assets/style/UserProfile.css'
import { useEffect } from 'react'
import axios from 'axios'

function UserProfile({ uid }) {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/user/${uid}`);
        const result = response.data[0];
        setProfile(result);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [uid]);
  return (
    <div className='up'>
      {console.log(profile)}
      <div className="profile-view">{profile.name}</div>
      <table border={0}>
        <tr>
          <td>
            <h3 className='lable'>NAME: </h3>
          </td>
          <td>
            <h3 className='answer'>{profile.name}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className='lable'>PASSWORD: </h3>
          </td>
          <td>
            <h3 className='answer'>{profile.paaswd}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className='lable'>EMAIL: </h3>
          </td>
          <td>
            <h3 className='answer'>{profile.email}</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className='lable'>PHONE NUMBER: </h3>
          </td>
          <td>
            <h3 className='answer'>{profile.phone_num}</h3>
          </td>
        </tr>
      </table>
      <button>PREVIOUS QUERIES</button>
    </div>
  )
  
}

export default UserProfile
