import React from 'react';
import {
  EuiStat,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiPanel,
  EuiHorizontalRule
} from '@elastic/eui';
import { ClusterTitle } from './ClusterTitle';

export class ClusterPageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cluster = this.props.cluster || {};
    return (
      <EuiPageContent>
        <EuiPageContentHeader>
          <ClusterTitle cluster={cluster}/>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiFlexGroup wrap>
            <EuiFlexItem style={{ minWidth: 300 }}>
              <EuiPanel>
                <EuiText>
                  <p>Timed Out: {cluster.timed_out}</p>
                  <p>Pending Tasks: {cluster.number_of_pending_tasks}</p>
                  <p>Number Of In Flight Fetch: {cluster.number_of_in_flight_fetch}</p>
                  <p>Task Max waiting in Queue Milliseconds: {cluster.task_max_waiting_in_queue_millis}</p>
                  <p>Active Shards percent: {cluster.active_shards_percent_as_number}</p>
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
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    );
  }
}

