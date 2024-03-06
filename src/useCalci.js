import { useRef, useState } from "react";

export function useCalci() {
    let [inum, setinum] = useState(" "); /* This is used to set the value of the number-screen-display */
    let [sval, setsval] = useState(" "); /* This is used to set the historical value of numbers */
    let [t1, sett1] = useState(false); /* State variable for theme change */
    let [t2, sett2] = useState(false); /* State variable for theme change */
    let [t3, sett3] = useState(false); /* State variable for theme change */
    let fone = useRef(" "); /* State variable to store the first value for calculation */
    let ftwo = useRef(" "); /* State variable to store the second value for calculation */
    let fsymbol = useRef(" "); /* State variable to store the arithmetic value for calculation */
    let r1 = useRef(null); /* State variable for checkbox 1 */
    let r2 = useRef(null); /* State variable for checkbox 2 */
    let r3 = useRef(null); /* State variable for checkbox 3 */

    let calciuse = {
        inum,
        setinum,
        sval,
        setsval,
        fone,
        ftwo,
        fsymbol,
        r1,
        r2,
        r3,
        t1, sett1,
        t2, sett2,
        t3, sett3
    }

    /* As you can see here instead of returning the state variables value one by one, we return the entire state variables 
    from a single Object called "calciuse" */
    return calciuse;
}