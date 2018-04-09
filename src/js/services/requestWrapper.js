/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 10:30:55 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 10:30:55 
 */
import request from 'reqwest';
export default (function () {
  let param = ("t" + Math.random()).replace(/[^a-zA-Z0-9]/, "");
  let req = function (options) {
    if (/^get$/i.test(options.method) || !options.method) {
      options.url = options.url + (/\?/.test(options.url) ? "&" : "?") + param + "=" + (+new Date());
    }
    // options.url=(window.config&&window.config.RequestBaseUrl||"")+options.url;
    options.url = "http://localhost:3000" + options.url;
    return request(options);
  };
  req.ajaxSetup = function () {
    request.ajaxSetup.apply(request, arguments);
  };
  return req;
})();