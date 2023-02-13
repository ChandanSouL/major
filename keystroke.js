let textBox = document.getElementById('message');
const btn = document.getElementById('btn');
const data = [];

const Key = [];
const downTime = [];
const upTime = [];
// const start = new Date().getTime();

textBox.addEventListener('keydown', (event) => {
    // const downtime = new Date().getTime() - start;
    const downtime = Date.now();
    downTime.push(downtime);
});

textBox.addEventListener('keyup', (event) => {
    // const uptime = new Date().getTime() - start;
    const uptime = Date.now();
    const key = event.key;
    upTime.push(uptime);
    Key.push(key);
});

btn.addEventListener('click', (e) => {
    for (let i = 0; i < Key.length; i++) {
        data.push({
            key: Key[i],
            downtime: downTime[i],
            uptime: upTime[i],
            dwellTime: upTime[i] - downTime[i],
            flightTime: Math.abs(downTime[i+1] - upTime[i])
            
        });
    }
    
    
    const durations = data.map(d => d.dwellTime);
    durations.sort((a, b) => a - b);

    let median;
    if (durations.length % 2 === 0) {
        median = (durations[durations.length / 2 - 1] + durations[durations.length / 2]) / 2;
    } else {
        median = durations[Math.floor(durations.length / 2)];
    }
    console.log('Median duration: ', median);
    localStorage.setItem("median", median);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "../html/output.html";
});





