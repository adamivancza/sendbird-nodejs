'use strict';

var _ = require('lodash');

var endpointParser = require('./endpointParser');

var _require = require('../constants/requestTypes'),
    GET = _require.GET;

module.exports = function makeAction(request, endpointPrefix, name, options) {

    var endpoint = endpointPrefix + options.endpoint;

    var controller = endpointParser.parse(endpoint);

    return function doAction() {
        var args = Array.prototype.slice.call(arguments);
        var hasPayload = _.isPlainObject(_.last(args));
        var payload = hasPayload ? _.last(args) : null;
        var params = hasPayload ? _.initial(args) : args;

        if (params.length !== controller.args.length) {
            throw new Error('Invalid arguments number: [' + name + '] expects [' + controller.args.length + '] arguments but received [' + params.length + ']');
        }

        var reqParams = {
            method: options.method,
            url: controller.compile(args)
        };

        if (hasPayload) {
            if (options.method === GET) {
                reqParams.qs = payload;
            } else {
                reqParams.body = payload;
            }
        }

        return request(reqParams);
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tYWtlQWN0aW9uLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiZW5kcG9pbnRQYXJzZXIiLCJHRVQiLCJtb2R1bGUiLCJleHBvcnRzIiwibWFrZUFjdGlvbiIsInJlcXVlc3QiLCJlbmRwb2ludFByZWZpeCIsIm5hbWUiLCJvcHRpb25zIiwiZW5kcG9pbnQiLCJjb250cm9sbGVyIiwicGFyc2UiLCJkb0FjdGlvbiIsImFyZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImhhc1BheWxvYWQiLCJpc1BsYWluT2JqZWN0IiwibGFzdCIsInBheWxvYWQiLCJwYXJhbXMiLCJpbml0aWFsIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXFQYXJhbXMiLCJtZXRob2QiLCJ1cmwiLCJjb21waWxlIiwicXMiLCJib2R5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxJQUFJQyxRQUFRLFFBQVIsQ0FBVjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsa0JBQVIsQ0FBdkI7O2VBSUlBLFFBQVEsMkJBQVIsQztJQURBRSxHLFlBQUFBLEc7O0FBR0pDLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0MsVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJDLGNBQTdCLEVBQTZDQyxJQUE3QyxFQUFtREMsT0FBbkQsRUFBNEQ7O0FBRXpFLFFBQU1DLFdBQVdILGlCQUFpQkUsUUFBUUMsUUFBMUM7O0FBRUEsUUFBTUMsYUFBYVYsZUFBZVcsS0FBZixDQUFxQkYsUUFBckIsQ0FBbkI7O0FBRUEsV0FBTyxTQUFTRyxRQUFULEdBQW9CO0FBQ3ZCLFlBQU1DLE9BQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsU0FBM0IsQ0FBYjtBQUNBLFlBQU1DLGFBQWFyQixFQUFFc0IsYUFBRixDQUFnQnRCLEVBQUV1QixJQUFGLENBQU9SLElBQVAsQ0FBaEIsQ0FBbkI7QUFDQSxZQUFNUyxVQUFVSCxhQUFhckIsRUFBRXVCLElBQUYsQ0FBT1IsSUFBUCxDQUFiLEdBQTRCLElBQTVDO0FBQ0EsWUFBTVUsU0FBU0osYUFBYXJCLEVBQUUwQixPQUFGLENBQVVYLElBQVYsQ0FBYixHQUErQkEsSUFBOUM7O0FBRUEsWUFBSVUsT0FBT0UsTUFBUCxLQUFrQmYsV0FBV0csSUFBWCxDQUFnQlksTUFBdEMsRUFBOEM7QUFDMUMsa0JBQU0sSUFBSUMsS0FBSixpQ0FBd0NuQixJQUF4QyxtQkFBMERHLFdBQVdHLElBQVgsQ0FBZ0JZLE1BQTFFLGtDQUE2R0YsT0FBT0UsTUFBcEgsT0FBTjtBQUNIOztBQUVELFlBQU1FLFlBQVk7QUFDZEMsb0JBQVFwQixRQUFRb0IsTUFERjtBQUVkQyxpQkFBS25CLFdBQVdvQixPQUFYLENBQW1CakIsSUFBbkI7QUFGUyxTQUFsQjs7QUFLQSxZQUFJTSxVQUFKLEVBQWdCO0FBQ1osZ0JBQUlYLFFBQVFvQixNQUFSLEtBQW1CM0IsR0FBdkIsRUFBNEI7QUFDeEIwQiwwQkFBVUksRUFBVixHQUFlVCxPQUFmO0FBQ0gsYUFGRCxNQUVPO0FBQ0hLLDBCQUFVSyxJQUFWLEdBQWlCVixPQUFqQjtBQUNIO0FBQ0o7O0FBRUQsZUFBT2pCLFFBQVFzQixTQUFSLENBQVA7QUFDSCxLQXhCRDtBQTBCSCxDQWhDRCIsImZpbGUiOiJtYWtlQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IGVuZHBvaW50UGFyc2VyID0gcmVxdWlyZSgnLi9lbmRwb2ludFBhcnNlcicpO1xuXG5jb25zdCB7XG4gICAgR0VUXG59ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzL3JlcXVlc3RUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1ha2VBY3Rpb24ocmVxdWVzdCwgZW5kcG9pbnRQcmVmaXgsIG5hbWUsIG9wdGlvbnMpIHtcblxuICAgIGNvbnN0IGVuZHBvaW50ID0gZW5kcG9pbnRQcmVmaXggKyBvcHRpb25zLmVuZHBvaW50O1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IGVuZHBvaW50UGFyc2VyLnBhcnNlKGVuZHBvaW50KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBkb0FjdGlvbigpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IGhhc1BheWxvYWQgPSBfLmlzUGxhaW5PYmplY3QoXy5sYXN0KGFyZ3MpKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGhhc1BheWxvYWQgPyBfLmxhc3QoYXJncykgOiBudWxsO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBoYXNQYXlsb2FkID8gXy5pbml0aWFsKGFyZ3MpIDogYXJncztcblxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCAhPT0gY29udHJvbGxlci5hcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFyZ3VtZW50cyBudW1iZXI6IFske25hbWV9XSBleHBlY3RzIFske2NvbnRyb2xsZXIuYXJncy5sZW5ndGh9XSBhcmd1bWVudHMgYnV0IHJlY2VpdmVkIFske3BhcmFtcy5sZW5ndGh9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxUGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIHVybDogY29udHJvbGxlci5jb21waWxlKGFyZ3MpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhhc1BheWxvYWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gR0VUKSB7XG4gICAgICAgICAgICAgICAgcmVxUGFyYW1zLnFzID0gcGF5bG9hZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVxUGFyYW1zLmJvZHkgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3QocmVxUGFyYW1zKTtcbiAgICB9O1xuXG59O1xuIl19