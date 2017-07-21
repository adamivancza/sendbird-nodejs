'use strict';

var _require = require('../../constants/requestTypes'),
    GET = _require.GET,
    POST = _require.POST,
    PUT = _require.PUT,
    DELETE = _require.DELETE;

var actions = {
    'create': {
        method: POST,
        endpoint: '/'
    },
    'list': {
        method: GET,
        endpoint: '/'
    },
    'update': {
        method: PUT,
        endpoint: '/{channel_url}'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{channel_url}'
    },
    'view': {
        method: GET,
        endpoint: '/{channel_url}'
    },
    'members': {
        method: GET,
        endpoint: '/{channel_url}/members'
    },
    'checkMember': {
        method: GET,
        endpoint: '/{channel_url}/members/{user_id}'
    },
    'invite': {
        method: POST,
        endpoint: '/{channel_url}/invite'
    },
    'hide': {
        method: PUT,
        endpoint: '/{channel_url}/hide'
    },
    'leave': {
        method: PUT,
        endpoint: '/{channel_url}/leave'
    }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9ncm91cENoYW5uZWxzL2FjdGlvbnMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJhY3Rpb25zIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7ZUFPSUEsUUFBUSw4QkFBUixDO0lBSkFDLEcsWUFBQUEsRztJQUNBQyxJLFlBQUFBLEk7SUFDQUMsRyxZQUFBQSxHO0lBQ0FDLE0sWUFBQUEsTTs7QUFHSixJQUFNQyxVQUFVO0FBQ1osY0FBVTtBQUNOQyxnQkFBUUosSUFERjtBQUVOSyxrQkFBVTtBQUZKLEtBREU7QUFLWixZQUFRO0FBQ0pELGdCQUFRTCxHQURKO0FBRUpNLGtCQUFVO0FBRk4sS0FMSTtBQVNaLGNBQVU7QUFDTkQsZ0JBQVFILEdBREY7QUFFTkksa0JBQVU7QUFGSixLQVRFO0FBYVosY0FBVTtBQUNORCxnQkFBUUYsTUFERjtBQUVORyxrQkFBVTtBQUZKLEtBYkU7QUFpQlosWUFBUTtBQUNKRCxnQkFBUUwsR0FESjtBQUVKTSxrQkFBVTtBQUZOLEtBakJJO0FBcUJaLGVBQVc7QUFDUEQsZ0JBQVFMLEdBREQ7QUFFUE0sa0JBQVU7QUFGSCxLQXJCQztBQXlCWixtQkFBZTtBQUNYRCxnQkFBUUwsR0FERztBQUVYTSxrQkFBVTtBQUZDLEtBekJIO0FBNkJaLGNBQVU7QUFDTkQsZ0JBQVFKLElBREY7QUFFTkssa0JBQVU7QUFGSixLQTdCRTtBQWlDWixZQUFRO0FBQ0pELGdCQUFRSCxHQURKO0FBRUpJLGtCQUFVO0FBRk4sS0FqQ0k7QUFxQ1osYUFBUztBQUNMRCxnQkFBUUgsR0FESDtBQUVMSSxrQkFBVTtBQUZMO0FBckNHLENBQWhCOztBQTJDQUMsT0FBT0MsT0FBUCxHQUFpQkosT0FBakIiLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qge1xuICAgIEdFVCxcbiAgICBQT1NULFxuICAgIFBVVCxcbiAgICBERUxFVEVcbn0gPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMvcmVxdWVzdFR5cGVzJyk7XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgJ2NyZWF0ZSc6IHtcbiAgICAgICAgbWV0aG9kOiBQT1NULFxuICAgICAgICBlbmRwb2ludDogJy8nXG4gICAgfSxcbiAgICAnbGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnLydcbiAgICB9LFxuICAgICd1cGRhdGUnOiB7XG4gICAgICAgIG1ldGhvZDogUFVULFxuICAgICAgICBlbmRwb2ludDogJy97Y2hhbm5lbF91cmx9J1xuICAgIH0sXG4gICAgJ2RlbGV0ZSc6IHtcbiAgICAgICAgbWV0aG9kOiBERUxFVEUsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0nXG4gICAgfSxcbiAgICAndmlldyc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0nXG4gICAgfSxcbiAgICAnbWVtYmVycyc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vbWVtYmVycydcbiAgICB9LFxuICAgICdjaGVja01lbWJlcic6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vbWVtYmVycy97dXNlcl9pZH0nXG4gICAgfSxcbiAgICAnaW52aXRlJzoge1xuICAgICAgICBtZXRob2Q6IFBPU1QsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vaW52aXRlJ1xuICAgIH0sXG4gICAgJ2hpZGUnOiB7XG4gICAgICAgIG1ldGhvZDogUFVULFxuICAgICAgICBlbmRwb2ludDogJy97Y2hhbm5lbF91cmx9L2hpZGUnXG4gICAgfSxcbiAgICAnbGVhdmUnOiB7XG4gICAgICAgIG1ldGhvZDogUFVULFxuICAgICAgICBlbmRwb2ludDogJy97Y2hhbm5lbF91cmx9L2xlYXZlJ1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uczsiXX0=