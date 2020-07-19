import React, { Component } from 'react'
import items from './data'

const RoomCOntext = React.createContext()

class RoomProvider extends Component {

    state = {
       rooms: [],
       sortedRooms: [],
       featuredRooms:[],
       loading: true
    }

componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter( room => room.featured === true)


    this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false

    })
}

formatData(items){
let tempItems = items.map( item => {
    let id = item.sys.id
    let images = item.fields.images.map(image => image.fields.file.url)

    let room = {...item.fields, images, id}
    return room
})
return tempItems
}

    render() {
        return (
            <RoomCOntext.Provider  value={{...this.state}}>
                {this.props.children}
            </RoomCOntext.Provider>
        )
    }
}

const RoomConsumer = RoomCOntext.Consumer


export { RoomProvider, RoomConsumer, RoomCOntext }