Demonstrates Webpack processing the handlebars runtime when it only needs to be
a be a build-time dependency.

## to demonstrate

``` bash
npm install
npm run build
```

This is the output generated:

```
> handlebars-loader-processed@1.0.0 build <absolute path...>/handlebars-loader-processed
> webpack --profile --display-modules

Hash: 027b1f73ce5aa9d66343
Version: webpack 2.2.1
Time: 343ms
     Asset       Size  Chunks             Chunk Names
   main.js    2.53 kB       0  [emitted]  main
index.html  114 bytes          [emitted]  
   [0] ./index.js 20 bytes {0} [built]
        factory:16ms building:13ms = 29ms
Child html-webpack-plugin for "index.html":
       [0] ./~/handlebars/dist/cjs/handlebars/utils.js 10.2 kB {0} [built]
           [] -> factory:8ms building:34ms = 42ms
       [1] ./~/handlebars/dist/cjs/handlebars/exception.js 4.58 kB {0} [built]
           [] -> factory:7ms building:27ms = 34ms
       [2] ./~/handlebars/dist/cjs/handlebars/base.js 8.38 kB {0} [built]
           [] -> factory:6ms building:15ms dependencies:3ms = 24ms
       [3] ./~/handlebars/runtime.js 167 bytes {0} [built]
           [] -> factory:3ms building:3ms = 6ms
       [4] ./~/handlebars/dist/cjs/handlebars.runtime.js 4.59 kB {0} [built]
           [] -> factory:2ms building:10ms = 12ms
       [5] ./~/handlebars/dist/cjs/handlebars/decorators.js 990 bytes {0} [built]
           [] -> factory:57ms building:10ms = 67ms
       [6] ./~/handlebars/dist/cjs/handlebars/decorators/inline.js 2.68 kB {0} [built]
           [] -> factory:11ms building:10ms dependencies:1ms = 22ms
       [7] ./~/handlebars/dist/cjs/handlebars/helpers.js 2.91 kB {0} [built]
           [] -> factory:57ms building:6ms = 63ms
       [8] ./~/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js 3.77 kB {0} [built]
           [] -> factory:10ms building:5ms dependencies:1ms = 16ms
       [9] ./~/handlebars/dist/cjs/handlebars/helpers/each.js 8.1 kB {0} [built]
           [] -> factory:11ms building:8ms dependencies:1ms = 20ms
      [10] ./~/handlebars/dist/cjs/handlebars/helpers/helper-missing.js 1.98 kB {0} [built]
           [] -> factory:11ms building:10ms dependencies:0ms = 21ms
      [11] ./~/handlebars/dist/cjs/handlebars/helpers/if.js 3.33 kB {0} [built]
           [] -> factory:11ms building:11ms dependencies:0ms = 22ms
      [12] ./~/handlebars/dist/cjs/handlebars/helpers/log.js 2.5 kB {0} [built]
           [] -> factory:12ms building:11ms = 23ms
      [13] ./~/handlebars/dist/cjs/handlebars/helpers/lookup.js 846 bytes {0} [built]
           [] -> factory:12ms building:11ms = 23ms
      [14] ./~/handlebars/dist/cjs/handlebars/helpers/with.js 3 kB {0} [built]
           [] -> factory:13ms building:13ms dependencies:0ms = 26ms
      [15] ./~/handlebars/dist/cjs/handlebars/logger.js 3.83 kB {0} [built]
           [] -> factory:58ms building:11ms dependencies:0ms = 69ms
      [16] ./~/handlebars/dist/cjs/handlebars/no-conflict.js 1.57 kB {0} [built]
           [] -> factory:9ms building:65ms = 74ms
      [17] ./~/handlebars/dist/cjs/handlebars/runtime.js 33.6 kB {0} [built]
           [] -> factory:9ms building:61ms dependencies:2ms = 72ms
      [18] ./~/handlebars/dist/cjs/handlebars/safe-string.js 1.15 kB {0} [built]
           [] -> factory:7ms building:19ms = 26ms
      [19] (webpack)/buildin/global.js 509 bytes {0} [built]
           [] -> factory:20ms building:19ms = 39ms
      [20] ./~/html-webpack-plugin/lib/loader.js!./index.handlebars 563 bytes {0} [built]
            factory:42ms building:110ms = 152ms
```

This is the expected output:

```
> handlebars-loader-processed@1.0.0 build /Users/logan/dev/handlebars-loader-processed
> webpack --profile --display-modules

Hash: 027b1f73ce5aa9d66343
Version: webpack 2.2.1
Time: 343ms
     Asset       Size  Chunks             Chunk Names
   main.js    2.53 kB       0  [emitted]  main
index.html  114 bytes          [emitted]  
   [0] ./index.js 20 bytes {0} [built]
        factory:16ms building:13ms = 29ms
Child html-webpack-plugin for "index.html":
      [0] ./~/html-webpack-plugin/lib/loader.js!./index.handlebars 563 bytes {0} [built]
            factory:42ms building:110ms = 152ms
```
