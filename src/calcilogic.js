function Handlenumpadclick(e, cvalue, setcvalue, setsval, fone, ftwo, fsymbol, sval) {
    let mvalue = e.target.textContent.trim();
    if (
        e.target.classList.contains("calcibutton") &&
        mvalue !== "+" &&
        mvalue !== "-" &&
        mvalue !== "/" &&
        mvalue !== "x" &&
        mvalue !== "=" &&
        mvalue !== "DEL" &&
        mvalue !== "RESET"
    ) {
        if (e.target.classList.contains("calcibutton")) {
            setcvalue((val) => val.concat(e.target.textContent.trim()));
        }
    }
    else {
        cvalue = cvalue.trim();
        fone.current = fone.current.trim();
        ftwo.current = ftwo.current.trim();
        fsymbol.current = fsymbol.current.trim();
        sval = sval.trim();

        if (mvalue === "RESET") {
            setcvalue(" ");
            setsval(" ");
            fone.current = " ";
            ftwo.current = " ";
            fsymbol.current = " ";
        }
        if (mvalue === "DEL") {
            setcvalue((val) => val.length > 1 ? val.slice(0, -1) : " ");
        }
        if (mvalue === "+" || mvalue === "-" || mvalue === "/" || mvalue === "x") {
            if (fone.current) {
                if (fone.current !== cvalue) {
                    fone.current = cvalue;
                }
            }
            if (fone.current && fsymbol.current) {
                let symbol = fsymbol.current;
                ftwo.current = cvalue;
                let n1 = Number(fone.current).toFixed(2);
                let n2 = Number(ftwo.current).toFixed(2);
                let n3 = 0;
                let k1 = calcer(symbol, n1, n2, n3);
                fone.current = k1.toString().trim();
                setsval(fone.current.concat(mvalue));
                fsymbol.current = mvalue;
                setcvalue(" ");
            }
            if (!fsymbol.current && !fone.current) {
                fone.current = cvalue.trim();
                fsymbol.current = mvalue.trim();
                setsval(cvalue.trim().concat(mvalue.trim()));
                setcvalue(() => " ")
            }
            if (!fsymbol.current && fone.current) {
                ftwo.current = cvalue.trim();
                fsymbol.current = mvalue.trim();
                setsval(cvalue.trim().concat(mvalue.trim()));
                setcvalue(() => " ")
            }

        }
        if (mvalue === "=") {
            ftwo.current = cvalue;
            if (document.querySelector(".calcibtns").textContent.trim()) {
                ftwo.current = document.querySelector(".calcibtns").textContent.trim();
            }
            setsval(sval.trim().concat(cvalue.trim()));
            if (fone.current.trim() && ftwo.current.trim()) {
                let symbol = fsymbol.current.trim();
                let n1 = Number(fone.current.trim()).toFixed(2);
                let n2 = Number(ftwo.current.trim()).toFixed(2);
                let n3 = 0;
                let k1 = calcer(symbol, n1, n2, n3);
                setcvalue(k1.toString());
            }
        }
    }

    function calcer(symbol, n1, n2, n3) {
        switch (symbol) {
            case "+":
                n3 = Number(n1) + Number(n2);
                fone.current = n3.toString();
                ftwo.current = " ";
                fsymbol.current = " ";
                break;

            case "-":
                n3 = Number(n1) - Number(n2);
                fone.current = n3.toString();
                ftwo.current = " ";
                fsymbol.current = " ";
                break;

            case "/":
                n3 = Number(n1) / Number(n2);
                fone.current = n3.toString();
                ftwo.current = " ";
                fsymbol.current = " ";
                break;

            case "x":
                n3 = Number(n1) * Number(n2);
                fone.current = n3.toString();
                ftwo.current = " ";
                fsymbol.current = " ";
                break;

            default:
                n3 = 0;
                break;
        }
        return n3;
    }
}

export { Handlenumpadclick };