
{
    // Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result = arrays.flat();
        console.log(result);
        return result;


    }

    concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
    concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]





}