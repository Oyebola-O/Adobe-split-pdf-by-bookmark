# Split PFD
This file contains code that splits a PDF into smaller PDFs using it's bookmark names as the new file names while maintaining each page's original page label. Acrobat actually has a function that does this however when it splits the file it resets the page labels to start from 1. I wrote this because some people prefered to have their files retain their original page label and there was no option to do that. It's easy to run and you just have to follow the instructions to set it up.

## What you need
Adobe Acrobat

## How to use
* Open the splitpd.js file and copy it's content
* Open the file you would like to split by bookmark name using acrobat
* Open the Acrobat Javascriot console using
```
[Cmd or Ctrl] + J
```
* Paste the code into the console
* Highlight the code in the console using
```
[Cmd or Ctrl] + A
```
* Run the code using 
```
[Cmd or Ctrl] + Enter
```

# Authors
HÖBO
