const request = require('request');


function rp(uri, options, callback) {
        return new Promise(function (resolve, reject) {
                request(uri, options, function (err, res, body) {
                        if(callback){
                                return callback(err, res, body)
                        }else{
                                if(err){
                                        reject(err);
                                }else{
                                        resolve(body);
                                }
                        }
                })
        })
}
function verbFunc ( verb )
{
  var method = verb === 'del' ? 'DELETE' : verb.toUpperCase()
  return function ( uri, options, callback ) {
    var params = request.initParams( uri, options, callback )
    params.method = method
    return rp( params, params.callback )
  }
}


rp.get = verbFunc( 'get' )
rp.head = verbFunc( 'head' )
rp.post = verbFunc( 'post' )
rp.put = verbFunc( 'put' )
rp.patch = verbFunc( 'patch' )
rp.del = verbFunc( 'del' )

rp.jar = request.jar
rp.cookie = request.cookie
rp.defaults = function () {
  request = request.defaults.apply( lib, arguments )
  request.initParams = lib.initParams
  return rp
}


module.exports(rp);
