module.exports = {
    apps: [{
      name: 'be-siskaeeeeee',
      script: './bin/www',
      instances: 0,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      instance_var: 'INSTANCE_ID',
      max_memory_restart: '1G',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'dev',
      },
      max_size: '3M',
      retain: '3',
      compress: true,
      dateFormat: 'YYYY-MM-DD_HH-mm-ss',
      workerInterval: '30',
      rotateInterval: '0 0 * * *',
      rotateModule: true,
    }],
  };