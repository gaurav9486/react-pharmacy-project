import React, { useState } from 'react';
import AdminPanel from './index';
import './add-executive.css'
import { connect } from 'react-redux';
import { addExecutive } from '../../actions/index';

const AddExecutive = ({addExecutiveToTeam}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');

    const addExecutiveForm = (e) => {
        const executiveData = { firstName: firstName, lastName: lastName, dob: dob, gender: gender, experience: experience, executiveId: Math.floor((Math.random() * 100000000) + 1) }

        e.preventDefault();
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';

        addExecutiveToTeam(executiveData);
        var executivesTeam = JSON.parse(localStorage.getItem('executivesTeam')) || [];
        executivesTeam.push(executiveData);
        localStorage.setItem('executivesTeam', JSON.stringify(executivesTeam));
    }

    return (
        <>
            <AdminPanel />
            <div className="executive-data">
                <form onSubmit={addExecutiveForm} className="add-executive-form">
                <h1>Add Executive To Team</h1>
                    <input type="text" id="first-name" placeholder="Enter the first name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" id="last-name" placeholder="Enter the second name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="Date" id="executive-dob" placeholder="Enter the DOB in" onChange={(e) => setDob(e.target.value)} />
                    <input type="text" id="executive-gender" placeholder="Enter the gender (M/F)" onChange={(e) => setGender(e.target.value)} />
                    <input type="number" id="executive-experience" placeholder="Enter the experience in years" onChange={(e) => setExperience(e.target.value)} />
                    <button className="add-to-team-btn">Add Executive To Team</button>

                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addExecutiveToTeam: (payload) => dispatch(addExecutive(payload))
})

export default connect(null, mapDispatchToProps)(AddExecutive);