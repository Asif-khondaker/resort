import React, { Component } from 'react'
import { RoomCOntext } from '../context'
import { Loading } from './Loading'
import { Room } from './Room'
import { Title } from './Title'

export class FeaturedRooms extends Component {

    static contextType = RoomCOntext
    render() {
        let {loading, featuredRooms: rooms } = this.context

        rooms = rooms.map( room => {
            return <Room key={room.id} room={room}/> 
            //console.log(room)
        })
        
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms