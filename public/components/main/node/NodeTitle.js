import React from 'react';
import {
  EuiTitle,
  EuiBadge
} from '@elastic/eui';

export class NodeTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSelectedBadges(selectedBadges) {
    return Object.keys(selectedBadges).map((key) => {
      return (
        <EuiBadge
          iconType="cross"
          iconSide="right"
          iconOnClick={() => this.props.OnClick(key)}
          iconOnClickAriaLabel="Example of onclick event for the button"
          key={key}
        >
          {selectedBadges[key]}
        </EuiBadge>
      );
    });
  }

  render() {
    return (
      <EuiTitle>
        <div>
          <h2>Nodes</h2>
          { this.renderSelectedBadges(this.props.selectedBadges) }
        </div>
      </EuiTitle>
    );
  }
}