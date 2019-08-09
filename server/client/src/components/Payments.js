import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import PaystackButton from 'react-paystack';

class Payments extends Component{
    state = {
        email: "foobar@example.com",  // customer email
        amount: 10000 //equals NGN100,
    }
    callback = (response) => {
        console.log(response);
        this.props.handleToken(response) // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    render() {
        return (
          <div>
            <p>
              <PaystackButton
                text="Add Credits"
                class="waves-effect waves-light btn"
                callback={this.callback}
                close={this.close}
                disabled={false}
                embed={false} 
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={process.env.REACT_APP_PAYSTACK_KEY}
                tag="button"
              />
            </p>
          </div>
        );
      }
}

export default connect(null,actions)(Payments);