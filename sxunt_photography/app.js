//const WXAPI = require('apifm-wxapi')
//WXAPI.init('sxunt')
//WXAPI.init('photography')

const MYWXAPI = require('my-wxapi')
MYWXAPI.init('v1')

App({
  onLaunch() {
    console.log('摄影展小程序启动');
  }
});