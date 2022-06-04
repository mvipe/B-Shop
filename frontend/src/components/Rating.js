import React from 'react'

function Rating({value,text,color}) {
   

    var totalRat=[]
    for(var i=0;i<5;i++){
        
       totalRat.push(
       <span style={{color}} className={
        value>=1 ? 'fas fa-star' : 
        value>=0.5 ? 'fas fa-star-half-alt' : "far fa-star"
        }>
        </span>
    )
       value--
    };

    totalRat=totalRat
  return (
    <div className="rating">
       {totalRat}

       <span>{text && text}</span>
    </div>
  )
}

export default Rating