import NavBar from 'components/NavBar'
import { ProvideFriend, useFriend } from './hooks/useFriend'
import React from 'react'
import routes from 'routes'
import SuggestFriends from './SugguestFriends'
import NewRequestFriends from './NewRequestFriends'
import MyRequestFriends from './MyRequestFriends'
import Title from './components/Title'
import ProfileOverview from './ProfileOverview'
import { Route, Switch, useParams } from 'react-router-dom'

const FriendImpl = () => {
    const { userFriends, users } = useFriend()
    const { user_id } = useParams()

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar routes={routes} />
            <div className="flex flex-row flex-grow">
                <div className='w-96'>
                    <MyRequestFriends users={userFriends?.sentRequestFriends} />
                    <NewRequestFriends users={userFriends?.receivedRequestFriends} />
                    <SuggestFriends users={users} />
                </div>
                <Switch>
                    <Route path="/friend" exact >
                        <div className="flex flex-grow justify-center items-center bg-black">
                            <Title title="Select people's names to preview their profile." />
                            {user_id}
                        </div>
                    </Route>
                    <Route path="/friend/:user_id" component={ProfileOverview} />
                </Switch>
            </div>
        </div>
    )
}

const Friend = () => {
    return <ProvideFriend>
        <FriendImpl />
    </ProvideFriend>
}


export default Friend
