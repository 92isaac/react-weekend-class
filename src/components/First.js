import React from 'react';


const esther={
    textAlign: 'justify',
    color: 'red', 
    padding: "20px"
}

const First=()=>{
    return( <div className='wrapper' style={{border:'solid', borderRadius:'15px 0 15px 0', width:"50%", margin:"10px auto"}}>
        <div className='wrap' style={esther}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptates.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores distinctio hic, neque nisi maxime odit, necessitatibus error quidem, recusandae veritatis natus nostrum magnam culpa mollitia ratione doloremque accusantium dolore incidunt expedita eveniet. Minima ut officia doloremque fugiat quia ab exercitationem!</p>
        </div>
    </div>)
}


export default First