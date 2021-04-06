import React,{useEffect} from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';



function App() {
 
  useEffect(()=>{const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  })
  
  async function getData(){
    const data = await client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
    try {
      
      console.log(data)
    } catch (error) {
      console.error(error)
    }

    
  }
   getData()

  })

  

  

  
  
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
