import React, {useState, Component } from 'react'
import axios from 'axios'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies : []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                res.data.map(el=>{
                    
                    this.setState({
                        movies : [...this.state.movies,{
                            title : el.title,
                            description : el.description,
                            year : el.year,
                            duration : el.duration,
                            genre : el.genre,
                            rating : el.rating
                        }]
                    })
              } )
            })
    }

    render(){
        return(
            <>
                <table>
                    <tbody>  
                    {this.state.movies.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating)).map((el,index)=>{
                        return (
                            <tr key={index}>
                                <td>
                                    <div className='title-movie'>{el.title}</div>
                                    <div className='detail-movie'>
                                        <p>{`Rating ${el.rating}`}</p>
                                        <p>{`Durasi : ${el.duration / 60} jam`}</p>
                                        <p>{`Gender : ${el.rating}`}</p>
                                    </div>
                                    <div className='deskripsi-movie'>
                                        <strong>Deskripsi : </strong>{el.description}
                                    </div>
                                </td>
                            </tr>   
                        )
                        })}
                    </tbody>
                </table>  
            </>
        )
    }
}

export default Home