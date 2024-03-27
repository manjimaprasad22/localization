import React from 'react'
import HTMLFlipBook from 'react-pageflip';

const FlipDemo = () => {
    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="demoPage" ref={ref}>
                /* ref required */
                <h1>Page Header</h1>
                <p>{props.children}</p>
                <p>Page number: {props.number}</p>
            </div>
        );
    });
  return (
    <div>
        <HTMLFlipBook width={200} height={200}>
            {/* <div className="demoPage"></div>
            <div className="demoPage"><img src={thaj} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ice} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div> */}
               <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            
        </HTMLFlipBook>
    </div>
  )
}

export default FlipDemo
