import React, { useState } from "react";

const Declearative01:React.FC = () => {
    const [data,setData] = useState<string>('');
    const [status,setStatus] = useState<'typing' | 'success' | 'submiting' | 'error' >('typing');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submiting');

        try{
            await submitForm();
            setStatus('success');   
        }catch(e){
            setStatus('error');
        }

    }

    const submitForm = () => {
        return new Promise<void>((res,rej)=> {
            setTimeout(() => {
                let inputData = data.toLowerCase();
                if(inputData === "kok"){
                  res();
                }else{
                  rej(new Error('error'));
                }
              
            }, 1500);
        });

    }

    const handleChange = (e:any) => {
        setStatus('typing');
        setData(e.target.value)
    }

    return (
        <div>
            <form style={{ display: 'flex',flexDirection: "column",width: "500px"}} onSubmit={handleSubmit}>
                <input onInput={handleChange} style={{ padding: '10px' }} type="text" name="title" id="" disabled={status === 'submiting'}  placeholder="Input Anything..."  />
                <button type="submit" style={{ 
                    width: "200px",
                    margin: 'auto',
                    marginTop : '20px',
                    cursor: 'pointer',
                    padding: '10px',
                }}>Submit</button>
                {  status ==='success' && <p style={{ color : 'green',fontWeight : 'bold' }}>Success</p> }
                {  status === 'error' && <p style={{ color : 'red',fontWeight : 'bold' }}>Error</p>}

                
            </form>
        </div>
    );
}


export default Declearative01;