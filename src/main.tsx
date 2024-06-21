import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import People from './components/RenderList/test01.tsx'
import Students from './components/RenderList/test02.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test01 title='Article 1' >
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis iusto aliquam esse officiis laborum, eveniet consectetur obcaecati? Fugiat nostrum mollitia nihil ipsa veritatis assumenda odit quibusdam expedita, architecto soluta?</p>
    </Test01>
    <Test01 title='Article 2' >
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis iusto aliquam esse officiis laborum, eveniet consectetur obcaecati? Fugiat nostrum mollitia nihil ipsa veritatis assumenda odit quibusdam expedita, architecto soluta?</p>
    </Test01>
    <Test01 title='Article 3' >
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis iusto aliquam esse officiis laborum, eveniet consectetur obcaecati? Fugiat nostrum mollitia nihil ipsa veritatis assumenda odit quibusdam expedita, architecto soluta?</p>
    </Test01> */}
    {/* <Button style={{ backgroundColor: 'red',color: 'white' }}/> */}
    {/* <Item name='Apple' isPacked={true}/>
    <Item name='Orangs' isPacked={false}/>
    <Item name='Cocunat' isPacked={true}/> */}
     
    {/* <People/> */}
    <Students/>

  </React.StrictMode>
)
