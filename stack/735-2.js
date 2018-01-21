/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  var stack = []
  for (let i = 0, l = asteroids.length; i < l; i++) {
      if (asteroids[i] > 0) {
          stack.push(asteroids[i])
      } 
      else if(asteroids[i] < 0) {
          if (stack.length === 0 || stack[stack.length-1] < 0) {
              stack.push(asteroids[i])
          } 
          else if (stack[stack.length-1] < -asteroids[i]) {
              stack.pop()
              i--
          } else if(stack[stack.length-1] === -asteroids[i]) {
              stack.pop()
          }
      }
  }
  return stack
};