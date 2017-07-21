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
        endpoint: '/{user_id}'
    },
    'view': {
        method: GET,
        endpoint: '/{user_id}'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{user_id}'
    },
    'totalUnreadCount': {
        method: GET,
        endpoint: '/{user_id}/unread_count'
    },
    'activate': {
        method: PUT,
        endpoint: '/{user_id}/activate',
        deprecate: true
    },
    'block': {
        method: POST,
        endpoint: '/{user_id}/block'
    },
    'blockList': {
        method: GET,
        endpoint: '/{user_id}/block'
    },
    'deleteBlock': {
        method: DELETE,
        endpoint: '/{user_id}/block/{target_id}'
    },
    'banList': {
        method: GET,
        endpoint: '/{user_id}/ban'
    },
    'muteList': {
        method: GET,
        endpoint: '/{user_id}/mute'
    },
    'markAsReadAll': {
        method: POST,
        endpoint: '/{user_id}/mark_as_read_all'
    },
    'registerToken': {
        method: POST,
        endpoint: '/{user_id}/push/{token_type}'
    },
    'unregisterToken': {
        method: DELETE,
        endpoint: '/{user_id}/push/{token_type}/{push_token}'
    },
    'unregisterAllTokens': {
        method: DELETE,
        endpoint: '/{user_id}/push'
    },
    'pushPreference': {
        method: GET,
        endpoint: '/{user_id}/push_preference'
    },
    'updatePushPreference': {
        method: PUT,
        endpoint: '/{user_id}/push_preference'
    },
    'deletePushPreference': {
        method: DELETE,
        endpoint: '/{user_id}/push_preference'
    },
    'channelPushPreference': {
        method: GET,
        endpoint: '/{user_id}/push_preference/{channel_url}'
    },
    'updateChannelPushPreference': {
        method: PUT,
        endpoint: '/{user_id}/push_preference/{channel_url}'
    },
    'myGroupChannelList': {
        method: GET,
        endpoint: '/{user_id}/my_group_channels'
    }
};

module.exports = actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy91c2Vycy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiYWN0aW9ucyIsIm1ldGhvZCIsImVuZHBvaW50IiwiZGVwcmVjYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O2VBT0lBLFFBQVEsOEJBQVIsQztJQUpBQyxHLFlBQUFBLEc7SUFDQUMsSSxZQUFBQSxJO0lBQ0FDLEcsWUFBQUEsRztJQUNBQyxNLFlBQUFBLE07O0FBR0osSUFBTUMsVUFBVTtBQUNaLGNBQVU7QUFDTkMsZ0JBQVFKLElBREY7QUFFTkssa0JBQVU7QUFGSixLQURFO0FBS1osWUFBUTtBQUNKRCxnQkFBUUwsR0FESjtBQUVKTSxrQkFBVTtBQUZOLEtBTEk7QUFTWixjQUFVO0FBQ05ELGdCQUFRSCxHQURGO0FBRU5JLGtCQUFVO0FBRkosS0FURTtBQWFaLFlBQVE7QUFDSkQsZ0JBQVFMLEdBREo7QUFFSk0sa0JBQVU7QUFGTixLQWJJO0FBaUJaLGNBQVU7QUFDTkQsZ0JBQVFGLE1BREY7QUFFTkcsa0JBQVU7QUFGSixLQWpCRTtBQXFCWix3QkFBb0I7QUFDaEJELGdCQUFRTCxHQURRO0FBRWhCTSxrQkFBVTtBQUZNLEtBckJSO0FBeUJaLGdCQUFZO0FBQ1JELGdCQUFRSCxHQURBO0FBRVJJLGtCQUFVLHFCQUZGO0FBR1JDLG1CQUFXO0FBSEgsS0F6QkE7QUE4QlosYUFBUztBQUNMRixnQkFBUUosSUFESDtBQUVMSyxrQkFBVTtBQUZMLEtBOUJHO0FBa0NaLGlCQUFhO0FBQ1RELGdCQUFRTCxHQURDO0FBRVRNLGtCQUFVO0FBRkQsS0FsQ0Q7QUFzQ1osbUJBQWU7QUFDWEQsZ0JBQVFGLE1BREc7QUFFWEcsa0JBQVU7QUFGQyxLQXRDSDtBQTBDWixlQUFXO0FBQ1BELGdCQUFRTCxHQUREO0FBRVBNLGtCQUFVO0FBRkgsS0ExQ0M7QUE4Q1osZ0JBQVk7QUFDUkQsZ0JBQVFMLEdBREE7QUFFUk0sa0JBQVU7QUFGRixLQTlDQTtBQWtEWixxQkFBaUI7QUFDYkQsZ0JBQVFKLElBREs7QUFFYkssa0JBQVU7QUFGRyxLQWxETDtBQXNEWixxQkFBaUI7QUFDYkQsZ0JBQVFKLElBREs7QUFFYkssa0JBQVU7QUFGRyxLQXRETDtBQTBEWix1QkFBbUI7QUFDZkQsZ0JBQVFGLE1BRE87QUFFZkcsa0JBQVU7QUFGSyxLQTFEUDtBQThEWiwyQkFBdUI7QUFDbkJELGdCQUFRRixNQURXO0FBRW5CRyxrQkFBVTtBQUZTLEtBOURYO0FBa0VaLHNCQUFrQjtBQUNkRCxnQkFBUUwsR0FETTtBQUVkTSxrQkFBVTtBQUZJLEtBbEVOO0FBc0VaLDRCQUF3QjtBQUNwQkQsZ0JBQVFILEdBRFk7QUFFcEJJLGtCQUFVO0FBRlUsS0F0RVo7QUEwRVosNEJBQXdCO0FBQ3BCRCxnQkFBUUYsTUFEWTtBQUVwQkcsa0JBQVU7QUFGVSxLQTFFWjtBQThFWiw2QkFBeUI7QUFDckJELGdCQUFRTCxHQURhO0FBRXJCTSxrQkFBVTtBQUZXLEtBOUViO0FBa0ZaLG1DQUErQjtBQUMzQkQsZ0JBQVFILEdBRG1CO0FBRTNCSSxrQkFBVTtBQUZpQixLQWxGbkI7QUFzRlosMEJBQXNCO0FBQ2xCRCxnQkFBUUwsR0FEVTtBQUVsQk0sa0JBQVU7QUFGUTtBQXRGVixDQUFoQjs7QUE0RkFFLE9BQU9DLE9BQVAsR0FBaUJMLE9BQWpCIiwiZmlsZSI6ImFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHtcbiAgICBHRVQsXG4gICAgUE9TVCxcbiAgICBQVVQsXG4gICAgREVMRVRFXG59ID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzL3JlcXVlc3RUeXBlcycpO1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgICdjcmVhdGUnOiB7XG4gICAgICAgIG1ldGhvZDogUE9TVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcvJ1xuICAgIH0sXG4gICAgJ2xpc3QnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy8nXG4gICAgfSxcbiAgICAndXBkYXRlJzoge1xuICAgICAgICBtZXRob2Q6IFBVVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9J1xuICAgIH0sXG4gICAgJ3ZpZXcnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy97dXNlcl9pZH0nXG4gICAgfSxcbiAgICAnZGVsZXRlJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9J1xuICAgIH0sXG4gICAgJ3RvdGFsVW5yZWFkQ291bnQnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy97dXNlcl9pZH0vdW5yZWFkX2NvdW50J1xuICAgIH0sXG4gICAgJ2FjdGl2YXRlJzoge1xuICAgICAgICBtZXRob2Q6IFBVVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L2FjdGl2YXRlJyxcbiAgICAgICAgZGVwcmVjYXRlOiB0cnVlXG4gICAgfSxcbiAgICAnYmxvY2snOiB7XG4gICAgICAgIG1ldGhvZDogUE9TVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L2Jsb2NrJ1xuICAgIH0sXG4gICAgJ2Jsb2NrTGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3t1c2VyX2lkfS9ibG9jaydcbiAgICB9LFxuICAgICdkZWxldGVCbG9jayc6IHtcbiAgICAgICAgbWV0aG9kOiBERUxFVEUsXG4gICAgICAgIGVuZHBvaW50OiAnL3t1c2VyX2lkfS9ibG9jay97dGFyZ2V0X2lkfSdcbiAgICB9LFxuICAgICdiYW5MaXN0Jzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L2JhbidcbiAgICB9LFxuICAgICdtdXRlTGlzdCc6IHtcbiAgICAgICAgbWV0aG9kOiBHRVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3t1c2VyX2lkfS9tdXRlJ1xuICAgIH0sXG4gICAgJ21hcmtBc1JlYWRBbGwnOiB7XG4gICAgICAgIG1ldGhvZDogUE9TVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L21hcmtfYXNfcmVhZF9hbGwnXG4gICAgfSxcbiAgICAncmVnaXN0ZXJUb2tlbic6IHtcbiAgICAgICAgbWV0aG9kOiBQT1NULFxuICAgICAgICBlbmRwb2ludDogJy97dXNlcl9pZH0vcHVzaC97dG9rZW5fdHlwZX0nXG4gICAgfSxcbiAgICAndW5yZWdpc3RlclRva2VuJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L3B1c2gve3Rva2VuX3R5cGV9L3twdXNoX3Rva2VufSdcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyQWxsVG9rZW5zJzoge1xuICAgICAgICBtZXRob2Q6IERFTEVURSxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L3B1c2gnXG4gICAgfSxcbiAgICAncHVzaFByZWZlcmVuY2UnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy97dXNlcl9pZH0vcHVzaF9wcmVmZXJlbmNlJ1xuICAgIH0sXG4gICAgJ3VwZGF0ZVB1c2hQcmVmZXJlbmNlJzoge1xuICAgICAgICBtZXRob2Q6IFBVVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L3B1c2hfcHJlZmVyZW5jZSdcbiAgICB9LFxuICAgICdkZWxldGVQdXNoUHJlZmVyZW5jZSc6IHtcbiAgICAgICAgbWV0aG9kOiBERUxFVEUsXG4gICAgICAgIGVuZHBvaW50OiAnL3t1c2VyX2lkfS9wdXNoX3ByZWZlcmVuY2UnXG4gICAgfSxcbiAgICAnY2hhbm5lbFB1c2hQcmVmZXJlbmNlJzoge1xuICAgICAgICBtZXRob2Q6IEdFVCxcbiAgICAgICAgZW5kcG9pbnQ6ICcve3VzZXJfaWR9L3B1c2hfcHJlZmVyZW5jZS97Y2hhbm5lbF91cmx9J1xuICAgIH0sXG4gICAgJ3VwZGF0ZUNoYW5uZWxQdXNoUHJlZmVyZW5jZSc6IHtcbiAgICAgICAgbWV0aG9kOiBQVVQsXG4gICAgICAgIGVuZHBvaW50OiAnL3t1c2VyX2lkfS9wdXNoX3ByZWZlcmVuY2Uve2NoYW5uZWxfdXJsfSdcbiAgICB9LFxuICAgICdteUdyb3VwQ2hhbm5lbExpc3QnOiB7XG4gICAgICAgIG1ldGhvZDogR0VULFxuICAgICAgICBlbmRwb2ludDogJy97dXNlcl9pZH0vbXlfZ3JvdXBfY2hhbm5lbHMnXG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25zO1xuXG4iXX0=