function sortAll() {
    let data = JSON.parse(localStorage.getItem("sortItems"));
    let data1 = JSON.parse(localStorage.getItem("sortCity"));
    let data2 = JSON.parse(localStorage.getItem("sortType"));
    let data3 = JSON.parse(localStorage.getItem("sortPref"));
    if (data == null) data = [];
    if (data1 == null) data1 = [];
    if (data2 == null) data2 = [];
    if (data3 == null) data3 = [];

    var content = (JSON.parse(localStorage.getItem('internships')));
    console.log(content);
    if (data1.length != 0) {
        var datax1 = content.filter(function (el) {
            for (let i = 0; i < data1.length; i++) {
                if (el.city == data1[i]) {

                    return el;
                }

            }
        });

    }
    else {
        var datax1 = content;

    }

    if (data2.length != 0) {
        var datax2 = datax1.filter(function (el) {
            for (let i = 0; i < data2.length; i++) {
                if (el.type == data2[i]) {

                    return el;
                }

            }
        });

    }
    else {
        var datax2 = datax1;

    }
    console.log(data3);
    if (data3.length != 0) {
        var datax3 = datax2.filter(function (el) {
            for (let i = 0; i < data3.length; i++) {
                if (el.category == data3[i]) {

                    return el;
                }

            }
        });

    }
    else {
        var datax3 = datax2;

    }
    if (datax3.length == 0) {
        datax3 = buffer;
    }
    //var content = (JSON.parse(localStorage.getItem('internships')));
    showContent(datax3);



}



function citiesOpen() {
    var div = document.getElementById("citiesPop");
    div.style.display = "block";

}
function citiesClose() {
    var div = document.getElementById("citiesPop");
    div.style.display = "none";
}
function typesOpen() {
    var div = document.getElementById("typesPop");
    div.style.display = "block";

}
function typesClose() {
    var div = document.getElementById("typesPop");
    div.style.display = "none";
}
function prefOpen() {
    var div = document.getElementById("prefPop");
    div.style.display = "block";

}
function prefClose() {
    var div = document.getElementById("prefPop");
    div.style.display = "none";
}





function AppendSortItems(el) {

    var disp_div = document.getElementById("dispfilter");
    var div = document.createElement("div");
    var span = document.createElement("span");
    var btn = document.createElement("button");
    span.innerHTML = el;
    btn.innerHTML = "X";
    div.append(span, btn);
    disp_div.append(div);
    btn.addEventListener('click', function () {
        removeItem(el);
    });
}

function dispSortItems() {
    let data = JSON.parse(localStorage.getItem("sortItems"));
    if (data == null) data = [];
    console.log("-----", data);

    var disp_div = document.getElementById("dispfilter");
    disp_div.innerHTML = null;
    data.forEach(function (el) {
        AppendSortItems(el);
    });
}

function storeCity(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortCity');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortCity'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortCity', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}


function storeType(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortType');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortType'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortType', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}

function storePref(x) {
    let arr;
    arr = localStorage.getItem('sortItems');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('sortItems'));
    }

    if (arr.includes(x)) return;
    arr.push(x);
    localStorage.setItem('sortItems', JSON.stringify(arr));



    let arr1;
    arr1 = localStorage.getItem('sortPref');
    if (arr1 == null) {
        arr1 = [];
    } else {
        arr1 = JSON.parse(localStorage.getItem('sortPref'));
    }

    if (arr1.includes(x)) return;
    arr1.push(x);
    localStorage.setItem('sortPref', JSON.stringify(arr1));

    dispSortItems();
    sortAll();
}

function removeItem(el) {
    let data = JSON.parse(localStorage.getItem("sortItems"));
    var pos = data.indexOf(el);

    data.splice(pos, 1);
    localStorage.setItem('sortItems', JSON.stringify(data));

    let data1 = JSON.parse(localStorage.getItem("sortCity"));
    let data2 = JSON.parse(localStorage.getItem("sortType"));
    let data3 = JSON.parse(localStorage.getItem("sortPref"));

    if (data == null) data = [];
    if (data1 == null) data1 = [];
    if (data2 == null) data2 = [];
    if (data3 == null) data3 = [];

    if (data1.includes(el)) {
        var pos1 = data1.indexOf(el);

        data1.splice(pos1, 1);
        localStorage.setItem('sortCity', JSON.stringify(data1));
        dispSortItems();
        sortAll();
    }
    else if (data2.includes(el)) {
        var pos1 = data2.indexOf(el);

        data2.splice(pos1, 1);
        localStorage.setItem('sortType', JSON.stringify(data2));
        dispSortItems();
        sortAll();
    }
    else if (data3.includes(el)) {
        var pos1 = data3.indexOf(el);

        data3.splice(pos1, 1);
        localStorage.setItem('sortPref', JSON.stringify(data3));
        dispSortItems();
        sortAll();
    }
}


var buffer = [
    {
        img: 'https://assets.interntheory.com/creative/logo.png',
        course: 'Develop Your Skillset',
        companyName: 'Online Skill Development Programs',
        type: 'Taught by Industry Experts Internship',
        category: 'Certified Courses',
        city: 'Guaranteed Internship Oppertunities',
        stipend: 'None',
    },
];





var internships = [
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
        course: 'Jr Sales Engineer',
        companyName: 'Allwave AV',
        type: 'Full Time',
        category: 'Business Development',
        city: 'mumbai',
        stipend: '8000 per month'

    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/9a1b5a51b4a3fea4078b0e13e877a8ec422fdd21.jpg',
        course: 'PHP Developer - Intern',
        companyName: 'Bitpastel Solution Pvt Ltd',
        type: 'Work From Home',
        category: 'Software Development',
        city: 'Kolkata',
        stipend: '7500 - 10000 per month'

    },
    {
        img: 'https://assets.interntheory.com/uploads/company/companylogos/acc313217760c271982fd8292660d06162307a7c/88a004f3139e489ab07e9c6a0474a679d86b4e57com.png',
        course: 'Wordpress Web Developer',
        companyName: 'Allwave AV',
        type: 'Part Time',
        category: 'Business Development',
        city: 'Bangalore',
        stipend: '8000 per month'

    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/d2014eb04767ce811420b47d91c3c99219a774b4.jpg',
        course: 'Content Writer Intern',
        companyName: 'Leadstart Publishing',
        type: 'Full Time',
        category: 'Content Writing',
        city: 'Chennai',
        stipend: 'None'

    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/f26feb9e33fcce49c4d5634126ef72232c8c18ed.jpg',
        course: 'Video Editor/Graphic Designer',
        companyName: 'UrbanGuru',
        type: 'Part Time',
        category: 'Business Development',
        city: 'Hyderabad',
        stipend: '1500 per month'

    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/a74d88544322279c33db28830bff100d0d6e12f6.jpg',
        course: 'Social Media & Content Creation Intern',
        companyName: 'Strategy Wanted',
        type: 'Work From Home',
        category: 'Business Development',
        city: 'Delhi',
        stipend: '8000 per month',

    },

];
var rightBox = document.getElementById('rightbox');
var i = 0;

if (localStorage.getItem('internships') == null) {
    (localStorage.setItem('internships', JSON.stringify(internships)));
}





function showInternships(e) {
    let block = document.createElement('div');
    block.setAttribute('class', 'r_blocks')

    let block_img = document.createElement('img');
    block_img.src = e.img;
    block.append(block_img);

    let block_texts = document.createElement('div');
    block_texts.setAttribute('class', 'block_texts');
    block.append(block_texts)

    let block_course = document.createElement('span');
    block_course.innerHTML = e.course;
    block_texts.append(block_course)

    let block_company = document.createElement('p');
    block_company.innerHTML = e.companyName;
    block_texts.append(block_company)



    let block_type = document.createElement('p');
    block_type.innerHTML = e.type; 
    block_texts.append(block_type)

    let block_category = document.createElement('p');
    block_category.innerHTML = e.category;
    block_texts.append(block_category)

    let block_city = document.createElement('p');
    block_city.innerHTML = e.city;
    block_texts.append(block_city)

    let block_stipend = document.createElement('p');
    block_stipend.innerHTML = `Stipend:<a> ${e.stipend}</a>`;
    block_texts.append(block_stipend);

    let share = document.createElement('div');
    share.setAttribute('id', 'share_icon')
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
        if (i % 2 == 1) {
            toggleDiv.style.visibility = 'visible';
        } else {
            toggleDiv.style.visibility = 'hidden';
        }




    }


}

function apply(params) {
}
function showContent(content) {
    rightBox.innerHTML = null;
    for (let i = 0; i < content.length; i++) {
        showInternships(content[i]);
    }
}
dispSortItems();
sortAll();






