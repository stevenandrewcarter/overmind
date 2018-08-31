import React from 'react';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiHeaderBreadcrumbs
} from '@elastic/eui';
import { ClusterPageContent } from './cluster/ClusterPageContent';
import { NodePageContent } from './node/NodePageContent';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/overmind/cluster').then((resp) => {
      this.setState({ cluster: resp.data });
    });
  }

  render() {
    const breadcrumbs = [{
      text: 'Animals',
      href: '#',
      onClick: (e) => { e.preventDefault(); console.log('You clicked Animals'); },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    }, {
      text: 'Reptiles',
      href: '#',
      onClick: (e) => { e.preventDefault(); console.log('You clicked Reptiles'); },
    }, {
      text: 'Boa constrictor',
      href: '#',
      onClick: (e) => { e.preventDefault(); console.log('You clicked Boa constrictor'); },
    }, {
      text: 'Edit',
    }];
    const { title } = this.props;
    const cluster = this.state.cluster || {};
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>{title}</h1>
            </EuiTitle>
            <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} responsive={false} />
            {/*<EuiBreadcrumbs breadcrumbs={breadcrumbs} responsive={false} truncate={false} />*/}
          </EuiPageHeader>
          <ClusterPageContent cluster={cluster}/>
          <NodePageContent httpClient={this.props.httpClient}/>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
