angular.module('sqrtl.httpRequest', [])
  .factory('Adventures', function($http){
    //requests venues that meet location and category criteria
    //TODO: add user parameters and such
    // var data = [];

    var requestAdventures = function(location, category, cll){


      var url = '/api/getYelp';
      //actual url is '/api/getYelp'
      return $http({
        method: 'POST',
        url: url,
        data: JSON.stringify({
          term: category,
          location: location,
          cll: cll
        })
      }).then(function(resp){
        // data.push(resp);
        // resp = JSON.parse(resp);
        console.log(resp.data.total);
        console.log(resp.data);
        data = resp.data.businesses.map(function(datum){
          return {
            name: datum.name,
            image: datum.image_url.replace(/ms.jpg/i, 'o.jpg'),
            isClosed: datum.is_closed,
            rating: datum.rating,
            ratingImg: datum.rating_img_url,
            reviewCount: datum.review_count,
            snippet: datum.snippet,
            location: datum.location
          };
        });
        window.localStorage.setItem('data',JSON.stringify(data));
        data = JSON.parse(window.localStorage.getItem('data'));

        return data;
      })
      .catch(function(err){
        console.error(err);
      });
    };

<<<<<<< abe1f0db34aabbf91cba65cb0c37b66afc9f3077
    //sorts data by highest reviews first.
    var sortByReviewCount = function(data) {
      data.sort(function(a,b) {
        if (a.reviewCount < b.reviewCount) {
          return 1;
        }
        if (a.reviewCount > b.reviewCount) {
          return -1;
        }
        return 0;
      });
    };

    var randomizeTopFive = function(data) {
      var topFive = data.splice(0,5);
      var shuffledFive = lodash.shuffle(topFive);
      var newShuffledData = shuffledFive.concat(data);
      return newShuffledData;
    };

=======
>>>>>>> add stormpath, still in progress
    var dataShift = function(){
      data = JSON.parse(window.localStorage.getItem('data'));
      shiftedData = data.shift();
      window.localStorage.setItem('data',JSON.stringify(data));
      console.log(JSON.parse(window.localStorage.getItem('data')));
      return shiftedData;
    };

    var getUber = function(){
      return $http({
        method: 'GET',
        url: '/api/getUber'
      }).then(function(resp){
        return resp.data;
      });
    };

    var uberPrice = function(data){
      return $http({
        method: 'POST',
        url: 'api/uberPrice',
        data: JSON.stringify(data)
      }).then(function(resp){
        return resp.data;
      });
    };

    var uberRide = function(data){
      return $http({
        method: 'POST',
        url: 'api/uberRide',
        data: JSON.stringify(data)
      }).then(function(resp){
        return resp.data;
      });
    };

    var geoFindMe = function(callback){
      navigator.geolocation.getCurrentPosition(function(success){
        callback(success);
      });
    };

    return {
      requestAdventures: requestAdventures,
      dataShift: dataShift,
      getUber: getUber,
      uberPrice: uberPrice,
      uberRide: uberRide,
      geoFindMe: geoFindMe
    };



  });
  // .factory('UserResponses', function($http){
  //   //tells the database if a user accepted suggestions
  //   var initialReaction = function(userName, restauranArray){
  //     return $http({
  //       method: 'POST',
  //       url: '/adventure',
  //       data: JSON
  //     }).then(functon(){
  //       //should do something.
  //     })
  //   }

  // });