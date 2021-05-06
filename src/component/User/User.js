import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greeting;
    if(familiar === true){
        greeting = <p>Welcome, My Friend</p>
    }
    else{
        greeting = <p>Who The Hell Are You?</p>
    }

    // javascript ternary Operator
    // const greeting = familiar ? 'hello' : 'gello';
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ?  <p>I will Buy Food For You</p> : <p>Lets eat his his whose whose</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p> join Facebook</p> 
                }
            </div>
        </div>
    );
};

export default User;