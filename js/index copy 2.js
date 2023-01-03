let descriptionHead = $('#descriptionHead');
let descriptionBody = $('#descriptionBody');
let descriptionBody2 = $('#descriptionBody2');
let descriptionBody3 = $('#descriptionBody3');

descriptionHead.click(function() {
    console.log('1');
    descriptionHead.text('1');
});

let battery = 2000;
let batteryHealth = 95;
let currentbattery = (battery / 100) * batteryHealth;
console.log(currentbattery);
let currentBatteryUsableCapacity = currentbattery / 2;

$('.bt1').click(function() {
    let precent = 100 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt2').click(function() {
    let precent = 95 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt3').click(function() {
    let precent = 90 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt4').click(function() {
    let precent = 85 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt5').click(function() {
    let precent = 80 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt6').click(function() {
    let precent = 75 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt7').click(function() {
    let precent = 70 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt8').click(function() {
    let precent = 60 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt9').click(function() {
    let precent = 50 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt10').click(function() {
    let precent = 40 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt11').click(function() {
    let precent = 30 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt12').click(function() {
    let precent = 20 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt13').click(function() {
    let precent = 10 / 2
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});

$('.bt14').click(function() {
    let precent = 0
    descriptionHead.text(`${precent*2}%`);
    descriptionBody.text(`1. ${(currentbattery/100)*precent}Wh Remaining for safe use`);
    descriptionBody2.text(`2. ${currentbattery-(currentbattery/100)*precent*2}Wh used`);
    descriptionBody3.text(`3. Another ${((currentbattery/100)*precent)}Wh Remaining for unsafe use`);
});