import React from 'react'

function CheckOutMenu({Menudata}) {
  return (
    <div className='shadow-lg bg-body' style={{height: "110px", width: "80%", margin:"3% 10%"}}>
        <div className='d-flex justify-content-center justify-content-evenly align-items-center'>
            <div style={{width:"20%"}}>
            {/* <img style={{borderRadius: "100%", width:"70px", height:"70px"}} src={Menudata.image} className="img-fluid" alt="..." /> */}
            </div>
            <div style={{width:"60%"}}>
            <div className="card-body">
                <h6 className="card-title">{Menudata.name}</h6>
                <span className="d-flex justify-content-center justify-content-between" style={{fontSize:"1rem"}}><span style={{width:"30%"}}>Price</span><span>:</span><span style={{width:"30%", textAlign:"right"}}> ₨ {Menudata.price}</span></span>
                <span className="d-flex justify-content-center justify-content-between" style={{fontSize:"1rem"}}><span style={{width:"30%"}}>quantity</span><span>:</span><span style={{width:"30%", textAlign:"right"}}>{Menudata.quantity}</span></span>
            </div>
            </div>
        </div>
    </div>

  )
}

export default CheckOutMenu
