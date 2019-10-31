import React, { Component, Fragment } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import "antd/dist/antd.css";
import './style.css';
export default class CalendarComp extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: moment(),
			selectedValue: moment(),
		}
	}
	onPanelChange(value, mode) {
		console.log(value, mode);
	}

	onSelect = value => {
		this.setState({
			value,
			selectedValue: value,
		});
	};

	render(){
		const { value, selectedValue } = this.state;
		return(
			<Fragment>
				<Alert
					message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
				/>
				<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }} className='calender__container'>
					<Calendar value={value} onSelect={this.onSelect} fullscreen={false}  />
				</div>
			</Fragment>

		)
	}
}

