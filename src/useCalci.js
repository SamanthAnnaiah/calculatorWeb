import { useRef, useState } from "react";

export function useCalci() {
    let [inum, setinum] = useState(" ");
    let [sval, setsval] = useState(" ");
    let [t1, sett1] = useState(false);
    let [t2, sett2] = useState(false);
    let [t3, sett3] = useState(false);
    let fone = useRef(" ");
    let ftwo = useRef(" ");
    let fsymbol = useRef(" ");
    let r1 = useRef(null);
    let r2 = useRef(null);
    let r3 = useRef(null);

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
    return calciuse;
}