import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BooksArr = [
  {
    author : 'joe biden',
    title : 'hey',
    image : 'Images/images.jpg',
    id:1,
  },
  {
    author : 'joe bide aw  n',
    title : 'hey awdawd',
    image : 'Images/images2.jpg',
    id:2,
  }
]

const Booklist = () => {
  return (
    <section className='Booklist'>
      {BooksArr.map((Bookk)=>{
        console.log(Bookk.id)
       return <Book {...Bookk} key={Bookk.id}/>
      })}
    </section>
  );
    
}      

const Book = ({ author, image, title, key, children}) => {
console.log(key);
return(
   <div id={key}>
    <article className='book'>
      <img src={image} alt="auwgdwagdg" />
        <h2>{title}</h2>
      <h4>{author.toUpperCase()} </h4>
      {children}
    </article>
    </div>
  );
};

const a = 'sanjeev'



const somefun = (p,q) => {
  console.log(p , q);
};


somefun('hello world','hello world2')



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <Booklist /> );



  {/* <Book author={FirstBook.author} title ={FirstBook.title} image={FirstBook.image}>
      <p>loresss</p>
      <button>heyyy click me</button>
      </Book> 
      <Book author={SecondBook.author} title ={SecondBook.title} image={SecondBook.image}/> */}