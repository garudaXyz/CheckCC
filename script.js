document.getElementById('credit-card-form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('credit-card-form').classList.add('hidden');
    document.getElementById('scan-result').classList.remove('hidden');

    let progress = 0;
    let scanInterval = setInterval(() => {
        progress += 1;
        document.querySelector('.progress').style.width = progress + '%';
        document.getElementById('scan-status').innerText = 
            `Now scanning database ${progress} of 100... 0 matches found`;

        if (progress === 100) {
            clearInterval(scanInterval);
            document.getElementById('scan-result').classList.add('hidden');
            document.getElementById('result-message').classList.remove('hidden');
        }
    }, 50);  // Adjust time for the scan effect
});

document.getElementById('ok-btn').addEventListener('click', function() {
    document.getElementById('result-message').classList.add('hidden');
    document.getElementById('credit-card-form').classList.remove('hidden');
    document.querySelector('.progress').style.width = '0';
    document.getElementById('scan-status').innerText = '';
});
