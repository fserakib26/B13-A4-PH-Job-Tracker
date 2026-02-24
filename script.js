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
const filterSection = document.getElementById('filtered-section')



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

    if (id == 'interview-filter-btn') {
        allJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
    } else if(id == all-filter-btn ){
        allJobs.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}


mainContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('interview-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const jobTitle = parentNode.querySelector('.job-title').innerText
        const jobDescription = parentNode.querySelector('.job-description').innerText
        const jobType = parentNode.querySelector('.jobtype').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText


        const jobInfo = {
            jobTitle,
            jobDescription,
            jobType,
            status,
            notes
        }

        const jobExist = interviewList.find(item=> item.jobTitle == jobInfo.jobTitle )
        parentNode.querySelector('.status').innerText = 'Interview'

        if (!jobExist) {
            interviewList.push(jobInfo);
        }
        renderInterview ()
    
        
    }
})

function renderInterview () {
    filterSection.innerHTML = ''

    for(let interview of interviewList ){
        let div = document.createElement('div')
        div.className = 'job border-2 border-gray-200 flex justify-between bg-gray-100 p-10 rounded-2xl'
        div.innerHTML=`
             <div class="space-y-6">                
                    <div>
                        <h2 class="job-title font-bold">Mobile First Corp</h2>
                        <p class="job-description text-gray-500">React Native Developer</p>
                    </div>
                    <div>
                        <span class="jobtype text-gray-500">Remote • Full-time • $130,000 - $175,000</span>
                    </div>
                    <div>
                        <span class="status bg-gray-200 p-1.5 rounded font-bold">NOT APPLIED</span>                       
                    </div>
                    
                    <div>
                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="interview-btn text-green-400 p-1.5 rounded font-bold border-2 border-green-400">INTERVIEW</button>
                        <button class=" rejected-btn text-red-400 p-1.5 rounded font-bold border-2 border-red-400">REJECTED</button>
                    </div>
                </div>

                <div>
                    <button class="bg-gray-400 rounded-full"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}