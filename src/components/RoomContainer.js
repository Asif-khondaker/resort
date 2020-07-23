// import React from 'react'
// import { RoomFilter } from './RoomFilter'
// import { RoomList } from './RoomList'
// import { WithRoomConsumer } from '../context'
// import {Loading} from './Loading'



// function RoomContainer({context}) {
//     const {loading, sortedRooms, rooms} = context
//     if(loading) {
//                                 return <Loading />
//                             }
//                             return (
//                                 <div>
//                                     <h1>Hello from Room container</h1>
//                                     <RoomFilter rooms ={rooms} />
//                                     <RoomList rooms ={sortedRooms} />
//                                 </div>
//                             ) 
// }

// export default WithRoomConsumer(RoomContainer)











import React from 'react'
import { RoomFilter } from './RoomFilter'
import { RoomList } from './RoomList'
import { RoomConsumer } from '../context'
import {Loading} from './Loading'

export const RoomContainer = () => {
    return (
        <RoomConsumer>
            {
                value => {
                    const {loading, sortedRooms, rooms} = value
                    if(loading) {
                        return <Loading />
                    }
                    return (
                        <>
                            <RoomFilter rooms ={rooms} />
                            <RoomList rooms ={sortedRooms} />
                        </>
                    )
                }
            }
        </RoomConsumer>
        
        
    )
}
