/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  for(var i = 1, l = asteroids.length; i < l; i++) {
      if(asteroids[i] < 0) {
          for(var j=i-1; j>=0; j--) {
              if(asteroids[j] <= 0) continue
              if (asteroids[j] + asteroids[i] === 0) {
                  asteroids[j] = asteroids[i] = 0
                  break
              } else if (asteroids[j] + asteroids[i] < 0){
                  asteroids[j] = 0
              } else {
                  asteroids[i] = 0;
                  break
              }
          }       
      }
  }
  return asteroids.filter(function(x) { return x !== 0})
};