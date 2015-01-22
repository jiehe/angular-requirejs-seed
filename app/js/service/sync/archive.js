/**
 * Created by dong on 2015/1/8.
 */
define(['../services'],function(services){
    services.factory('archive',['$http',function($http){
        var archive ={};
        archive.getData = function(callBack){
            if(archive.data){ //只请求一次该接口,提高性能
                callBack(archive.data);
            }else{
                $http.get('php/openapi/getArticleName.php')
                    .success(function(data){
                        archive.data = data;
                        callBack(data);
                    })
            }
        }
        return archive;
    }])
})
