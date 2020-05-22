import React from 'react'; 

// This is not a component, this is just a function
const withClass = (WrappedComponent, className) => {
    // using spread operator, try to take {...props} off 
    // to see the differences
    return props => (
        <div className={className}> 
            <WrappedComponent {...props}/>
        </div>
    );
}; 

export default withClass; 