const ENV = process.env.NODE_ENV;
const dotEnv = require('dotenv');
console.log(`-------------------------
Projeto XPTO - environment: ${ENV}
-------------------------`)
let envPath = '.env';

if(ENV !== 'production') envPath+=`.${ENV.toLowerCase()}`
envs = dotEnv.config({ path: envPath });
let environments = Object.keys(envs.parsed)
.reduce((acum, env)=>{
  return acum = {...acum, [env]:envs.parsed[env]};
},{});
environments = {...environments, ["NODE_ENV"]:ENV};
module.exports = environments;