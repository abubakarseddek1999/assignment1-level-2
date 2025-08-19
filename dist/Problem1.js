"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    formatString("Hello"); // Output: "HELLO"
    formatString("Hello", true); // Output: "HELLO"
    formatString("Hello", false); // Output: "hello"
}
