const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID "CdxXUaYT#Td0rewmW7WW3u4iYUtPqNRRMwbm2_dgSGqJnRvEIUIE",
ALIVE_IMG: process.env.ALIVE_IMG || "htttp://avatars.githubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I am KAVI-MD i am alive now!",
};
