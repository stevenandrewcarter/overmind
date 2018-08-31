import React from 'react';
import {
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
  EuiFlexItem
} from '@elastic/eui';
import { NodeRole } from './NodeRole';
import { NodeAttribute } from './NodeAttribute';

export class NodePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EuiFlexItem style={{ minWidth: 300 }}>
        <EuiPanel>
          <EuiText>
            <p>Name: {this.props.node.name}</p>
            <p>Transport Address: {this.props.node.transport_address}</p>
            <EuiHorizontalRule/>
            <p>Roles</p>
            <div>
              <NodeRole node={this.props.node.name} roles={this.props.node.roles}/>
            </div>
            <EuiHorizontalRule/>
            <p>Attributes</p>
            <div>
              <NodeAttribute
                node={this.props.node.name}
                attributeColors={this.props.attributes}
                attributes={this.props.node.attributes}
                OnAttributeClicked={this.props.OnAttributeClicked}
              />
            </div>
          </EuiText>
        </EuiPanel>
      </EuiFlexItem>
    );
  }
}