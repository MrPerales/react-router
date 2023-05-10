import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./BlogData";

function BlogPost() {

    // la variable se llama asi porque la declaramos asi en el route  
    // <Route path='/blog/:slug' element={<BlogPost/>}/>
    // depende de lo que escribamos delante de los ':' es el nombre que va a tener la variable 
    const { slug } = useParams();
    console.log('slug', slug);
    // buscamos si coincide el slug con alguno de nuestro data para poder obtener sus valores 
    const blogPost = blogData.find(post => post.slug === slug);
    
    const navigate=useNavigate();
    

    const returnToBlog = () => {
        // le pasamos a la ruta que queramos que vaya 
        navigate('/blog');
        // con -1 va un pag atras no importa la ruta
        // navigate(-1);
    }


    return (
        <>
            <h3>{blogPost.title}</h3>
            <button onClick={returnToBlog}>go Back</button>
            <p>{blogPost.content}</p>
            <p>{blogPost.author}</p>


        </>
    );
}

export { BlogPost };