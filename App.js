import React, {useState, useEffect} from 'react'
import Component from './Component'
import Navbar from './Navbar'
import './App.css'

const App = () => {
    const [data, setData] = useState([])
    const [newData, setNewData] = useState(data)
    const [flag, setFlag] = useState(false)
    const [uniques, setUniques] = useState(new Set())
    
    useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(data => {
            return data.json()
    })
        .then(data => {
            setData(data)
            setNewData(data)
            data.map(el => {
                setUniques(Array.from(uniques.add(el.product_type)))
            }) 
        })
        .catch(err => {
	        console.error(err);
        })
    }, [])

    const sort = (e) => {
        const currentSort =  e.target.textContent 
        setFlag(!flag) 
        if(currentSort == 'New'){
            return setNewData(data.sort((a, b) => a.id < b.id ? 1 : -1))
        }
        if(currentSort == 'Price acsended'){
            return setNewData(data.sort((a, b) => +a.price > +b.price ? 1 : -1))
          }
        if(currentSort == 'Price desended'){
            return setNewData(data.sort((a, b) => +a.price < +b.price ? 1 : -1))
          }
        if(e.target.parentNode.parentNode.classList.contains('list')){
            return setNewData(data.filter(el => el.product_type === currentSort))
          }
    }
    
    const accordion = (e) => {
        const target = e.target.parentNode.lastChild
        if(target.classList.contains('type-list')){
            target.classList.toggle('type-list')
        }
        else{
            target.classList.toggle('type-list')
        }
    }
    return (
        <>
            <Navbar sort={sort} accordion={accordion} data={data} uniques={uniques} />  
            <Component data={data} flag={flag} newData={newData} /> 
        </>
    )
}

export default App;
