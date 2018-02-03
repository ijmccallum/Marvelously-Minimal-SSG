# Mini Site Generator

>Because I just wanted a really simple static site generator.

Make a file, `index.page.js`:

```js
module.exports = function(){
    return '<p>tada!</p>';
}
```

Now run the build, `npm run build`:

`index.html`:
```html
<p>tada!</p>
```

Simple! The page.js file exports a function that returns a string. That string is then saved into a .html file of the same name. Because the page file is just JavaScript, you can do pretty much anything you want in there!

## Defining src & dist folders

Pass in the relative paths of your source and distribution folders with the `-io` flag, "in" first "out" second:

```
npm run build -io ./src/ ./dist/
```

Before: 

```
./dist/
./src/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

After:

```
./dist/
├──index.html
├──about.html
├──/funFolder/
|  ├──fun.html
./src/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

Alternativly you may wish to keep your source and distribution files together. Just pass the same value twice: 

```
npm run build -io ./docs/ ./docs/
```

Before:

```
./docs/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

After:

```
./docs/
├──index.html  - Hello!
├──index.page.js
├──about.html  - hello
├──about.page.js
├──/funFolder/
|  ├──fun.html  - HELLO!!
|  ├──fun.page.js
```

_You can even run both: `npm run build -io ./src/ ./dist/ -io ./docs/ ./docs/`_

---

## Syntax Highlighting
Different editors do this in different ways. VS Code requires [a plugin](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html), Atom does not (according to a quick google). However it happens, in most cases you will need to add the `html` tag:

```js
module.exports = function(){
    return html`
        <p>Me Syntax be Higlighted!</p>
    `; 
}
```

---

## How does it work?

I'm glad you asked - time for sudocode!

```js
//pass it a directory
goIntoFolder(folder){

    //get all the .page.js files
    pages = getAll(.page.js)
    
    pages.forEach(page){
        //run them and save the result into an html file of the same name
        page() => page.html
    }

    //now get all the folders in this folder
    folders = getAll(folders)

    folders.forEach(folder){
        //go into each of them and do the same thing
        goIntoFolder(folder)
    }
}
```

_The real code is a little different, but that's the essence of it. Have a read if you wish!_

---

## TODOs

 - [ ] a11y linting... pa11y? - do it in an example, not in this base
 - [ ] what needs to go in to publish this?