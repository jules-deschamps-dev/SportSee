import React from 'react';
import { UserDatas } from '../../Models/User/User';

const UserDataCard: React.FC<{ icon: string, data: UserDatas, name: string }> = ({ data }) => {
  return (
    <div className="cards">
      <div className='image-container' style={{ backgroundColor: data.color }}>
      <img src={"/public/icons/" + data.propertie + ".svg"} alt="" />
      </div>
      <div className='flex flex-column'>
        <span>{data.value + data.unit}</span>
        <span className='libelle'>{data.libelle}</span>
      </div>
    </div>
  );
};

export default UserDataCard;