import React from 'react';
import {
  EuiBadge
} from '@elastic/eui';

export class NodeRole extends React.Component {
  constructor(props) {
    super(props);
  }

  static determineBadgeColor(role) {
    switch (role) {
      case 'master':
        return 'primary';
      case 'data':
        return 'accent';
      case 'ingest':
        return 'secondary';
      default:
        return 'default';
    }
  }

  render() {
    return Object.keys(this.props.roles).map((i) => {
      const role = this.props.roles[i];
      return (
        <EuiBadge
          color={NodeRole.determineBadgeColor(role)}
          iconType="dot"
          onClick={() => window.alert('Badge clicked')}
          onClickAriaLabel="Example of onclick event for the button"
          key={this.props.node + '_' + role}
        >
          {role}
        </EuiBadge>
      );
    });
  }
}