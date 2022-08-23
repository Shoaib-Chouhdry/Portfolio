import React from 'react'
import './Languages.css'
import Cards from './Cards'

const Languages = () => {
  const lang=
  [
    {
        img1 :'./html.png',
        intro:'HTML is the standard markup language for documents designed to be displayed in a web browser',

     },
     {
       img :'./css.png',
       intro:'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML',

    },
    {
     img :'./java.png',
     intro:'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS',

  },
  {
   img :'./csharp.png',
   intro:'# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.',

},
{
 img :'./mysql.jpg',
 intro:'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system',

},


  ];
  
  return (
    <div >

    <div className='langintro'> 

      <h1 className='lan'>Languages</h1>
      <h3>Here are the following computer languages </h3>
       <h3>in which i have command</h3>
      
  
   </div>
 <div className='cards'>
    
     <Cards
        img={lang[0].img1}
        intro={lang[0].intro}
     />
     <Cards 
        img={lang[1].img}
        intro={lang[1].intro}
     />
     <Cards
        img={lang[2].img}
        intro={lang[2].intro}
     />
      </div>

    <div className='cards'>
     <Cards
        img={lang[3].img}
        intro={lang[3].intro}
     />
     <Cards
        img={lang[4].img}
        intro={lang[4].intro}
     />
     
     </div>
    </div>

  )
  
}

export default Languages
