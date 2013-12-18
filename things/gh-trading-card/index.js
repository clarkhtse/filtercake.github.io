var GetCntrlTWO = function ($scope, $http) {
  $scope.requestValue = "noch nix";
  $scope.username = "nyancat";
  $scope.requestValue = 
  {
    "login": "nyancat",
    "id": 1152868,
    "avatar_url": "https://gravatar.com/avatar/f78ce880babf004e6ccc721562545e68?d=https%3A%2F%2Fidenticons.github.com%2F3e82f905d7bf99decda8d5c8e1e46f7f.png&r=x",
    "gravatar_id": "f78ce880babf004e6ccc721562545e68",
    "url": "https://api.github.com/users/nyancat",
    "html_url": "https://github.com/nyancat",
    "followers_url": "https://api.github.com/users/nyancat/followers",
    "following_url": "https://api.github.com/users/nyancat/following{/other_user}",
    "gists_url": "https://api.github.com/users/nyancat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nyancat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nyancat/subscriptions",
    "organizations_url": "https://api.github.com/users/nyancat/orgs",
    "repos_url": "https://api.github.com/users/nyancat/repos",
    "events_url": "https://api.github.com/users/nyancat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nyancat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "nyancat",
    "company": null,
    "blog": null,
    "location": null,
    "email": "nyancat@nyan.cat",
    "hireable": false,
    "bio": null,
    "public_repos": 3,
    "followers": 5,
    "following": 1,
    "created_at": "2011-10-26T10:30:06Z",
    "updated_at": "2013-12-10T12:36:12Z",
    "public_gists": 0
  };

  $scope.daCall = function(username) {
                    $http({
                      url: 'https://api.github.com/users/' + username,
                        method: "GET"
                    })

                      .success(
                        function (data, status, headers, config) {
                        $scope.requestValue = data;
                        console.log($scope.requestValue);
                        }
                      );

                  };

  // $scope.daCall($scope.username);
}
