# osia-sass
> SASS Compiler for Osia

## Installation
```shell
$ npm install osia-sass
```

## Usage
```javascript
import osia from 'osia';
import sass from 'osia-sass';

osia.task('build', () => 
  osia.open('foo.scss')
    .then(sass())
    .then(console.log)
);
```

## Credits
| ![seanc][avatar] |
|:---:|
| [Sean Wilson][github] |

  [avatar]: https://avatars.githubusercontent.com/u/13725538?v=3&s=125
  [github]: https://github.com/seanc