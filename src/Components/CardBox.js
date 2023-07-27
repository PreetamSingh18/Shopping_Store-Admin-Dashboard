import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBox = ({title , value, icons}) => {
 let color='bg-red-200';
   if(title==='Orders'){
    color='bg-green-200';
   }
   else if(title==='Inventory'){
    color='bg-purple-200';
   }
   else if(title==='Customer'){
    color='bg-sky-200';
   }


  return (
    <div className="border-2 w-36 h-36  flex items-center">
    {<FontAwesomeIcon icon={icons} 
      className={`ml-1 text-lg w-1/5 h-1/5 p-2 border-0 rounded-full ${color}`}
    />}

    <div className="w-full text-center items-center">
      <h4 className="text-sm font-medium text-gray-500/75">{title}</h4>
      <h6 className='font-medium text-lg'>{value}</h6>
    </div>
  </div>
  )
}

export default CardBox