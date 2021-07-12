import React from 'react';
import './team.css';
import AdminPanel from './index';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { executiveIdForUpdate, updateTeam } from '../../actions';

const Team = ({ executivesTeam, updateTeamAfterDelete, updateExecutiveById }) => {

    const history = useHistory();
    const deleteExecutive = (executiveId) => {
        var teamAfterDelete = JSON.parse(localStorage.getItem('executivesTeam')) || [];
        teamAfterDelete = teamAfterDelete.filter(item => item.executiveId !== executiveId);
        localStorage.setItem('executivesTeam', JSON.stringify(teamAfterDelete));
        updateTeamAfterDelete(executiveId)
    }

    const updateTheTeam = (executiveId) => {
        localStorage.setItem('executiveIdForUpdate', executiveId);
        updateExecutiveById(executiveId);
        history.push("/admin/edit-executive");
    }

    return (
        <>
            <AdminPanel />
            <div className="team-data">
                <h1>THE TEAM</h1>
                <div className="team-header">
                    <p className="team-first-column table-heading">First Name</p>
                    <p className="team-second-column table-heading">Last Name</p>
                    <p className="team-third-column table-heading">DOB</p>
                    <p className="team-fourth-column table-heading">Gender</p>
                    <p className="team-fifth-column table-heading">Experience</p>
                </div>
                {executivesTeam && executivesTeam.map(item => <div className="executive-card" key={Math.random()}>
                    <p className="team-first-column">{item.firstName}</p>
                    <p className="team-second-column">{item.lastName}</p>
                    <p className="team-third-column">{item.dob}</p>
                    <p className="team-fourth-column">{item.gender}</p>
                    <p className="team-fifth-column">{item.experience}</p>
                    <div className="executive-edit-button" onClick={() => {
                        updateTheTeam(item.executiveId)
                    }}><i class="fas fa-edit"></i></div>
                    <div className="executive-delete-button" onClick={() => {
                        deleteExecutive(item.executiveId)
                    }}><i class="fas fa-trash-alt"></i></div>
                </div>)}
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    executivesTeam: state.executivesTeam
})

const mapDispatchToProps = (dispatch) => ({
    updateTeamAfterDelete: (payload) => dispatch(updateTeam(payload)),
    updateExecutiveById: (payload) => dispatch(executiveIdForUpdate(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Team);