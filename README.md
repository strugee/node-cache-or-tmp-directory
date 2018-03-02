# `cache-or-tmp-directory`

Get the cache directory or, failing that, a temporary directory

## Installation

    npm install cache-or-tmp-directory

## Usage

`cache-or-tmp-directory` takes one argument, the app name.

```js
var cacheOrTmpDir = require('cache-or-tmp-directory');

console.log(cacheOrTmpDir('myApp'));
```

## Caveats

`cache-or-tmp-directory` won't create the directory for you, just give you a path. You have to create it yourself.

Also, temporary directories are constructed as `$TMPDIR/node-cache-or-tmp-directory/$APPNAME`, where `$TMPDIR` is the operating system's temporary directory and `$APPNAME` is what you passed to the module. An important consequence of this is that there is no random component in the path, as is conventional for temporary stuff. This is because it's assumed you'll use this for caches (duh) so you actually _want_ (say) multiple concurrent processes to get the same path, or two consecutive runs to get the same path and thus share a cache.

See also [`cache-directory`'s caveats][2].

## License

LGPL 3.0+

## Author

AJ Jordan <alex@strugee.net>

 [1]: https://developer.apple.com/library/prerelease/content/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html#//apple_ref/doc/uid/TP40010672-CH10-SW1
 [2]: https://github.com/strugee/node-cache-directory#caveats
