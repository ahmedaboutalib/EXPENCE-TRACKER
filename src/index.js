import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

class Gestion extends React.Component {
  constructor() {
    super()
    this.state = {
      balance: 0,
      income: 0,
      expence: 0,
      title: "",
      amount:0,
      nb:0,
      history:[]
    }


  }
  render() {

    return (

      <div className="App">
        <h2>Expense Tracker</h2>
        <div className='hidder' >
          <h3 className='left-elm'>YOUR BALANCE</h3>
          <h4 id='balance' className='left-elm'>{this.state.balance}$</h4>
        </div>

        <div className='board' >
          <div className='income' >
            <p className='board-title' >INCOME</p>
            <p id='income' >{this.state.income}$</p>
          </div>
          <div className='expence' >
            <p className='board-title' >EXPENCE</p>
            <p id='expence' >{this.state.expence}$</p>
          </div>
        </div>
        <div className='history' >
          <h3>history</h3>
          <div className='affichage' >
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>
                  </th>
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">amount</th>
                  <th scope="col">time</th>
                  <th scope="col">type</th>
                </tr>
              </thead>
              <tbody className="customtable">
                {this.state.history.map(x => {
                  return (

                    <tr>
                      <th>
                        <label className="customcheckbox">
                          <input value={x.id} type="button" className="listCheckbox" />
                          <span className="checkmark"></span>
                        </label>
                      </th>
                      <td>{x.id}</td>
                      <td>{x.title}</td>
                      <td>{x.amount}$</td>
                      <td>{x.time}</td>
                      <td>{x.type}</td>
                    </tr>
                  ) })}

              </tbody>
            </table>

          </div>
        </div>
        <div className="center">
          <h1>ADD TRANSACTION</h1>
          <form>
            <div className="inputbox">
              <input onChange={(e) => this.handlechange1(e)} value={this.state.title} type="text" required="required" />
              <span>title</span>
            </div>
            <div className="inputbox">
              <input onChange={(e) => this.handlechange2(e)} value={this.state.amount} type="number" required="required" />
              <span>amount</span>
            </div>
            <div className="inputbox">
              <input type="button" onClick={() => this.vadide()} value="ADD" />
            </div>
          </form>
        </div>

      </div>
    )
  }
  handlechange1(e) {
    this.setState({ title: e.target.value })
  }
  handlechange2(e) {
    this.setState({ amount: e.target.value })
  }
  vadide() {
    if(this.state.amount>0){
      this.setState({income:Number(this.state.income)+Number(this.state.amount)})
      this.setState({balance:Number(this.state.balance)+Number(this.state.amount)})
    }
    else{
      this.setState({expence:Number(this.state.expence)+Number(this.state.amount)})
      this.setState({balance:Number(this.state.balance)+Number(this.state.amount)})
    }
    this.setState({nb:Number(this.state.nb)+1})
    let v_type=""
    if(this.state.amount>0){
      v_type="INCOME"
    }else{
      v_type="EXPENCE"
    }
    this.setState({
      history: [...this.state.history,
      {id:this.state.nb+1,title: this.state.title, amount: this.state.amount, time: Date().toLocaleString(),type:v_type }]
    })


    }



  




}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gestion />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
