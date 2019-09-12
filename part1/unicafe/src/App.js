import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h2>{text}</h2>;
const Buttons = ({onClick, text}) => <button onClick={onClick}>{text}</button>;
const Statistics = ({text, value}) => {
	return (
		<th>{text}{value}</th>
	);
};
const StatisticsInfo = ({good, bad, neutral, all, allClicks, average, positive}) => {
	if (allClicks.length === 0) {
		return (
			<span>No statistics yet!</span>
		);
	}
	return (
		<table>
			<tbody>
			<tr><Statistics text={'Good: '} value={good}/></tr>
			<tr><Statistics text={'Neutral: '} value={neutral}/></tr>
			<tr><Statistics text={'Bad: '} value={bad}/></tr>
			<tr><Statistics text={'All: '} value={all}/></tr>
			<tr><Statistics text={'Average: '} value={average}/></tr>
			<tr><Statistics text={'Positive: '} value={positive}/></tr>
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allClicks, setAll] = useState([]);

	const handleGood = () => () => {
		setAll(allClicks.concat('G'));
		setGood(good + 1);
	};
	const handleNeutral = () => () => {
		setAll(allClicks.concat('N'));
		setNeutral(neutral + 1);
	};
	const handleBad = () => () => {
		setAll(allClicks.concat('B'));
		setBad(bad + 1);
	};
	const handleAverage = () => (good - bad) / allClicks.length;

	const positivePerc = () => (good / allClicks.length) * 100 + "%";

	return (
		<div>
			<Header text={'Give feedback'}/>
			<Buttons onClick={handleGood()} text={"Good"}/>
			<Buttons onClick={handleNeutral()} text={"Neutral"}/>
			<Buttons onClick={handleBad()} text={"Bad"}/>
			<Header text={'Statistics'}/>
			<StatisticsInfo allClicks={allClicks} good={good} bad={bad} neutral={neutral} all={allClicks.length}
							average={handleAverage()} positive={positivePerc()}/>
		</div>
	)
};

ReactDOM.render(<App/>,
	document.getElementById('root')
);

export default App;
