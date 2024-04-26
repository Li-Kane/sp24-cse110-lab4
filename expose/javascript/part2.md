1. "3" is logged. Because i is declared as a var, it is set within the scope of the function discountPrices(). Therefore, once the values of i are set and iterated through, it is still available outside of the for loop as long as it is inside discountPrices().
2. "150" is logged. discountedPrice is global scoped, so it is always available within the function discountPrices(). When the for loop reaches its last, discountedPrice is calculated as 300 * (1 - 0.5), which is 150. The for loop terminates so it is no longer written, and as a var it can be accessed by the console.log.
3. "150" is logged. Since discountedPrice was 150 and needs no rounding, finalPrice is also 150. As a var, it is accessible by the console.log inside the function discountPrices().
4. The function returns a list of [50, 100, 150]. This is because it calculates a discountedPrice for each price in prices, and adds it to the array discounted, which is what is returned.
5. An error occurs, because i is not defined. Because i is declared using let, it is limited to only the scope of the for-loop. As such, it isn't accessible outside of the for loop, which is when the console.log occurs.
6. An error occurs, because discountedPrice isn't defined. Similar to i, discountedPrice is declared using let and is only accessible within the for loop. As such, when the console.log occurs outside of the for-loop, there is an error.
7. "150" is logged. Even though finalPrice is declared using let, it's block scope is the function. Therefore, finalPrice is accessible by the console.log outside the for-loop.
8. The function returns a list of [50, 100, 150]. This is because it calculates a discountedPrice for each price in prices, and adds it to the array discounted, which is what is returned.
9. An error occurs, because i is not defined. Because i is declared using let, it is limited to only the scope of the for-loop. As such, it isn't accessible outside of the for loop, which is when the console.log occurs.
10. "3" is logged. Const is similar to let in that it is block scoped. But because length's block scope is the function's scope, it is accessible outside the for-loop, which is when it is logged.
11. A list of [50, 100, 150] is returned. Even though discounted is declared as a const, because it is an object, discounted is actually just a const reference. Therefore, it can't be reassigned but the array itself can be modified, hence still returning the usual expected list.
12. Answers
  * A: `student['name']` or `student.name`
  * B: `student['Grad Year']`
  * C: `student.greeting()`
  * D: `student['Favorite Teacher'].name` or `student['Favorite Teacer']['name']`
  * E: `student.courseLoad[0]` or `student['courseLoad'][0]`
13. Arithmetic
  * A: `'32'` because 2 is cast to '2'
  * B: `1` because strings can't subtract so '3' casts to 3
  * C: `3` because null casts to 0
  * D: `'3null'` because null casts to 'null'
  * E: `4` because true casts to 1
  * F: `0` because false and null both cast to 0
  * G: `'3undefined'` because undefined casts to 'undefined'
  * H: `NaN` because undefined cannot typecast into an int
14. Comparison
  * A: `true` because '2' casts to 2
  * B: `false` because string comparision is used, and the first char '2' on the left is not less than the first char '1' on the right.
  * C: `true` becaause '2' is casat to 2
  * D: `false` because === references strict equality comparisons both in value and type. 2 and '2' aren't of the same type.
  * E: `false` because true casts to 1 and 1 != 2
  * F: `true` because in Boolean, any int not 0 is constructed as true so true === true.
15. `==` references equality comparison with typecasting. `===` does no typecasting and requires the types to be the same.
16. File
17. [2,4,6] is returned. This is because doSomething is declared as a function that doubles whatever the input is. Therefore, since doSomething is passed in as callback, it is applied to all elements of the input [1,2,3], doubling all of them.
18. File
19. `1, 4, 3, 2` is outputted. 1 and 4 are printed instantly since setTimeout is non-blocking. 3 is printed after since it has no timeout, and 2 is printed last due to a 1s timeout.