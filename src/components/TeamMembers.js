import React from "react";

const TeamMembers = props => {
  
  return (
    <div>
      {props.teamMembers.length > 0 &&
      <h2>My Team Members</h2>
      }
      <div className="row">
      {props.teamMembers.map(teamMember => (
        <div className="column" key={teamMember.id}>
          <div className="card">
            <h3>{teamMember.name}</h3>
            <p>{teamMember.email}</p>
            <p>{teamMember.role}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TeamMembers;