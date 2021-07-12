import React, { useState } from 'react';
import './edit-executive.css'
import { connect } from 'react-redux';
import AdminPanel from './index';
import { Link, useHistory } from 'react-router-dom';
import { teamAfterEdit } from '../../actions';

const EditExecutive = ({ executivesTeam, executiveIdForUpdate, teamUpdateAfterEdit }) => {

    const requiredExecutiveId = executiveIdForUpdate || localStorage.getItem('executiveIdForUpdate');
    const executiveDataForUpdate = executivesTeam.filter(item => item.executiveId == requiredExecutiveId);
    const { firstName, lastName, dob, gender, experience } = executiveDataForUpdate[0];
    const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    const [updatedLastName, setUpdatedLastName] = useState(lastName);
    const [updatedDob, setUpdatedDob] = useState(dob);
    const [updatedGender, setUpdatedGender] = useState(gender);
    const [updatedExperience, setUpdatedExperience] = useState(experience);
    const history = useHistory();

    const executiveEditHandle = (e) => {
        e.preventDefault();
        var teamAfterEdit = JSON.parse(localStorage.getItem('executivesTeam')) || [];
        const theIndex = teamAfterEdit.findIndex(item => item.executiveId == requiredExecutiveId);
        teamAfterEdit[theIndex].firstName = updatedFirstName;
        teamAfterEdit[theIndex].lastName = updatedLastName;
        teamAfterEdit[theIndex].dob = updatedDob;
        teamAfterEdit[theIndex].gender = updatedGender;
        teamAfterEdit[theIndex].experience = updatedExperience;
        localStorage.setItem('executivesTeam', JSON.stringify(teamAfterEdit));
        teamUpdateAfterEdit(teamAfterEdit);
        alert('Data updated successfully');
        history.push("/admin/inventory");
    }

    return (
        <>
            <AdminPanel />
            <div className="executive-edit-page">
                <form onSubmit={executiveEditHandle} className="edit-executive-form">
                <h1>Update Details Here</h1>
                    <input type="text" id="first-name" placeholder="Enter first name" value={updatedFirstName} onChange={(e) => setUpdatedFirstName(e.target.value)} />
                    <input type="text" id="last-name" placeholder="Enter last name" value={updatedLastName} onChange={(e) => setUpdatedLastName(e.target.value)} />
                    <input type="Date" id="customer-dob" placeholder="Enter date of birth" value={updatedDob} onChange={(e) => setUpdatedDob(e.target.value)} />
                    <input type="text" id="customer-gender" placeholder="Enter the gender (M/F)" value={updatedGender} onChange={(e) => setUpdatedGender(e.target.value)} />
                    <input type="number" id="customer-experience" placeholder="Enter the experience (In years)" value={updatedExperience} onChange={(e) => setUpdatedExperience(e.target.value)} />
                    <div className="buttons">
                    <Link to="/admin/team"><button>Go Back</button></Link>
                    <button type="submit">Confirm</button>
                    </div>
                </form>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    executivesTeam: state.executivesTeam,
    executiveIdForUpdate: state.executiveIdForUpdate
})

const mapDispatchToProps = (dispatch) => ({
    teamUpdateAfterEdit: (payload) => dispatch(teamAfterEdit(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExecutive);