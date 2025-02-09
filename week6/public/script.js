
let jwtToken=null;

async function signup(){
    let username=document.querySelector('#signup-username').value;
    let password=document.querySelector('#signup-password').value;

    console.log(`${username} \n ${password}`);

    const response= await axios({
        method:'post',
        url:'http://localhost:3000/signup',
        data:{
            username:username,
            password:password
        }
    })

    console.log(response);
}

async function signin(){
    let username=document.querySelector('#signin-username').value;
    let password=document.querySelector('#signin-password').value;

    console.log(`${username}\n${password}`);

    const response= await axios({
        method:'post',
        url:'http://localhost:3000/signin',
        data:{
            username:username,
            password:password
        }
    })

    console.log(response);
    if(response.statusText!=="OK"){
        alert('invalid user credentials.')
        location.reload();
    }
    else{
        jwtToken=response.data.token;
        const userResponse=await axios({
            method:'get',
            url:'http://localhost:3000/me',
            headers:{
                token:jwtToken
            }
        })

        console.log(userResponse);
        let userInfodiv=document.querySelector('.user-information');
        let usernamepara=document.createElement('p');
        let passwordpara=document.createElement('p');

        usernamepara.innerText=`username: ${userResponse.data.username}`;
        passwordpara.innerText=`password: ${userResponse.data.password}`;

        userInfodiv.appendChild(document.createElement('hr'));
        userInfodiv.appendChild(usernamepara);
        userInfodiv.appendChild(passwordpara);
    }
}

async function logout(){
    const response=await axios({
        method:'put',
        url:'http://localhost:3000/logout',
        headers:{
            token: jwtToken
        }
    })

    console.log(response);
    jwtToken=null;
}