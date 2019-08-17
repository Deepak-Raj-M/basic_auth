module.exports = {
  apps : [{
    name: 'server',
    script: 'bin/www',
    instances: 1,
    autorestart: true,
    restart_delay : 5000,
    ignore_watch : ['logs'],
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
