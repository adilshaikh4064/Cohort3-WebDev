import { useEffect } from "react";
import { atom, selector, selectorFamily, useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


const userInfo=[
    {
        userId: 0,
        userName: 'adil',
        password: 4064,
        friendId:[1,2,4]
    },
    {
        userId: 1,
        userName: 'manisha',
        password: 9081,
        friendId:[3,2,4]
    },
    {
        userId: 2, 
        userName: 'murga',
        password: 4063,
        friendId:[1,0,4]
    },
    {
        userId: 3,
        userName: 'negi',
        password: 4087,
        friendId:[1,2,4]
    },
    {
        userId:4,
        userName: 'tabish',
        password: 6087,
        friendId:[1,2,3]
    }
]
const myDbQuery=function({userId}){
    return new Promise(function(resolve,reject){
        let userfound;
        userInfo.forEach((user)=>{
            if(user.userId===userId) userfound=user;
        })
        if(userfound){
            resolve(userfound)
        }
        else{
            resolve({userfound, error:'userId is not valid'})
        }
    })
}

const currentUserIdState=atom({
    key:'currentUserId',
    default: 0,
})
const currentUserInfoQuery=selector({
    key:'currentUserInfo',
    get: ({get})=>get(userInfoQuery(get(currentUserIdState)))
})
const userInfoQuery=selectorFamily({
    key:'userInfo',
    get: userId=> async ()=>{
        const response=await myDbQuery({userId})
        if(response.error){
            throw response.error;
        }
        return response;
    }
})
const friendsInfoQuery=selector({
    key:'friendsInfo',
    get:({get})=>{
        const friendList=get(currentUserInfoQuery).friendId;
        return friendList.map(friendId=>get(userInfoQuery(friendId)));
    }
})

const CurrentUserInfo=function(){
    const currentUser=useRecoilValue(currentUserInfoQuery);
    const friendsList=useRecoilValue(friendsInfoQuery);

    const handleChangeUser=function(userId){
        useRecoilCallback(({snapshot,set})=>userId=>{
            snapshot.getLoadable(userInfoQuery(userId)); //pre-fetch user info
            set(currentUserIdState,userId); // change current user to start new re-render
        })
    }

    return(
    <div>
        <h1>{currentUser.userName}</h1>
        <ul style={{listStyle:"none"}}>
            {
                friendsList.map((friend)=>(
                    <li key={friend.userId} 
                        onClick={()=>handleChangeUser(friend.userId)}
                    >{friend.userName}</li>
                ))
            }
        </ul>
    </div>
    );
}






const AsyncDataQueries=function(){
    return (
    <>
        <h2> asynchronous data queries using recoil </h2>
        <CurrentUserInfo/>
    </>
    );
}


export default AsyncDataQueries;