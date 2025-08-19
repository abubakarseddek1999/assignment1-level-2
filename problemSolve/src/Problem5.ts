{



    function processValue(value: string | number): number {
        if (typeof value === "string") {
            console.log(`Processing string: ${value.length}`);
            return value.length;
        } else {
            const result = value * 2;
            console.log(`Processing number: ${result}`);
            return value * 2;
        }
    }


    processValue("hello"); // Output: 5
    processValue(10);      // Output: 20
}