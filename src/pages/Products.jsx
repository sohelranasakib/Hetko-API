

import React, { useContext } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'


const Products = () => {
  let data = useContext(apiData)
  console.log(data);
  
  return (
   <section>
    <Container>
      <Flex>
        <div className="w-[20%]">Catagory</div>
        <div className="w-[80%]">Products</div>
      </Flex>
    </Container>
   </section>
  )
}

export default Products