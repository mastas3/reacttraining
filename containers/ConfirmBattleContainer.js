var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState(){
		return({
			isLoading: true,
			playersInfo: []
		})
	},

	componentDidMount(){
		var query = this.props.location.query;
		console.log(query);
		//fetch info from github and then update the state
		githubHelpers.getPlatersInfo([query.playerOne, query.playerTwo])
		.then((players) => {
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
		});
	},

	render() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
			/>
		);
	}
});

module.exports = ConfirmBattleContainer;