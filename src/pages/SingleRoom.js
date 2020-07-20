import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomCOntext } from '../context'
import StyleHero from '../components/StyledHero'


export class SingleRoom extends Component {
    constructor(props) {
        super(props)
    //console.log(this.props)
      this.state = {
          slug: this.props.match.params.slug,
          defaultBcg,
          
      }
      //console.log(this.state.slug)  
    }
    
    static contextType = RoomCOntext
    
    //componentDidMount(){}
    render() {
        const { getRoom } = this.context
        const room  = getRoom(this.state.slug)
         //console.log(room)
         if(!room) {
             return(
                 <div className="error">
                     <h3>No such room could be found...</h3>
                     <Link to="/rooms" className="btn-primary">
                         back to rooms
                     </Link>
                 </div>
             )
         }
         const{name,description,capacity,size,price,extras,breakfast,pets,images} = room
         const [mainImg, ...defaultImg] = images
        return (
            <>
            <StyleHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        beck to rooms
                    </Link>
                </Banner> 
            </StyleHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
            </section>
            </>
        )
    }
}

export default SingleRoom
