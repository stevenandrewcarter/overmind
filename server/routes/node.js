export default function (server) {

  server.route({
    path: '/api/overmind/nodes',
    method: 'GET',
    handler(req, reply) {
      const { callWithRequest } = server.plugins.elasticsearch.getCluster('data');
      callWithRequest(req, 'nodes.info').then((response) => {
        reply(response);
      });
    }
  });
}
