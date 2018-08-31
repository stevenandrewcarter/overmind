import React from 'react';
import {
  EuiTitle,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiPanel,
  EuiHorizontalRule
} from '@elastic/eui';

export class NodePageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nodes = this.props.nodes || { nodes: [] };
    console.log(nodes);
    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiTitle>
            <h2>Cluster - {nodes.cluster_name}</h2>
          </EuiTitle>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup wrap>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <EuiText>
                  <p>Name: {nodes.cluster_name}</p>
                  <EuiHorizontalRule/>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            { Object.keys(nodes.nodes).forEach((item) => {
              console.log(item);
              return (
                <EuiFlexItem style={{ minWidth: 300 }}>
                  <EuiPanel>
                    <EuiText>
                      <p>Name: {item.name}</p>
                      <EuiHorizontalRule/>
                    </EuiText>
                  </EuiPanel>
                </EuiFlexItem>
              );
            }) }
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}

