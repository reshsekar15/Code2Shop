import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import ItemTypes from './ItemTypes'
import {Grid} from 'semantic-ui-react';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class Container extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dustbins: [
				{ accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
				{ accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
        { accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
				{ accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
        { accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
        { accepts: [ItemTypes.ANSWER], lastDroppedItem: null, sideBySide: true },
				{ accepts: [ItemTypes.ANSWER], lastDroppedItem: null, sideBySide: true },
				{ accepts: [ItemTypes.ANSWER], lastDroppedItem: null },
			],
			boxes: [
				{ name: 'Start', type: ItemTypes.ANSWER },
				{ name: 'Print to screen a message asking for the number', type: ItemTypes.ANSWER },
        { name: 'Read the input (x)', type: ItemTypes.ANSWER },
        { name: 'Find the remainder using x % 2 (modulus)', type: ItemTypes.ANSWER },
        { name: 'Check if the remainder is equal to zero', type: ItemTypes.ANSWER },
        { name: 'Print to screen a "The input is even!"', type: ItemTypes.ANSWER },
        { name: 'Print to screen a "The input is odd!"', type: ItemTypes.ANSWER },
        { name: 'Stop', type: ItemTypes.ANSWER },
			],
			droppedBoxNames: [],
		}
	}

	isDropped(boxName) {
		return this.state.droppedBoxNames.indexOf(boxName) > -1
	}

	render() {
    const { boxes, dustbins } = this.state;
    const { handleDragNDrop } = this.props;
    
    let isLeft = true;

    const shuffledBoxes = shuffle(boxes);

    console.log(dustbins);

		return (
			<Grid columns={2}>
        <Grid.Column>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            {shuffledBoxes.map(({ name, type }, index) => (
              <Box
                name={name}
                type={type}
                isDropped={this.isDropped(name)}
                key={index}
              />
            ))}
          </div>
        </Grid.Column>
        <Grid.Column>
          <Grid columns="equal">
              {dustbins.map(({ accepts, lastDroppedItem, sideBySide }, index) => {
                
                if(sideBySide){
                  const className = isLeft ? 'align-content-left' : 'align-content-right';
                  isLeft = false;
                  return(
                    <Grid.Column className={className} width={8}>
                      <Dustbin
                        accepts={accepts}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={item => this.handleDrop(index, item)}
                        key={index}
                      />
                    </Grid.Column>)
                }

                return(
                  <Grid.Column 
                    className="center-content"
                    width={16}
                  >
                    <Dustbin
                      accepts={accepts}
                      lastDroppedItem={lastDroppedItem}
                      onDrop={item => this.handleDrop(index, item)}
                      key={index}
                    />
                  </Grid.Column>)
                  }
              )}
          </Grid>
        </Grid.Column>
			</Grid>
		)
	}

	handleDrop(index, item) {
		const { name } = item
		const droppedBoxNames = name ? { $push: [{index, name}] } : {}
    const { handleDragNDrop } = this.props;

		this.setState(
			update(this.state, {
				dustbins: {
					[index]: {
						lastDroppedItem: {
							$set: item,
						},
					},
				},
				droppedBoxNames,
			}),
    )
    
    handleDragNDrop(this.state.droppedBoxNames);
	}
}

export default DragDropContext(HTML5Backend)(Container)