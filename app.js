const submitShorten = document.querySelector('.submit-shorten');
const link1 = document.querySelector('.link-1');
const inputValue = document.querySelector('.shorten-link');
const newLinks = document.querySelector('.new-links');
const newLinkSection = document.querySelector('.new-links-section');

submitShorten.addEventListener('click', ()=> {
    let value = inputValue.value;
    if (value === '') {
        return 0
    }
    console.log(value)
    fetch('https://spoo.me', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        'url': `${value}`
    })
})
.then(response => response.json())
.then(data =>  {
    let resultData = data.short_url;
    console.log(resultData)
    
    let makeEl = document.createElement('div');
    makeEl.classList.add('link-1')
    makeEl.innerHTML = `  <p>${value}</p>
            <div>
                <span class='resultDataSpan'>${resultData}</span>
                <a class='copy-btn' href="#">Copy</a>
            </div>`;

            newLinks.append(makeEl);
            console.log(makeEl)
            let copyBtn = makeEl.querySelector('.copy-btn');
            let resultDataSpan = makeEl.querySelector('.resultDataSpan');
            copyBtn.addEventListener('click', (e) => {
              
                e.preventDefault();
                 document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.innerText = 'Copy';
        btn.classList.remove('color-change');
    });

                navigator.clipboard.writeText(resultDataSpan.innerText);
                copyBtn.innerText = 'Copied';
                copyBtn.classList.add('color-change');
            })
});
});