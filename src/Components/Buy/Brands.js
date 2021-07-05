import React,{useState,useEffect} from 'react'
import { Checkbox,Box,TextField} from '@material-ui/core'
import brands_array from '../../utils/brands'

const Brands = ({filterdata,setFilterdata}) => {
    const [brands,setbrands]=useState(brands_array)
    const [input,setInput]=useState('');

    useEffect(()=>{
        const filterbrands=brands_array.filter((brand)=>{
            if(brand.toLowerCase().includes(input.toLowerCase())){
                return brand;
            }
        })
        setbrands(filterbrands)
    },[input])

    const handleChange=((e)=>{
        if(e.target.checked){
            const clone=filterdata.brand
            clone.push(e.target.name.toLowerCase())
            setFilterdata({...filterdata,brand:clone})
        }
        else{
            setFilterdata({...filterdata,brand:filterdata.brand.filter((b)=>b.toLowerCase()!==e.target.name.toLowerCase())})
        }
    })
    
    return (
        <div >
            <p>Search By Brand</p>
            <TextField onChange={(e)=>setInput(e.target.value)} size="small" variant="filled" placeholder="Type here" name="brands"></TextField>
            <div style={{width: '160px',height: '310px',overflow:'scroll'}}>
                {brands.map((brand,index)=>(
                    <Box item display="flex" flexDirection="row" key={brand}>
                        <p>{brand}</p>
                        <Checkbox  onChange={handleChange} name={brand}></Checkbox>
                        {/* <input type="radio" onChange={handleChange} id={index} name="brand"></input> */}
                        {/* <Radio onChange={handleChange} id={index} name="brand"></Radio> */}
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default Brands
