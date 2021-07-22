const button1 = document.getElementById('button1');



button1.onclick=()=>{
    axios({
        method: 'GET',
        url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/14289'
    }).then(response=>{
        console.log(response.data);
    }).catch(err => console.log(err));
}

const button2 = document.getElementById('button2');

button2.onclick=()=>{
    const jsonToSend1 ={
        name:'Lisa',
        last_name:'Thompson',
        nacionalidad:'USA',
        biography:'Ambientalista',
        gender:'F',
        age:8
    }
    axios({
        method: 'POST',
        url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/',
        data:jsonToSend1
    }).then(response=>{
        console.log(response.data);
    }).catch(err => console.log(err));
}

const button3 = document.getElementById('button3');

button3.onclick=()=>{
    const jsonToSend3 ={
        name:'Lisa',
        last_name:'Thompson',
        nacionalidad:'MX',
        biography:'Bar de Moe',
        gender:'F',
        age:8
    }
    axios({
        method: 'PUT',
        url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/14289',
        data:jsonToSend3
    }).then(response=>{
        console.log(response.data);
    }).catch(err => console.log(err));
}

const button4 = document.getElementById('button4');

button4.onclick=()=>{
    const jsonToSend4 ={
        name:'Losa',
    }
    axios({
        method: 'PATCH',
        url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/14289',
        data:jsonToSend4
    }).then(response=>{
        console.log(response.data);
    }).catch(err => console.log(err));
}

const button5 = document.getElementById('button5');
button5.onclick=()=>{
    axios({
        method: 'DELETE',
        url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/14289'
    }).then(console.log('REGISTRO BORRADO'));
}