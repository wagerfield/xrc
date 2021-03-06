import { Interpolation } from "../types/component"

// normalize.css v8.0.1
// github.com/necolas/normalize.css
export const normalize: Interpolation = {
  // 1. Correct the line height in all browsers.
  // 2. Prevent adjustments of font size after orientation changes in iOS.
  "html": {
    lineHeight: 1.15, // 1
    WebkitTextSizeAdjust: "100%" // 2
  },
  // Remove the margin in all browsers.
  "body": {
    margin: 0
  },
  // Render the main element consistently in IE.
  "main": {
    display: "block"
  },
  // Correct the font size and margin on h1 elements within
  // section and article contexts in Chrome, Firefox, and Safari.
  "h1": {
    fontSize: "2em",
    margin: "0.67em 0"
  },
  // 1. Add the correct box sizing in Firefox.
  // 2. Show the overflow in Edge and IE.
  "hr": {
    boxSizing: "content-box", // 1
    height: 0, // 1
    overflow: "visible" // 2
  },
  // Remove the gray background on active links in IE 10.
  "a": {
    backgroundColor: "transparent"
  },
  // 1. Remove the bottom border in Chrome 57.
  // 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  "abbr[title]": {
    borderBottom: "none", // 1
    textDecoration: "underline dotted" // 2
  },
  // Add the correct font weight in Chrome, Edge, and Safari.
  "b,strong": {
    fontWeight: "bolder"
  },
  // 1. Correct the inheritance and scaling of font size in all browsers.
  // 2. Correct the odd em font sizing in all browsers.
  "code,kbd,pre,samp": {
    fontFamily: "monospace, monospace", // 1
    fontSize: "1em" // 2
  },
  // Add the correct font size in all browsers.
  "small": {
    fontSize: "80%"
  },
  // Prevent sub and sup elements from affecting the line height in all browsers.
  "sub,sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  "sub": {
    bottom: "-0.25em"
  },
  "sup": {
    top: "-0.5em"
  },
  // Remove the border on images inside links in IE 10.
  "img": {
    borderStyle: "none"
  },
  // 1. Change the font styles in all browsers.
  // 2. Remove the margin in Firefox and Safari.
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit", // 1
    fontSize: "100%", // 1
    lineHeight: 1.15, // 1
    margin: 0 // 2
  },
  // Show the overflow in IE and Edge.
  "button,input": {
    overflow: "visible"
  },
  // Remove the inheritance of text transform in Edge, Firefox, and IE.
  // Remove the inheritance of text transform in Firefox.
  "button,select": {
    textTransform: "none"
  },
  // Correct the inability to style clickable types in iOS and Safari.
  "button,[type=button],[type=reset],[type=submit]": {
    WebkitAppearance: "button"
  },
  // Remove the inner border and padding in Firefox.
  // tslint:disable-next-line
  "button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  // Restore the focus styles unset by the previous rule.
  "button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  // Correct the padding in Firefox.
  "fieldset": {
    padding: "0.35em 0.75em 0.625em"
  },
  // 1. Correct the text wrapping in Edge and IE.
  // 2. Correct the color inheritance from fieldset elements in IE.
  // 3. Remove the padding so developers are not caught out
  //    when they zero out fieldset elements in all browsers.
  "legend": {
    boxSizing: "border-box", // 1
    color: "inherit", // 2
    display: "table", // 1
    maxWidth: "100%", // 1
    padding: 0, // 3
    whiteSpace: "normal" // 1
  },
  // Add the correct vertical alignment in Chrome, Firefox, and Opera.
  "progress": {
    verticalAlign: "baseline"
  },
  // Remove the default vertical scrollbar in IE 10+.
  "textarea": {
    overflow: "auto"
  },
  // 1. Add the correct box sizing in IE 10.
  // 2. Remove the padding in IE 10.
  "[type=checkbox],[type=radio]": {
    boxSizing: "border-box", // 1
    padding: 0 // 2
  },
  // Correct the cursor style of increment and decrement buttons in Chrome.
  "[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  // 1. Correct the odd appearance in Chrome and Safari.
  // 2. Correct the outline style in Safari.
  "[type=search]": {
    WebkitAppearance: "textfield", // 1
    outlineOffset: "-2px" // 2
  },
  // Remove the inner padding in Chrome and Safari on macOS.
  "[type=search]::-webkit-search-decoration": {
    WebkitAppearance: "none"
  },
  // 1. Correct the inability to style clickable types in iOS and Safari.
  // 2. Change font properties to inherit in Safari.
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button", // 1
    font: "inherit" // 2
  },
  // Add the correct display in Edge, IE 10+, and Firefox.
  "details": {
    display: "block"
  },
  // Add the correct display in all browsers.
  "summary": {
    display: "list-item"
  },
  // Add the correct display in IE 10+.
  "template:": {
    display: "none"
  },
  // Add the correct display in IE 10.
  "[hidden]": {
    display: "none"
  }
}
