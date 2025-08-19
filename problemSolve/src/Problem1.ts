{



    function formatString(input: string, toUpper: boolean = true): string {
        if (toUpper) {
            const result = input.toUpperCase();
            console.log(result);
            return result;
        } else {
            const result = input.toLowerCase();
            console.log(result);
            return result;
        }
    }

    // Test cases
    formatString("Hello");          // Output: "HELLO"
    formatString("Hello", true);   // Output: "HELLO"
    formatString("Hello", false);  // Output: "hello"




}