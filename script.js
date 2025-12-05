// Initialize the speed test client with the div ID as the target element
var speedtest = OpenSpeedTest("speedtest-widget");

function startTest() {
    // Reset results and status
    document.getElementById('status').textContent = 'Testing...';
    document.getElementById('download-speed').textContent = '0.00';
    document.getElementById('upload-speed').textContent = '0.00';
    document.getElementById('ping').textContent = '0';

    // Start the speed test
    speedtest.start();
}

// Event listeners to update the UI
speedtest.onupdate = function (data) {
    document.getElementById('download-speed').textContent = data.dlStatus;
    document.getElementById('upload-speed').textContent = data.ulStatus;
    document.getElementById('ping').textContent = data.pingStatus;
};

speedtest.onend = function (data) {
    document.getElementById('status').textContent = 'Test Complete!';
    console.log("Test ended:", data);
};

speedtest.onerror = function (err) {
    document.getElementById('status').textContent = 'An error occurred: ' + err.errMsg;
    console.error("Test error:", err);
};
