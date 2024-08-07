import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.tsx'
import People from './components/RenderList/test01.tsx'
import Students from './components/RenderList/test02.tsx'
import StateDemo from './components/state/test01.tsx'
import Form from './components/state/test02.tsx'
import SetNumber from './components/state/test03.tsx'
import Gallery from './components/state/test04.tsx'
import ShowImg from './components/state/test05.tsx'
import ChangeText from './components/state/test06.tsx'
import ObjectState from './components/state/test07.tsx'
import ArrayState from './components/state/test08.tsx'
import ObjState from './components/state/test07-1.tsx'
import ObjStateSingleHandleAlert from './components/state/test07-2.tsx'
import Declearative01 from './components/declearativelyUI/test01.tsx'
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
    {/* <Students/> */}

    {/* <StateDemo/> */}

    {/* <Form/> */}
   {/* <SetNumber/> */}

   {/* <Gallery/> */}
   {/* <ShowImg/> */}
   {/* <ChangeText/> */}
   {/* <ObjectState/> */}
   {/* <ObjState/> */}
   {/* <ObjStateSingleHandleAlert/> */}
   {/* <ArrayState/> */}

   {/* DeclearativeLy UI */}
   <Declearative01/>
   
  </React.StrictMode>
)
