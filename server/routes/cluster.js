export default function (server) {

  server.route({
    path: '/api/overmind/cluster',
    method: 'GET',
    handler(req, reply) {
      const { callWithRequest } = server.plugins.elasticsearch.getCluster('data');
      callWithRequest(req, 'cluster.health').then((response) => {
        reply(response);
      });
    }
  });
}
