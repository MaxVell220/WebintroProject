module.exports = {
  apps : [{
    name: 'rt-orders',
    script: 'npm',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 10011,
      NODE_ENV: "development",
      swagger_mockMode: true, 
      NODE_OPTIONS: "--inspect --inspect-port=9232"
    },
    env_production: {
      NODE_ENV: 'production',
      swagger_mockMode: true, 
      PORT: 10011
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
