import React from 'react';

import {MyContext} from './Context';

class ContextChild extends React.Component {
    render() {
        return (
      		<MyContext.Consumer>
            {(data) => (
                    <React.Fragment>
                    <p>{data.fname}</p>
                    <p>{data.lname}</p>
                    </React.Fragment>
               )}
	            
	        </MyContext.Consumer>
        );
    }
}
    
export default ContextChild