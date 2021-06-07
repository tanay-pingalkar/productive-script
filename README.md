# productive-script
[abandoned/deprecated]
## installation
not realeased yet, 
so you have to clone the repo 
typescript needed to be install globally
```
npm i typescript -g
```
```
gh repo clone tanay-pingalkar/productive-script
```
and then 
```
npm i
```
then 
```
npm run watch
```
in another terminal
```
npm start / npm run dev
```
it will ask for
```
file name :- 
```
type `hello`
and enter
you will see
```javascript
reading..
file is ready!
OUTPUT:
hello world
```
it means that you have productive-script working on your machine

## learn
### simple hello world
create a file in the in repo's dir with the extention .pds
and type following
```javascript
*pt("hello world")
```
you will see hello world printed below the output
like this
```javascript
reading..
file is ready!
OUTPUT:
hello world
```
`*pt()`is a language function to print variables or any kind of data.
### declare variable
```javascript
#int num="number"
```
will throw error like this, because you cannot assign a string to a number
```
cant assign "number" to number
the error has occure on line 1
```
Corection
```javascript
#int num=55
*pt(num)
```
this will print number 55. You can similarly declare string but with different prefix.
```javascript
#str helloString="hello world"
*pt(helloString)
```
## identifiers
as you can see to declare variables we are using different prefix but did you notice that there is something common in `#int` and `#str`. You guess it! the `#`
 is common. `#` is an identifier. there is another  identifier called `$` to declare a constant variable. And `*` identifies that this is an language function.

## expression
```javascript
#int expre=1+2/3*6
*pt(expre)
```
guess the output..




