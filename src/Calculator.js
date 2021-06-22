import { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
      super()
      this.state = {
          operator: '+',
          num1: 0,
          num2: 0,
          total: 0
      }
  }

  setNum = (e, num) => {
    //refers to function scope rather than class? 
    this.setState({ 
      //computed value?  allows to target a var rather than a literal value
      [num]: e.target.value
    })
  }
  
  calculate = (num1, num2) => {

    let int1 = Number(num1)
    let int2 = Number(num2)
    let total = 0
    
    switch (this.state.operator){

      case '+': 
        total = int1 + int2
        break


      case '-': 
        total = int1 - int2
        break

      case '*': 
        total = int1 * int2
        break

      case '/': 
        total = int1 / int2
        break


      default:
        break

    }

    this.setState({
      total: Number(num1) + Number(num2)
    })
  }

  setOp = (e) => {
    this.setState({
      operator: e.target.value

    })
  }
    

  render() {
    
    return( 
      <div className="container">
        <h1>Add with React!</h1>
        
          <div className="add">
            <input type="number"
              name="num1"
              placeholder="Enter your first number"
              value={this.state.num1}
              onChange={ (e) => this.setNum(e, 'num1') }
            />
            <span>{this.state.operator}</span>
         
          
            <input type="number"
              name="num2"
              placeholder="Enter your first number"
              value={this.state.num2}
              onChange={ (e) => this.setNum(e, 'num2') }
            />

            <button onClick={() => this.calculate(this.state.num1, this.state.num2) }>=</button>
            <h3>{this.state.total}</h3>
            <button onClick={(e) =>this.setOp(e)} value="+">Sum</button>
            <button onClick={(e) => this.setOp(e)} value="-">Subtract</button>
            <button onClick={(e) => this.setOp(e)} value="*">Multiply</button>
            <button onClick={(e) => this.setOp(e)} value="/">Divide</button>
            
          </div> 
      </div>
    )
  }
}
