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
    // form tags have an associated state with all the data
    // from tags inside of that form tag
    <div>
      <form onSubmit={submitHandler}>
        <h1>{teamMember.name}</h1>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChanges}
          id="name"
          type="text"
          name="name"
          value={teamMember.name}
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChanges}
          id="email"
          type="text"
          name="email"
          value={teamMember.email}
        />

        <label htmlFor="role">Role</label>
        <select onChange={handleChanges} id="role" name="role">
            <option value="1">Backend Engineer</option>
            <option value="2">Frontend Engineer</option>
            <option value="3">Designer</option>
        </select>

        <button name="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamMemberForm;