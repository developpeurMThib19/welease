import '../App.css';
import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css' ;

import Pagination from '../pages/Pagination';
import React, { useState, useMemo } from 'react';
import posts from '../data/posts.json';
import users from '../data/users.json';

let PageSize = 10;

function Articles() {

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (
      posts.slice(firstPageIndex, lastPageIndex)
      );
   
  }, [currentPage]);



 
  
 
  return (
    <>
    <div className='Articles'>

   
    
      <table>
  
       
          
          {currentTableData.map((posts,users) => {
            return (
              <div className="box" key={posts.id}>
              <div className="box" key={users.id}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <div class="card" >
                        <div class="card-body">
                          <tr>
                            <p class="card-text"> {posts.id}</p>
                            <p class="card-text">{users.firstName}</p>
                            <p class="card-text">{posts.title}</p>
                          <p class="card-text"> {posts.body}</p>
                          <p class="card-text"> {posts.userId}</p>
                          <p class="card-text"> {posts.tags}</p>
                          <p class="card-text"> {posts.reactions}</p>
                          </tr>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
       
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={posts.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />


                      
                       
      </div>
    </>
  );

  
}


export default Articles;
