import React, {useEffect} from 'react';
import './App.css';

const Component = ({newData,flag}) => {
    
    useEffect(() => {
        return newData
    }, [flag])

    return (
        <div className="container">
          {
              newData.map(el => {
                  const {id, image_link, price, name, description} = el
                  return (
                      <div className="container-block" key={id}>
                          <img src={image_link} alt="" />
                          <h3>{name}</h3>
                          <h4>${price}</h4>
                          <div className="show">
                            <p className="text">{description}</p>
                          </div>
                      </div>
                  )
              })
          }
        </div>
    )}
export default Component