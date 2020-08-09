import React, { Component } from 'react'
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
                <h2 className='title'>Daftar Film Terbaik</h2>
                <table>
                    <tbody>  
                    {this.state.movies.sort((a,b) => parseInt(b.rating) - parseInt(a.rating)).map((el,index)=>{
                        return (
                            <tr key={index} className='border-bottom'>
                                <td>
                                    <div className='title-movie'><h4>{el.title}</h4></div>
                                    <div className='detail-movie'>
                                        <p>{`Rating ${el.rating}`}</p>
                                        <p>{`Durasi : ${el.duration / 60} jam`}</p>
                                        <p>{`Genre : ${el.genre}`}</p>
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