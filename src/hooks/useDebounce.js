// import { useState } from "react";
// import { useEffect } from "react";

// export const useDebounce = (value, delay = 400) => {
//     const [debouncedValue, setDebouncedValue] = useState();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay)

//         return clearTimeout(timer);
//     }, [value, delay])

//     return debouncedValue;
// }