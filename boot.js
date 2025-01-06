Bangle.on('touch', function() {
    require('http').get('http://localhost:8080/buttonPressed');
});