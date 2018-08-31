import React from 'react';
import {
  EuiTitle,
  EuiHealth
} from '@elastic/eui';

export class ClusterTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  static renderHealth(health) {
    let color = 'subdued';
    switch (health) {
      case 'green':
        color = 'success';
        break;
      case 'yellow':
        color = 'warning';
        break;
      case 'red':
        color = 'danger';
        break;
    }
    return (
      <EuiHealth color={color}>
        {health}
      </EuiHealth>
    );
  }

  render() {
    return (
      <EuiTitle>
        <div>
          <h2>{this.props.cluster.cluster_name} { ClusterTitle.renderHealth(this.props.cluster.status) }</h2>
        </div>
      </EuiTitle>
    );
  }
}