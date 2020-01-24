import React, { useState } from "react";

const TeamMemberForm = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const newTeamMember = {
      ...teamMember,
      id: Date.now()
    };
    props.addNewTeamMember(newTeamMember);
   
    setTeamMember({ name: "", email: "", role: ""});
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
        <input
          onChange={handleChanges}
          id="name"
          type="text"
          name="name"
          placeholder="Member name.."
          value={teamMember.name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChanges}
          id="email"
          type="text"
          name="email"
          placeholder="Member email.."
          value={teamMember.email}
        />
        <label htmlFor="role">Role</label>
        <select onChange={handleChanges} id="role" name="role">
          <option value="">Select Role</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TeamMemberForm;