import './calcistyle.css';

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