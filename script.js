const courses = [
    {   
    name:"Complete MEAN Course",
    price: "4.3"
    },
    {   
    name:"Complete ReactJS Course",
    price: "2.3"
    },
    {   
    name:"Complete Angular Course",
    price: "2.2"
    },
    {   
    name:"Complete MERN Course",
    price: "2.7"
    },
    {   
    name:"Complete C++ Course",
    price: "2.8"
    }
];



function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);        
    });
};

//generateList();

window.addEventListener("load",generateList);

const sort = document.querySelector(".sort-btn");

sort.addEventListener("click",() => {
    courses.sort((a,b) => (a.price - b.price));
    generateList();
});

const revsort = document.querySelector(".revsort-btn");
revsort.addEventListener("click",() => {
    courses.sort((a,b) => (b.price - a.price));
    generateList();
});