import React from 'react';
import team from '../constants/team';
import "./Style.css";

function Body() {
  return (
    <div>
      <h1>MEET OUR TEAM</h1>
        <ul>    
          {team.map((member, index) => (    
            <li key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p style={
                    {fontSize: '1.1rem',}
                }>{member.role}</p>
                <p>{member.description}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Body;