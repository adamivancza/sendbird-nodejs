'use strict';

var _require = require('../../constants/requestTypes'),
    GET = _require.GET,
    POST = _require.POST,
    PUT = _require.PUT,
    DELETE = _require.DELETE;

var actions = {
    'send': {
        method: POST,
        endpoint: '/'
    },
    'list': {
        method: GET,
        endpoint: '/'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{message_id}'
    },
    'view': {
        method: GET,
        endpoint: '/{message_id}'
    },
    'markAsRead': {
        method: PUT,
        endpoint: '/mark_as_read'
    },
    'count': {
        method: GET,
        endpoint: '/total_count'
    },
    'unreadCount': {
        method: GET,
        endpoint: '/unread_count'
    }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlcy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiYWN0aW9ucyIsIm1ldGhvZCIsImVuZHBvaW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O2VBT0lBLFFBQVEsOEJBQVIsQztJQUpBQyxHLFlBQUFBLEc7SUFDQUMsSSxZQUFBQSxJO0lBQ0FDLEcsWUFBQUEsRztJQUNBQyxNLFlBQUFBLE07O0FBR0osSUFBTUMsVUFBVTtBQUNaLFlBQVE7QUFDSkMsZ0JBQVFKLElBREo7QUFFSkssa0JBQVU7QUFGTixLQURJO0FBS1osWUFBUTtBQUNKRCxnQkFBUUwsR0FESjtBQUVKTSxrQkFBVTtBQUZOLEtBTEk7QUFTWixjQUFVO0FBQ05ELGdCQUFRRixNQURGO0FBRU5HLGtCQUFVO0FBRkosS0FURTtBQWFaLFlBQVE7QUFDSkQsZ0JBQVFMLEdBREo7QUFFSk0sa0JBQVU7QUFGTixLQWJJO0FBaUJaLGtCQUFjO0FBQ1ZELGdCQUFRSCxHQURFO0FBRVZJLGtCQUFVO0FBRkEsS0FqQkY7QUFxQlosYUFBUztBQUNMRCxnQkFBUUwsR0FESDtBQUVMTSxrQkFBVTtBQUZMLEtBckJHO0FBeUJaLG1CQUFlO0FBQ1hELGdCQUFRTCxHQURHO0FBRVhNLGtCQUFVO0FBRkM7QUF6QkgsQ0FBaEI7O0FBK0JBQyxPQUFPQyxPQUFQLEdBQWlCSixPQUFqQiIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB7XG4gICAgR0VULFxuICAgIFBPU1QsXG4gICAgUFVULFxuICAgIERFTEVURVxufSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cy9yZXF1ZXN0VHlwZXMnKTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICAnc2VuZCc6IHtcbiAgICAgICAgbWV0aG9kOiBQT1NULFxuICAgICAgICBlbmRwb2ludDogJy8nXG4gICAgfSxcbiAgICAnbGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnLydcbiAgICB9LFxuICAgICdkZWxldGUnOiB7XG4gICAgICAgIG1ldGhvZDogREVMRVRFLFxuICAgICAgICBlbmRwb2ludDogJy97bWVzc2FnZV9pZH0nXG4gICAgfSxcbiAgICAndmlldyc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3ttZXNzYWdlX2lkfSdcbiAgICB9LFxuICAgICdtYXJrQXNSZWFkJzoge1xuICAgICAgICBtZXRob2Q6IFBVVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcvbWFya19hc19yZWFkJ1xuICAgIH0sXG4gICAgJ2NvdW50Jzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcvdG90YWxfY291bnQnXG4gICAgfSxcbiAgICAndW5yZWFkQ291bnQnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy91bnJlYWRfY291bnQnXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zOyJdfQ==