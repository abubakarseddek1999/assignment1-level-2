{

    // Description: Create an async function that:

    // Returns the square of a number after 1 second
    // Rejects if the number is negative

    async function squareAsync(n: number): Promise<number> {
       
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                } else {
                    resolve(n * n);
                }
            }, 1000);
        });
    }









    squareAsync(4).then(console.log);        // Output after 1s: 16
    squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

}

