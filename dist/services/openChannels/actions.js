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
    'participants': {
        method: GET,
        endpoint: '/{channel_url}/participants'
    },
    'freeze': {
        method: PUT,
        endpoint: '/{channel_url}/freeze'
    },
    'ban': {
        method: POST,
        endpoint: '/{channel_url}/ban'
    },
    'banList': {
        method: GET,
        endpoint: '/{channel_url}/ban'
    },
    'banUpdate': {
        method: PUT,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'banDelete': {
        method: DELETE,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'banView': {
        method: GET,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'mute': {
        method: POST,
        endpoint: '/{channel_url}/mute'
    },
    'muteList': {
        method: GET,
        endpoint: '/{channel_url}/mute'
    },
    'muteDelete': {
        method: DELETE,
        endpoint: '/{channel_url}/mute/{muted_user_id}'
    },
    'muteView': {
        method: GET,
        endpoint: '/{channel_url}/mute/{muted_user_id}'
    }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9vcGVuQ2hhbm5lbHMvYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsImFjdGlvbnMiLCJtZXRob2QiLCJlbmRwb2ludCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztlQU9JQSxRQUFRLDhCQUFSLEM7SUFKQUMsRyxZQUFBQSxHO0lBQ0FDLEksWUFBQUEsSTtJQUNBQyxHLFlBQUFBLEc7SUFDQUMsTSxZQUFBQSxNOztBQUdKLElBQU1DLFVBQVU7QUFDWixjQUFVO0FBQ05DLGdCQUFRSixJQURGO0FBRU5LLGtCQUFVO0FBRkosS0FERTtBQUtaLFlBQVE7QUFDSkQsZ0JBQVFMLEdBREo7QUFFSk0sa0JBQVU7QUFGTixLQUxJO0FBU1osY0FBVTtBQUNORCxnQkFBUUgsR0FERjtBQUVOSSxrQkFBVTtBQUZKLEtBVEU7QUFhWixjQUFVO0FBQ05ELGdCQUFRRixNQURGO0FBRU5HLGtCQUFVO0FBRkosS0FiRTtBQWlCWixZQUFRO0FBQ0pELGdCQUFRTCxHQURKO0FBRUpNLGtCQUFVO0FBRk4sS0FqQkk7QUFxQlosb0JBQWdCO0FBQ1pELGdCQUFRTCxHQURJO0FBRVpNLGtCQUFVO0FBRkUsS0FyQko7QUF5QlosY0FBVTtBQUNORCxnQkFBUUgsR0FERjtBQUVOSSxrQkFBVTtBQUZKLEtBekJFO0FBNkJaLFdBQU87QUFDSEQsZ0JBQVFKLElBREw7QUFFSEssa0JBQVU7QUFGUCxLQTdCSztBQWlDWixlQUFXO0FBQ1BELGdCQUFRTCxHQUREO0FBRVBNLGtCQUFVO0FBRkgsS0FqQ0M7QUFxQ1osaUJBQWE7QUFDVEQsZ0JBQVFILEdBREM7QUFFVEksa0JBQVU7QUFGRCxLQXJDRDtBQXlDWixpQkFBYTtBQUNURCxnQkFBUUYsTUFEQztBQUVURyxrQkFBVTtBQUZELEtBekNEO0FBNkNaLGVBQVc7QUFDUEQsZ0JBQVFMLEdBREQ7QUFFUE0sa0JBQVU7QUFGSCxLQTdDQztBQWlEWixZQUFRO0FBQ0pELGdCQUFRSixJQURKO0FBRUpLLGtCQUFVO0FBRk4sS0FqREk7QUFxRFosZ0JBQVk7QUFDUkQsZ0JBQVFMLEdBREE7QUFFUk0sa0JBQVU7QUFGRixLQXJEQTtBQXlEWixrQkFBYztBQUNWRCxnQkFBUUYsTUFERTtBQUVWRyxrQkFBVTtBQUZBLEtBekRGO0FBNkRaLGdCQUFZO0FBQ1JELGdCQUFRTCxHQURBO0FBRVJNLGtCQUFVO0FBRkY7QUE3REEsQ0FBaEI7O0FBbUVBQyxPQUFPQyxPQUFQLEdBQWlCSixPQUFqQiIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7XG4gICAgR0VULFxuICAgIFBPU1QsXG4gICAgUFVULFxuICAgIERFTEVURVxufSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cy9yZXF1ZXN0VHlwZXMnKTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICAnY3JlYXRlJzoge1xuICAgICAgICBtZXRob2Q6IFBPU1QsXG4gICAgICAgIGVuZHBvaW50OiAnLydcbiAgICB9LFxuICAgICdsaXN0Jzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcvJ1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IHtcbiAgICAgICAgbWV0aG9kOiBQVVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0nXG4gICAgfSxcbiAgICAnZGVsZXRlJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfSdcbiAgICB9LFxuICAgICd2aWV3Jzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfSdcbiAgICB9LFxuICAgICdwYXJ0aWNpcGFudHMnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy97Y2hhbm5lbF91cmx9L3BhcnRpY2lwYW50cydcbiAgICB9LFxuICAgICdmcmVlemUnOiB7XG4gICAgICAgIG1ldGhvZDogUFVULFxuICAgICAgICBlbmRwb2ludDogJy97Y2hhbm5lbF91cmx9L2ZyZWV6ZSdcbiAgICB9LFxuICAgICdiYW4nOiB7XG4gICAgICAgIG1ldGhvZDogUE9TVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfS9iYW4nXG4gICAgfSxcbiAgICAnYmFuTGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vYmFuJ1xuICAgIH0sXG4gICAgJ2JhblVwZGF0ZSc6IHtcbiAgICAgICAgbWV0aG9kOiBQVVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vYmFuL3tiYW5uZWRfdXNlcl9pZH0nXG4gICAgfSxcbiAgICAnYmFuRGVsZXRlJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfS9iYW4ve2Jhbm5lZF91c2VyX2lkfSdcbiAgICB9LFxuICAgICdiYW5WaWV3Jzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfS9iYW4ve2Jhbm5lZF91c2VyX2lkfSdcbiAgICB9LFxuICAgICdtdXRlJzoge1xuICAgICAgICBtZXRob2Q6IFBPU1QsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vbXV0ZSdcbiAgICB9LFxuICAgICdtdXRlTGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vbXV0ZSdcbiAgICB9LFxuICAgICdtdXRlRGVsZXRlJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve2NoYW5uZWxfdXJsfS9tdXRlL3ttdXRlZF91c2VyX2lkfSdcbiAgICB9LFxuICAgICdtdXRlVmlldyc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3tjaGFubmVsX3VybH0vbXV0ZS97bXV0ZWRfdXNlcl9pZH0nXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zOyJdfQ==