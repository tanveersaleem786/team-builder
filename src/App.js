import React, {useState} from 'react';
import TeamMemberForm from "./components/TeamMemberForm";
import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    { 
      name: '', 
      email: '', 
      role: ''
    }
  ]);

  const addNewTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      <TeamMemberForm addNewTeamMember={addNewTeamMember} />
    </div>
  );
}

export default App;