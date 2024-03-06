import './calcistyle.css';

/* cvalue, setcvalue - The state elements that hold the actual number values 
   sval, sesval = state elements that control the display of the historical values typed 
   t1, t2 and t3 - These are the useRef elements that is used to change the theme of the component, the appropriate 
                    class will be spplied to the component */

export function CalciValue({ cvalue, setcvalue, sval, setsval, t1, t2, t3 }) {
    let classnm = 'calcivalues';
    switch (true) {
        case t1:
            classnm = 'calcivalues';
            break;
        case t2:
            classnm = 'calcivalues2';
            break;
        case t3:
            classnm = 'calcivalues3';
            break;
        default:
            classnm = 'calcivalues';
            break;
    }
    return (
        <>
            <div className='col1'>
                {sval}
            </div>
            <div className={`calcibtns ${classnm}`}>
                <p>{cvalue}</p>
            </div>
        </>
    )
}