import React from 'react';
import team from '../constants/team';
import "./Style.css";

function Body() {
  return (
    <div>
      <div className='slogan'>
      <h1>Every Home Begins With a Thoughtful Plan.</h1>
      <p>
        Your home is more than just a structure—it's a
        reflection of your life, your dreams, and your needs.
        At 16-32 Drafting, we believe that every great home
        starts with a plan tailored to you. We listen to your
        ideas, understand your lifestyle, and draw plans that
        are as unique as you are. With our experience and
        your vision, we'll create a blueprint that feels
        truly personal—because your home should fit you,
        not the other way around.<br /><br />-Gustavo Hernandez
      </p>
      </div>
      <h1>MEET OUR TEAM</h1>
      <ul className='team-list'>
        {team.map((member, index) => (
          <li className='team-member' key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p style={
              { fontSize: '1.1rem', }
            }>{member.role}</p>
            <p>{member.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;