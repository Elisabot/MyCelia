module.exports = {
  servers: {
    one: {
      host: '157.245.180.79',
      username: 'root',
      // pem: './path'
      // password: 'server-password'
      // or neither for ssh-agent
    }
  },

  app: {
    name: 'MyCelia',
    path: '../',
    type: 'meteor',
    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      buildLocation: '/.deploy',
      server: 'http://157.245.180.79',
      executable: 'meteor',
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://157.245.180.79',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-12-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
