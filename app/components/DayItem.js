import React, {Component} from 'react'
import {getDate} from '../helpers/utils'


const styles = {
	dayContainer: {
    	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	flexDirection: 'column',
    	margin: 35
  	},
  	subheader: {
    	fontSize: 30,
    	color: '#333',
    	fontWeight: 100
  	},
  	weather: {
    	height: 130
  	}
}

const DayItem = (props) => {
	var date = getDate(props.day.dt);
  	var icon = props.day.weather[0].icon;
  	return (
    	<div style={styles.dayContainer} onClick={props.handleClick}>
      		<img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      		<h2 style={styles.subheader}>{date}</h2>
    	</div>
  	)
}

export default DayItem