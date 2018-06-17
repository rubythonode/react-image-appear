# react-image-appear [![npm version](https://badge.fury.io/js/react-image-appear.svg)](https://badge.fury.io/js/react-image-appear) [![NPM Downloads](https://img.shields.io/npm/dm/react-image-appear.svg?style=flat-square)](https://www.npmjs.com/package/react-image-appear)
ReactJS component to make images appear with transition as they load.
> Wraps an ``img`` within a placeholder element and adds a gif loader in between. No more ugly-looking progressively loading images!

![react-image-appear](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/intro.gif)

<br/>

## Installation

#### via npm

```html
npm install react-image-appear --save
```

<br/>

## Usage

Import the component and provide the ``src`` with any of the available [props](#props).

```javascript
import ReactImageAppear from 'react-image-appear';

<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    animation="zoomIn"
    animationDuration="1s"
/>
```

<br/>

## Props

#### ``src {string} | required``
The image source.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
/>
```

<br/>

#### ``loader {string}``
Adds a custom loader to the component. When not provided, applies a default one.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
/>
```

![loader](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/loader.gif)

<br/>

#### ``loaderStyle {object}``
Adds custom styling to the loader.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    loaderStyle={{ border: "2px solid red" }}
/>
```

<br/>

#### ``loaderClass {string}``
Adds CSS classes to the loader.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    loaderClass="my-loader"
/>
```

<br/>

#### ``placeholder {boolean | string}``
Adds a placeholder background to the component.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    placeholder
/>
```

![placeholder](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/placeholder.gif)

You can override the default placeholder background and add your own by passing an image URL to this prop.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    placeholder="http://getuikit.com/docs/images/placeholder_600x400.svg"
/>
```

![placeholder-custom](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/placeholder-custom.gif)

<br/>

#### ``placeholderStyle {object}``
Adds custom styling to the placeholder.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    placeholderStyle={{ border: "2px solid red", backgroundColor: 'black' }}
/>
```

<br/>

#### ``placeholderClass {string}``
Adds CSS classes to the placeholder.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    loaderClass="my-placeholder"
/>
```

<br/>

#### ``animation {string} | Default: fadeIn``
Add a CSS3 powered animation to the image as it appears.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    animation="bounceIn"
/>
```

![animation](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/animation.gif)

react-image-appear has the following built-in CSS3 animations - 

##### ``fadeIn (default)``

##### ``fadeInUp``

##### ``fadeInRight``

##### ``fadeInDown``

##### ``fadeInLeft``

##### ``bounceIn``

##### ``bounceInUp``

##### ``bounceInRight``

##### ``bounceInDown``

##### ``bounceInLeft``

##### ``flipInX``

##### ``flipInY``

##### ``zoomIn``

##### ``blurIn``

##### ``blurInUp``

##### ``blurInRight``

##### ``blurInDown``

##### ``blurInLeft``

##### ``fillIn``

<br/>

#### ``animationDuration {string} | Default: 700ms``

Specifies the animation duration for the image to appear.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    animation="bounceIn"
	animationDuration="1s"
/>
```

<br/>

#### ``easing  {string} | Default: ease-in-out``

Specifies the timing-function for the CSS3 powered animation.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    animation="bounceIn"
	easing="ease-in"
/>
```

<br/>

#### ``showLoader {boolean} | Default: true``
Specifies whether to show the loader or not.

```html
<ReactImageAppear 
    src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg"
    animation="bounceIn"
	showLoader={false}
/>
```

![show-loader](https://github.com/ArunMichaelDsouza/react-image-appear/raw/master/demo/images/show-loader.gif)

<br/>

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

