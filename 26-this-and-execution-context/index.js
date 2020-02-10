this.name = 'window object'
/************ Function Called with New Keyword ***********/
// inside a constructor fn, this will be the newly created object
 
/********************************************************/

/************ Bind Call Apply ****************************/
// within a function called with `apply/call/bind`, 
// 'this'will be the object passed as the first parameter

/********************************************************/

/************ Function called on an Object ***************/
// within a `function` called within a particular object/context (i.e. `Object.method()`)
// 'this' will be the context/object

/********************************************************/

/************ Simple Function Call ***********************/
//  for a simple function call `fn()` will be the window object (browser) 
// or the global object (Node)

/********************************************************/

/************ Arrow Functions ****************************/

/********************************************************/
