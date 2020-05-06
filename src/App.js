import React from 'react';

import DashBordHeader from './component/dashbord_header';
import Details from './component/details';
import Card from './component/moviecard';
class App extends React.Component
 {
   constructor()
   {
     super();
     this.state={
       movies:[],
       comedy:[],
       action:[],
       drama:[],
       single:[],
       showDetails:false
     }
   }


   componentDidMount(){
     console.log('mounting component');
     fetch('http://localhost:9000/api/v1/movie/getMovies')
     .then(response=>response.json())
     .then(data=>
      {

        console.log('movies',data.data);
        let comedy=data.data.filter(x=>x.genre=='comedy');
        let action=data.data.filter(x=>x.genre=='action');
        let drama=data.data.filter(x=>x.genre=='drama');

        console.log(comedy,drama,action);
        this.setState({movies:data.data,comedy:comedy,action:action,drama:drama});

      })
   }

   handleOnClick=(movie)=>
   {
     console.log('handleclick',movie);
     const{movies}=this.state;
    let nemovies=movies.filter(m=>m._id==movie._id)
    console.log(nemovies);
     this.setState({showDetails:true,single:nemovies});
   }

   handleshowDetails=()=>
   {
     this.setState({showDetails:false});
   }
   render()
   {
     const{drama,comedy,action,showDetails,single}=this.state;
    return (
      <div className="App">
        {showDetails?<Details movie={single}  handleshowDetails={this.handleshowDetails} />
        :<div> <DashBordHeader />
        <div className='genre'>
        <h3>Comedy</h3>
        <ul>
        {
          comedy.map(c=>
          <li><Card movie={c} handleOnClick={this.handleOnClick} /> 
       
          </li>
            )
        }
        </ul>
        </div>
        <div className='genre'>
        <h3>Drama</h3>
        <ul>
        {
          drama.map(d=>
          <li><Card movie={d} handleOnClick={this.handleOnClick} />

         
           
          </li>
            )
        }
        </ul>
        </div>
        <div className='genre'>
        <h3>Action</h3>
        <ul>
        {
          action.map(a=>
          <li><Card movie={a} handleOnClick={this.handleOnClick} />
          </li>
            )
        }
        </ul>
        </div>
        </div>}
       
      </div>
    );
  }
}

export default App;
