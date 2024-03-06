import './calcistyle.css';

/* cvalue, setcvalue - The state elements that hold the actual number values 
   sval, sesval = state elements that control the display of the historical values typed 
   t1, t2 and t3 - These are the useRef elements that is used to change the theme of the component, the appropriate 
                    class will be spplied to the component
   Handlenumpadclick - This is the event handler to the event listener "onClick" 
   fone - The first value needed for the calculator 
   ftwo - The second value needed for the calculator 
   fsymbol - The arithmetic calculation that needs to be done. (/*+-) */
export function CalciButtons({ cvalue, setcvalue, Handlenumpadclick, sval, setsval, fone, ftwo, fsymbol, t1, t2, t3 }) {
    function Btn({ cont, col = "hsl(30, 18%, 85%)", wid }) {
        return (
            <div className='pointer calcibutton' style={{ backgroundColor: col, flexBasis: wid }}>
                {cont}
            </div>
        )
    }

    let classnm = 'calcibuttonhead';
    switch (true) {
        case t1:
            classnm = 'calcibuttonhead';
            break;
        case t2:
            classnm = 'calcibuttonhead2';
            break;
        case t3:
            classnm = 'calcibuttonhead3';
            break;
        default:
            classnm = 'calcibuttonhead';
            break;
    }

    return (
        <div className={classnm} onClick={(e) => Handlenumpadclick(e, cvalue, setcvalue, setsval, fone, ftwo, fsymbol, sval)}>
            <Btn cont={7} wid={"15%"} />
            <Btn cont={8} wid={"15%"} />
            <Btn cont={9} wid={"15%"} />
            <Btn cont={"DEL"} col={"hsl(225, 21%, 49%)"} wid={"15%"} />
            <Btn cont={4} wid={"15%"} />
            <Btn cont={5} wid={"15%"} />
            <Btn cont={6} wid={"15%"} />
            <Btn cont={"+"} wid={"15%"} />
            <Btn cont={1} wid={"15%"} />
            <Btn cont={2} wid={"15%"} />
            <Btn cont={3} wid={"15%"} />
            <Btn cont={"-"} wid={"15%"} />
            <Btn cont={"."} wid={"15%"} />
            <Btn cont={0} wid={"15%"} />
            <Btn cont={"/"} wid={"15%"} />
            <Btn cont={"x"} wid={"15%"} />
            <Btn cont={"RESET"} col={"hsl(225, 21%, 49%)"} wid={"40%"} />
            <Btn cont={"="} col={"hsl(25, 98%, 40%)"} wid={"40%"} />
        </div>
    )
}