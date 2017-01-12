'use strict';

const remote = require('electron').remote;
const path = require('path');

const APP_NAME = 'Astrofox';
const APP_VERSION = '1.0.0';
const APP_PATH = remote.app.getAppPath();
const USER_DATA_PATH = remote.app.getPath('userData');
const TEMP_PATH = path.join(remote.app.getPath('temp'), APP_NAME);
const FFMPEG_PATH = path.join(APP_PATH, '..', 'bin', (process.platform === 'win32') ? 'ffmpeg.exe' : 'ffmpeg');
const APP_CONFIG_FILE = path.join(USER_DATA_PATH, 'app.config');

module.exports = {
    APP_NAME,
    APP_VERSION,
    APP_PATH,
    USER_DATA_PATH,
    TEMP_PATH,
    FFMPEG_PATH,
    APP_CONFIG_FILE
};