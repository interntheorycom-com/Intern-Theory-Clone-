
// Inserting Values

var jobs = [
    {
        img: 'https://assets.interntheory.com/uploads/company/companylogos/e3d9179aab92467983bc43fb1ef6659d5901c3ff/bac5d39a4ed51a3aba657f1a14f2223c030283cecom.png',
        job: 'Performance Marketing Executive',
        companyName: 'Yowza Consulting Private Limited (OPC)',
        category: 'Digital Marketing',
        city: 'Bangalore',
        salary: '8000 per month'
        
    },

    
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg',
        job: 'PHP Developer',
        companyName: 'arham labs',
        category: 'Branding',
        city: 'Kolkata',
        salary: '30000 - 50000 per month'
        
    },
    
    {
        img: 'https://assets.interntheory.com/uploads/company/companylogos/e6d22059b45e45d9ccca527c74ef73954726f21e/a5f67648b11d6f06617857c7a43393f82b82ad9dcom.png',
        job: 'Sales Manager',
        companyName: 'Zell Education',
        category: 'Education And Training',
        city: 'Chennai',
        salary: '65000 - 90000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg',
        job: 'Business Analyst',
        companyName: 'arham labs',
        category: 'Project Management',
        city: 'Mumbai',
        salary: '50000 - 60000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg',
        job: 'Angular Developer',
        companyName: 'UrbanGuru',
        category: 'Product Designing',
        city: 'Hyderabad',
        salary: '50000 - 65000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/companylogos/e3d9179aab92467983bc43fb1ef6659d5901c3ff/bac5d39a4ed51a3aba657f1a14f2223c030283cecom.png',
        job: 'iOS App Developer',
        companyName: 'Strategy Wanted',
        category: 'Android Development',
        city: 'Delhi',
        salary: '8000 per month',
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg',
        job: 'Angular Developer',
        companyName: 'UrbanGuru',
        category: 'Product Designing',
        city: 'Hyderabad',
        salary: '50000 - 65000 per month'
        
    },
    
];



// Local Storage //

var rightBox = document.getElementById('rightbox');
var i = 0;

if (localStorage.getItem('jobs') == null) {
    (localStorage.setItem('jobs', JSON.stringify(jobs)));
}

// Displaying Jobs

function showJobs(e) {
    let block = document.createElement('div');
    block.setAttribute('class', 'r_blocks')
    
    
    let block_img = document.createElement('img');
    block_img.src = e.img;
    block.append(block_img);

    let block_texts = document.createElement('div');
    block_texts.setAttribute('class', 'block_texts');
    block.append(block_texts)

    let block_job = document.createElement('span');
    block_job.innerHTML = e.job;
    block_texts.append(block_job)

    let block_company = document.createElement('p');
    block_company.innerHTML = e.companyName;
    block_texts.append(block_company)

    let block_category = document.createElement('p');
    block_category.innerHTML = e.category;
    block_texts.append(block_category)

    let block_city = document.createElement('p');
    block_city.innerHTML = e.city;
    block_texts.append(block_city)

    let block_salary = document.createElement('p');
    block_salary.innerHTML =`Salary:<a> ${e.salary}</a>`;
    block_texts.append(block_salary);

    let share = document.createElement('div');
    share.setAttribute('id','share_icon')
    share.innerHTML = "<button id = 'share'><i class ='material-icons' style ='font-size:28px'>share</i></button>";
    share.addEventListener('click', shareToggle);
    block_texts.append(share);

    let view = document.createElement('p');
    view.innerHTML = `<a href='Allwave.html' style='text-decoration:none' class = 'view'>VIEW AND APPLY<a>`;
    view.addEventListener('click', apply(e));
    block_texts.append(view);

    let timeLimit = document.createElement('p');
    timeLimit.innerHTML = '4 weeks left';
    timeLimit.setAttribute('class', 'duration');
    block.append(timeLimit);

    rightBox.append(block);

    function shareToggle() {
        i++;
        console.log(i);
   
        if (i % 2 == 1) {
            toggleDiv.style.visibility = 'visible';
            console.log('*')
        } else {
            toggleDiv.style.visibility = 'hidden';
            console.log('/')
        }
    

   
    
    }
    

}

var content = (JSON.parse(localStorage.getItem('jobs')));
var n = content.length;

for (let i = 0; i < n; i++){
    showJobs(content[i]);
}

function apply(e) {
  
}

// For search

function search() {

    var form = document.getElementById('myForm');
    var city = document.getElementById('myCity').value;
    var type = document.getElementById('myType').value;
    console.log('type:', type)
    var preferences = document.getElementById('myPreferences').value;
    console.log('preferences:', preferences)
    console.log(city);

    function filter() {
        let filtered = content.filter()
    }
    
}

