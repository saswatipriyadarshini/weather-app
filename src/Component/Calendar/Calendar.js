import React, { Component } from 'react';
import { Calendar } from 'antd';
import "antd/dist/antd.css";
import './style.css';
export default class CalendarComp extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	onPanelChange(value, mode) {
		console.log(value, mode);
	}
	render(){
		return(
			<div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }} className='calender__container'>
				<Calendar fullscreen={false}  />
			</div>
		)
	}
}

