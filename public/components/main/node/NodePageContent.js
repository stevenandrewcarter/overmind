import React from 'react';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiFlexGroup
} from '@elastic/eui';
import { NodePanel } from './NodePanel';
import { NodeTitle } from './NodeTitle';

export class NodePageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: {},
      selectedAttributes: []
    };
  }

  componentDidMount() {
    const { httpClient } = this.props;
    httpClient.get('../api/overmind/nodes').then((resp) => {
      this.setState({ nodes: resp.data });
    });
  }

  renderNodes(nodes) {
    return Object.keys(nodes).map((key) => {
      const attributes = nodes[key].attributes;
      let showNode = false;
      if (this.state.selectedAttributes.length > 0) {
        for (let i = 0; i < this.state.selectedAttributes.length; i++) {
          if (this.state.selectedAttributes[i] in attributes) {
            showNode = true;
          }
        }
      } else {
        showNode = true;
      }
      if (!showNode) return null;
      return (
        <NodePanel
          node={nodes[key]}
          key={key}
          OnAttributeClicked={(selectedAttribute) => {
            let selectedAttributes = this.state.selectedAttributes;
            selectedAttributes.push(selectedAttribute);
            this.setState({ selectedAttributes: selectedAttributes });
          }}
        />
      );
    });
  }

  render() {
    const nodes = this.state.nodes;
    if (!nodes.nodes) return null;
    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <NodeTitle
            selectedBadges={this.state.selectedAttributes}
            OnClick={(selectedIndex) => {
              let selectedAttributes = this.state.selectedAttributes;
              selectedAttributes.splice(selectedIndex, 1);
              this.setState({ selectedAttributes: selectedAttributes });
            }}
          />
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup wrap>
            {this.renderNodes(nodes.nodes)}
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}

