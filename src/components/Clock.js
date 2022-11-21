import React from 'react';
import Button from './Button';

class Clock extends React.Component {
        state = {
            date: new Date(),
            locale:'bn-BD'
         };
    
    componentDidMount =()=> {
        this.clockTimer = setInterval(()=> this.tick(), 1000);
    }

    componentWillunmount = ()=>{
        clearInterval(this.clockTimer);
    }
    
    tick = ()=> {
        this.setState({
            date: new Date(),
        })
    }

    handleClick = (locale) =>{
        this.setState({
            locale,
        })
    }

    render(){

        const {date, locale} = this.state;
        // let button;
        // if(locale === 'bn-BD'){
        //     button= (
        //         <Button  change={this.handleClick} locale = 'en-US'>
        //         Click Herre
        //         </Button>
        //     );
        // }else {
        //     button = (
        //         <Button  change={this.handleClick} locale = 'bn-BD'>
        //         Click Herre
        //         </Button>
        //     )
        // }

        return (
            <div>
                <h1 classeName='headding'>
                  <span className="text"> </span> {date.toLocaleTimeString(locale)}
                  <span/>
               </h1>

               {locale === 'bn-BD'? (
                  <Button  change={this.handleClick} locale = 'en-US' />
                 
               ) : (
                <Button  change={this.handleClick} locale = 'bn-BD' />
                
               )}
               
            </div>
        )
    }
}
export default Clock;

