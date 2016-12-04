import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

export default class ConfirmBattleContainer extends React.Component {
	contextTypes: {
		router: React.PropTypes.object.isRequired
	}

	constructor(props) {
	super(props);
	}

	render() {
	return (
	  <ConfirmBattle />
	);
	}
}
