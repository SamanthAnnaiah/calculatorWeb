import { CalciButtons } from './CalciButtons';
import { CalciValue } from './CalciValue';
import { Handlenumpadclick } from './calcilogic';
import './calcistyle.css';
import { useCalci } from './useCalci';

function App() {

  let calciuse = useCalci();

  function Handleradios() {
    switch (true) {
      case calciuse.r1.current.checked:
        document.documentElement.style.backgroundColor = 'hsl(225, 21%, 49%)';
        calciuse.sett1(true);
        calciuse.sett2(false);
        calciuse.sett3(false);
        break;
      case calciuse.r2.current.checked:
        document.documentElement.style.backgroundColor = "hsl(2, 10%, 60%)";
        calciuse.sett1(false);
        calciuse.sett2(true);
        calciuse.sett3(false);
        break;
      case calciuse.r3.current.checked:
        document.documentElement.style.backgroundColor = 'hsl(268, 75%, 9%)';
        calciuse.sett1(false);
        calciuse.sett2(false);
        calciuse.sett3(true);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="calculator">
        <div className='calcihead col1'>
          <div>
            Calci
          </div>
          <div className='col2'>
            Theme
            <span onChange={() => { Handleradios() }}>
              <input type="radio" name="tsel" id="" ref={calciuse.r1} defaultChecked />
              <input type="radio" name="tsel" id="" ref={calciuse.r2} />
              <input type="radio" name="tsel" id="" ref={calciuse.r3} />
            </span>
          </div>
        </div>
        <CalciValue cvalue={calciuse.inum} setcvalue={calciuse.setinum}
          sval={calciuse.sval} setsval={calciuse.setsval} t1={calciuse.t1} t2={calciuse.t2} t3={calciuse.t3} />
        <CalciButtons cvalue={calciuse.inum} setcvalue={calciuse.setinum} sval={calciuse.sval} setsval={calciuse.setsval}
          Handlenumpadclick={Handlenumpadclick} fone={calciuse.fone} ftwo={calciuse.ftwo} fsymbol={calciuse.fsymbol}
          t1={calciuse.t1} t2={calciuse.t2} t3={calciuse.t3} />
      </div>
    </>
  );
}

export default App;
