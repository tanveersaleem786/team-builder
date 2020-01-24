import React, {useState} from 'react';
import TeamMembers from "./components/TeamMembers";
import TeamMemberForm from "./components/TeamMemberForm";
import './App.css' ;

function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  const addNewTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <TeamMemberForm addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;