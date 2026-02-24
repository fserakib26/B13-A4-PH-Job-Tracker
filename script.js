let interviewList = [];
let rejectedList = [];



let allJobsCount = document.getElementById('alljobscount');
let interviewCount = document.getElementById('interviewcount');
let rejectedCount = document.getElementById('rejectedcount');

let allFilterBtn = document.getElementById('all-filter-btn');
let interviewFilterBtn = document.getElementById('interview-filter-btn');
let rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allJobs = document.getElementById('alljobs');
// console.log(allJobs.children.length);
const mainContainer = document.querySelector('main')
// console.log(mainContainer)



function totalJobsCount(){
    allJobsCount.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
totalJobsCount()



function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    rejectedFilterBtn.classList.add('bg-white', 'text-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')
}


mainContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    
})