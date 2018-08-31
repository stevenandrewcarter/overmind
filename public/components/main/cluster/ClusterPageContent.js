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

export class ClusterPageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cluster = this.props.cluster || {};
    console.log(cluster);
    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiTitle>
            <h2>Cluster - {cluster.cluster_name}</h2>
          </EuiTitle>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup wrap>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <EuiText>
                  <p>Name: {cluster.cluster_name}</p>
                  <EuiHorizontalRule/>
                  <p style={{ color: cluster.status }}>Status: {cluster.status}</p>
                  <p>Timed Out: {cluster.timed_out}</p>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <EuiText>
                  Nodes
                  <EuiHorizontalRule/>
                  <p>Number of Nodes: {cluster.number_of_nodes}</p>
                  <p>Number of Data Nodes: {cluster.number_of_data_nodes}</p>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <EuiText>
                  Shards
                  <EuiHorizontalRule/>
                  <p>Active Primary: {cluster.active_primary_shards}</p>
                  <p>Active: {cluster.active_shards}</p>
                  <p>Relocating: {cluster.relocating_shards}</p>
                  <p>Unassigned: {cluster.unassigned_shards}</p>
                  <p>Delayed Unassigned: {cluster.delayed_unassigned_shards}</p>
                </EuiText>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <p>Pending Tasks: {cluster.number_of_pending_tasks}</p>
              </EuiPanel>
            </EuiFlexItem>
            {/*number_of_in_flight_fetch	0*/}
            {/*task_max_waiting_in_queue_millis	0*/}
            {/*active_shards_percent_as_number	100*/}
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}

