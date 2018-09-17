import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../store/actions/challenge_Actions';
import withAuthorization from '../AAA/withAuthorization';

import Rewards from '../components/Rewards/Rewards';

const RewardsContainer = () => (
  <Rewards />
);


const mapStateToProps = state => state.challenge;

const mapDispatchToProps = dispatch => bindActionCreators({
  showChallengeCardModal: actionCreators.showChallengeCardModal
}, dispatch);

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(RewardsContainer);
