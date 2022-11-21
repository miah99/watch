import React from 'react';

class Button extends React.Component{
    
    render(){
        const {change, locale} = this.props;

        return (

          <button type= 'button' onClick={() => change(locale)}>
            {locale === 'bn-BD' ? 'Click Here' : 'চাপ দিন '}
          </button>
        )
    }
}

export default Button;