import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

const style = {
	minHeight: '1rem',
	minWidth: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
  color: 'white',
  fontWeight: 600,
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const dustbinTarget = {
	drop(props, monitor) {
		props.onDrop(monitor.getItem())
	},
}

const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
})

class Dustbin extends Component {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
		accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
		lastDroppedItem: PropTypes.object,
		onDrop: PropTypes.func.isRequired,
	}

	render() {
		const {
			isOver,
			canDrop,
			connectDropTarget,
			lastDroppedItem,
		} = this.props
		const isActive = isOver && canDrop

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive 
					? 'Release to drop'
					: lastDroppedItem ? '' : `Drop answer here`}

				{lastDroppedItem && (
					<p>{lastDroppedItem.name}</p>
				)}
			</div>,
		)
	}
}

export default  DropTarget(props => props.accepts, dustbinTarget,collect)(Dustbin);