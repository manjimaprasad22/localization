import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import thaj from './assets/images/thaj.jpg'
import ai from './assets/images/deep.png'
import ice from './assets/images/iceland.jpg'
const BookFlip = () => {
  return (
    <div>
        
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <HTMLFlipBook width={300} height={200}>
            <div className="demoPage"><img src={thaj} alt="" style={{width:"300px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"300px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ice} alt="" style={{width:"300px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"300px", height:"200px"}} /></div>
            
        </HTMLFlipBook>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BookFlip