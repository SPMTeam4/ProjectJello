import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {
  render() {
    return (
      <div className={"TaskStatus" + this.props.Status}>
        <div className="TaskLabel">
          <span>Status:</span>
        </div>
      	<div className="select-box" id="StatusText">
          <select>
        		<option selected={this.props.Status === 0 && 'selected'}>Open</option>
        		<option selected={this.props.Status === 1 && 'selected' }>In Progress</option>
        		<option selected={this.props.Status === 2 && 'selected' }>Complete</option>
    		  </select>
        </div>

        <div className="TaskLabel">
          <span>Assignee:</span>
        </div>
        <div className="AssigneePerson">
          <a href="" id="TaskAssigneeIconContainer"> <img id="TaskAssigneeIcon" src={this.props.Assignee.pfp} /> </a>
      	</div>

        <div className="HoursArea">
          <div className="TaskLabel">
            <span>Man-hours:</span>
          </div>
          <div id="TaskHoursContainer">
        		<input type="number" className="TaskHoursInput" defaultValue={this.props.Hours} />
    		  </div>
          <div className="TaskLabel">
            <span id="TaskHoursLabel">h/week</span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default TaskStatus;