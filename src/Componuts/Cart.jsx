import React from 'react'

export default function Cart({ data, sendData, decreament, remove }) {
    console.log(data);
    let i = 1;
    return <>
    <div className="container">
        <table className='table text-center'>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">price</th>
                    <th scope="col">img</th>
                    <th scope="col">quantity</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            
            { data.map((ele, ind) =>
                <tbody key={ind}>
                    <tr>
                        <th scope="row">{i++}</th>
                        <td>{ele.title}</td>
                        <td>$ {ele.price}</td>
                        <td><img height={"75px"} src={ele.image} /></td>
                        <td><div className="row">
                            <button onClick={()=>{
                                sendData(ele) 
                            }} className=' col-md-4 badge bg-info'><i class="fa-solid fa-plus"></i></button>
                            <div className='col-md-4'>{ele.quantity}</div>
                            <button onClick={()=>{
                                decreament(ele)
                            }} className='col-md-4 border-none badge bg-info'><i class="fa-solid fa-minus"></i></button>
                        </div>
                        </td>
                        <td onClick={() => { remove(ele) }} class="border border-0"><button className='bg-danger text-white'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>

                </tbody>

            )}
        </table>
</div>
    </>
}
