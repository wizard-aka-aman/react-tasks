import './App.css';
import AddChildComponent from './Component/AddChildComponent';
import Counter from './Component/Counter';
import DisplayArray from './Component/DisplayArray';
import EnableDisableButton from './Component/EnableDisableButton';
import SearchFilter from './Component/SearchFilter';
import ShowHideElement from './Component/ShowHideElement';
import SimpleJSX from './Component/SimpleJSX';
import SumTwoNumbers from './Component/SumTwoNumbers';
import TwoWayBinding from './Component/TwoWayBinding';

function App() {
  return (
    <>
    <SimpleJSX></SimpleJSX>
    <hr></hr>
    <DisplayArray></DisplayArray>
    <hr></hr>
    <ShowHideElement></ShowHideElement>
    <hr></hr>
    <EnableDisableButton/>
    <hr></hr>
    <TwoWayBinding></TwoWayBinding>
    <hr></hr>
    <AddChildComponent></AddChildComponent>
    <hr></hr>
    <SumTwoNumbers></SumTwoNumbers>
    <hr></hr>
    <Counter></Counter>
    <hr></hr>
    <SearchFilter></SearchFilter>
    <hr></hr>
    </>
  );
}

export default App;
