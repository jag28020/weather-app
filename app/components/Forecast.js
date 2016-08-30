import React, { Component } from 'react'
import {getDate, convertTemp} from '../helpers/utils'

const Forecast = (props) => {
	return (
		<div>
	    	{
	        	props.isLoading === true
	          	? <h1 style={styles.header}> Loading </h1>
	          	: <ForecastUI 
	          		city={props.city} 
	          		forecast={props.forecastData} 
	          		handleClick={props.handleClick}/>
	      	}
	    </div>
	)
}

const ForecastUI = (props) => {
	return (
		<div style={{textAlign: 'center'}}>
      		<h1 style={styles.header}>{props.city}</h1>
      		<p style={styles.subheader}>Select a day</p>
      		<div style={styles.container}>
        		{
        			props.forecast.list.map(function (listItem) {
          				return <DayItem 
          							key={listItem.dt} 
          							day={listItem} 
          							handleClick={props.handleClick.bind(null, listItem)} />
        			})
        		}
      		</div>
    	</div>
	)
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

const styles = {
  	container: {
		display: 'flex',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	    maxWidth: 1200,
	    margin: '50px auto'
	},
  	dayContainer: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',
	    margin: 35
	},
  	header: {
	    fontSize: 65,
	    color: '#333',
	    fontWeight: 100,
	    textAlign: 'center'
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

export default Forecast