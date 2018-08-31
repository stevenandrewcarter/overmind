import React from 'react';
import {
  EuiBadge
} from '@elastic/eui';

export class NodeAttribute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return Object.keys(this.props.attributes).map((key) => {
      return (
        <EuiBadge
          // color={this.props.attributeColors[key].color}
          onClick={() => this.props.OnAttributeClicked(key)}
          onClickAriaLabel="Example of onclick event for the button"
          key={this.props.node + '_' + key}
        >
          {key}={this.props.attributes[key]}
        </EuiBadge>
      );
    });
  }
}