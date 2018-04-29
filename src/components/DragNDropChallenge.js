import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import DragContainer from './Container'

export default class DustbinMultipleTargets extends Component {
	render() {
    const { handleDragNDrop } = this.props;
		return (
			<Container>
				<DragContainer handleDragNDrop={handleDragNDrop} />
			</Container>
		)
	}
}