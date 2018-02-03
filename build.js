const fs = require('fs');
const minify = require('html-minifier').minify;
const minOps = {collapseWhitespace: true};

//A list of directories in which to run the build
const puts = [
    { in: './docs/', out: './docs/' },
    { in: './example 2/src/', out: './example 2/dist/' }
]; //all must end in a slash

function errorHandler(err){
    if (err) { console.log('err', err); }
}

/**
 * Takes an address
 * Returns true if that address points to a folder
 */
function isDirectory(sourceAddres){
    return fs.lstatSync(sourceAddres).isDirectory();
}

/**
 * Takes an array of addresses (files / folders / anything!)
 * Returns an array of page addresses
 */
function pages(addresses){
    var pages = [];
    addresses.forEach(function(address){
        if (address.indexOf('.page.js') !== -1) {
            pages.push(address);
        }
    }); 
    return pages;
}

/**
 * Takes an array of addresses (files / folders / anything!)
 * Returns an array of folder addresses
 */
function folders(addresses){
    var folders = [];
    addresses.forEach(function(address){
        if (isDirectory(address)){
            folders.push(address + '/');
        } 
    });
    return folders;
}

/**
 * Takes an address of a folder
 * Returns an array of the items within that folder 
 */
function contents(dir){
    return fs.readdirSync(dir);;
}

/**
 * Takes an address (dir) and an array of items (files / folders)
 * Returns an array of addresses (for each item)
 */
function contentAddresses(dir, items){
    var returnAdds = [];
    items.forEach(function(item){
        returnAdds.push(dir + item + '');
    });
    return returnAdds;
}

/**
 * Takes a page filename
 * Returns the dist filename
 */
function srcToDistName(srcFileName){
    return srcFileName.replace('.page.js', '.html');
}

/**
 * Takes a source address (meant for pages)
 * Returns the dist address
 */
function srcToDistAddress(srcAddress, siteConfig){
    return srcAddress.replace(siteConfig.in, siteConfig.out);
}

/**
 * Takes the address of a page src
 * Returns the markup generated by said page src
 */
function generateMarkup(pageAddress){
    var generator = require(pageAddress);
    return minify(generator(), minOps);
}

//=================================================== Leaving pure functions behind now
//=================================================== Moving into the land of flow control

/**
 * Takes an array of src page addresses and the site configuration object
 * Creates the dist address, generates the dist markup, saves the markup into the dist address 
 */
function buildPages(pageAddressList, siteConfig){
    pageAddressList.forEach(function(srcPageAddress){
        var distFilename = srcToDistName(srcPageAddress);
        var distFileAddress = srcToDistAddress(distFilename, siteConfig);
        fs.writeFile(distFileAddress, generateMarkup(srcPageAddress), errorHandler); 
    });
}

/**
 * Takes a folder address
 * Makes it if it doesn't exist already
 */
function ensureFolderAddress(folderAddress){
    if (!fs.existsSync(folderAddress)) {
        fs.mkdirSync(folderAddress);
    }
    return folderAddress;
}

/**
 * Recursivly steps through all the child folders
 * Takes a folder address (dir)
 * Gets the pages in the given dir and runs the page builder on them
 * Gets the folders within the given dir
 * Passes each folder to itself.
 */
function stepIntoDir(dir, siteConfig){
    var dirContents = contents(dir);

    var pageList = pages(dirContents);
    var pageAddressList = contentAddresses(dir, pageList);
    buildPages(pageAddressList, siteConfig);

    var fullAddressList = contentAddresses(dir, dirContents);
    var folderAddressList = folders(fullAddressList);
    folderAddressList.forEach(function(folderAddress){
        ensureFolderAddress(srcToDistAddress(folderAddress, siteConfig));
        stepIntoDir(folderAddress, siteConfig);
    });
};

/**
 * Iterate over every given input / output!
 * This is the beginning :)
 */
puts.forEach(function(put){
    stepIntoDir(put.in, put);
});