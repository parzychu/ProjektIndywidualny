/*global XMLHttpRequest, window*/
(function ajaxHelperWrapper() {
    'use strict';

    var xhttp = new XMLHttpRequest(),
        ajaxHelper = {};

    /**
     * Parse params from object to string accepted by XMLHttpRequest.
     * @param  {Object} params
     * @return {String}
     */
    function parseParams(params) {
        var parsedParams = '',
            i = 0;

        for (i in params) {
            if (params.hasOwnProperty(i)) {
                parsedParams += i + '=' + params[i] + '&';
            }
        }
        parsedParams = parsedParams.slice(0, parsedParams.length - 1);
        return parsedParams;
    }

    ajaxHelper = {
        get: function get(url, callback) {
            function onGetResponse() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    callback(xhttp.responseText);
                }
            }
            xhttp.onreadystatechange = onGetResponse;
            xhttp.open('GET', url, true);
            xhttp.send();

        },

        post: function post(url, params, callback) {
            var parsedParams = parseParams(params);

            function onPostResponse() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    callback(xhttp.responseText);
                }
            }
            xhttp.onreadystatechange = onPostResponse;
            xhttp.open('POST', url, true);
            xhttp.send(parsedParams);
        },

        put: function put(url, params, callback) {
            var parsedParams = parseParams(params);

            function onPutResponse() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    callback(xhttp.responseText);
                }
            }
            xhttp.onreadystatechange = onPutResponse;
            xhttp.open('PUT', url, true);
            xhttp.send(parsedParams);
        },

        del: function del(url, params, callback) {
            var parsedParams = parseParams(params);

            function onDeleteResponse() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    callback(xhttp.responseText);
                }
            }
            xhttp.onreadystatechange = onDeleteResponse;
            xhttp.open('DELETE', url, true);
            xhttp.send(parsedParams);
        }
    };

    window.ajaxHelper = ajaxHelper;
})();
