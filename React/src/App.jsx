import { useState } from "react";
/*

*/
const App = () => {
  const [Number, setNumber]=useState(0);
  const plus=()=>{
    setNumber(Number+1);
  }
  const minus=()=>{
    setNumber(Number-1);
  }


/////////////////////////////
const [data,setData]=useState({name:"",age:"", mobile:"",email:"Email"});

const inputOnChange=(e)=>{
  let key=e.target.name;
  let value=e.target.value;
  setData(data=>({
    ...data,
    [key]:value
  }))
}

const saveData = (e)=>{
  e.preventDefault();
  alert(JSON.stringify(data));
}



  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center fw-bold"> {Number} </h1>
              <button className="btn btn-primary w-100 m-2" onClick={()=>{plus()}} >+</button><br/>
              <button className="btn btn-secondary w-100 m-2" onClick={()=>{minus()}} >-</button>
              <p className="card-text">Some quick the content.</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center fw-bold">User Form</h1>
              <form action="" onSubmit={saveData}>
                <label className="m-2">Name: {data.name} </label>
                <input name="name" className="form-control m-2" onChange={(e)=>{inputOnChange(e)}}
                type="text"/>

                <label className="m-2">Age: {data.age} </label>
                <input name="age" className="form-control m-2" onChange={(e)=>{inputOnChange(e)}}
                type="text"/>

                <label className="m-2">Mobile: {data.mobile} </label>
                <input name="mobile" className="form-control m-2" onChange={(e)=>{inputOnChange(e)}}
                type="text"/>

                <label className="m-2">Email: {data.email} </label>
                <input name="email" className="form-control m-2" onChange={(e)=>{inputOnChange(e)}}
                type="text" placeholder="Enter email"/>

                <input type="submit" className="btn btn-primary m-2"/>
              </form>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default App;