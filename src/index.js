console.log('Hello world will do')

const ul = document.querySelector('ul');

const render = async() => {
    try{
        const response = await axios.get('/api/employees');
        const employees = response.data;
        const html = employees.map(employee => { return `
        <li data-id='${employee.id}'> ${employee.name} </li>
        `       
        }).join('');
        ul.innerHTML = html
    }
    catch(ex){
        console.log(ex)
    }
};

render();

ul.addEventListener('click', async (ev)=> {
    try{
        const target = ev.target;
        if (target.tagName === 'LI') {
            const id = target.getAttribute('data-id');
            await axios.delete(`/api/employees/${id}`);
            render();
        }    
    }
    catch(ex){
        console.log(ex)
    }
})