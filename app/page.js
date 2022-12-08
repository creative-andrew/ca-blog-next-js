import React from 'react';
import BioCard from '../components/BioCard/BioCard';
import BlogPostList from '../components/BlogPostList/BlogPostList';
function Home(props) {
    return (
        <div className="flex flex-wrap flex-col-reverse md:block">
           <BioCard/>
           <BlogPostList/>
        </div>
    );
}

export default Home;