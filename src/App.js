import "./App.css"
import Prac4 from "./Prac4.js"

var btnMonth=0;

function App() {
  // var buttons= document.getElementsByTagName("button");

  // for (var i = 0; i < 12; i += 1) {
  //     buttons[i].onclick = function(e) {
  //     btnMonth= this.id;  }
  // }

  function btnClick1(){ btnMonth="1" }
  function btnClick2(){ btnMonth="2" }
  function btnClick3(){ btnMonth="3" }
  function btnClick4(){ btnMonth="4" }
  function btnClick5(){ btnMonth="5" }
  function btnClick6(){ btnMonth="6" }
  function btnClick7(){ btnMonth="7" }
  function btnClick8(){ btnMonth="8" }
  function btnClick9(){ btnMonth="9" }
  function btnClick10(){ btnMonth="10" }
  function btnClick11(){ btnMonth="11" }
  function btnClick12(){ btnMonth="12" }
  console.log("month"+ btnMonth);
  console.log(btnMonth);

  return( 
    <>
      <div>
        <h1 id="TitleMonth">Jan</h1>

        <button id="1" onClick={btnClick1()}>1월</button>
        <button id="2" onClick={btnClick2()}>2월</button>
        <button id="3" onClick={btnClick3()}>3월</button>
        <button id="4" onClick={btnClick4()}>4월</button>
        <button id="5" onClick={btnClick5()}>5월</button>
        <button id="6" onClick={btnClick6()}>6월</button>
        <button id="7" onClick={btnClick7()}>7월</button>
        <button id="8" onClick={btnClick8()}>8월</button>
        <button id="9" onClick={btnClick9()}>9월</button>
        <button id="10" onClick={btnClick10()}>10월</button>
        <button id="11" onClick={btnClick11()}>11월</button>
        <button id="12" onClick={btnClick12()}>12월</button>
      </div>

    <Prac4 month={btnMonth}/>
      
    </>
  )
}

export default App;