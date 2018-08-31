import clusterRoute from './server/routes/cluster';
import nodeRoute from './server/routes/node';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'overmind',
    uiExports: {
      app: {
        title: 'Overmind',
        description: 'Overmind for controlling an elastic cluster',
        main: 'plugins/overmind/app',
        styleSheetPath: require('path').resolve(__dirname, 'public/app.scss'),
      },
      hacks: [
        'plugins/overmind/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      clusterRoute(server);
      nodeRoute(server);
    }
  });
}
