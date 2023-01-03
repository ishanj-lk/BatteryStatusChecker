$(document).ready(function() {
    let descriptionHead = $('#descriptionHead');
    let descriptionBody = $('#descriptionBody');
    let descriptionBody2 = $('#descriptionBody2');
    let descriptionBody3 = $('#descriptionBody3');
    let warningMessage = $('#warningMessage');
    let whInputField = $('#whInputField');
    let healthInputField = $('#healthInputField');

    whInputField.val(2000);
    healthInputField.val(95);

    let battery = 2000;
    let batteryHealth = 95;
    let currentbattery = (battery / 100) * batteryHealth;
    let safeAmount = currentbattery / 2;
    let unsafeAmount = currentbattery / 2;

    function calcBasics() {
        battery = whInputField.val();
        batteryHealth = healthInputField.val();
        currentbattery = (battery / 100) * batteryHealth;
        safeAmount = currentbattery / 2;
        unsafeAmount = currentbattery / 2;
    }


    $('.bt1').click(function() {
        calcBasics();
        let percent = 0
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt2').click(function() {
        calcBasics();
        let percent = 10
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt3').click(function() {
        calcBasics();
        let percent = 20
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt4').click(function() {
        calcBasics();
        let percent = 30
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt5').click(function() {
        calcBasics();
        let percent = 40
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt6').click(function() {
        calcBasics();
        let percent = 50
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt7').click(function() {
        calcBasics();
        let percent = 60
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt8').click(function() {
        calcBasics();
        let percent = 80
        warningMessage.text(`Good Condition`);
        warningMessage.css('color', '#54B435');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt9').click(function() {
        calcBasics();
        let percent = 90
        warningMessage.text(`Warning - Ready to Stop Using. It's Good to Battery Health`);
        warningMessage.css('color', '#5F8D4E');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt91').click(function() {
        calcBasics();
        let percent = 100
        warningMessage.text(`Warning - Stop Using Now. It's Good to Battery Health`);
        warningMessage.css('color', '#5F8D4E');
        descriptionHead.text(`Available - ${100-percent}%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for safe use`);
        descriptionBody2.text(`2. ${(safeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount}Wh Remaining for unsafe use`);
    });

    $('.bt10').click(function() {
        calcBasics();
        let percent = 20
        warningMessage.text(`Warning - Battery Heath Compromise`);
        warningMessage.css('color', '#FD841F');
        descriptionHead.text(`Available - (-${percent})%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for unsafe use`);
        descriptionBody2.text(`2. ${safeAmount+(unsafeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount-(unsafeAmount*(0.01*percent))}Wh Remaining for unsafe use`);
    });

    $('.bt11').click(function() {
        calcBasics();
        let percent = 40
        warningMessage.text(`Warning - Battery Heath Compromise`);
        warningMessage.css('color', '#FD841F');
        descriptionHead.text(`Available - (-${percent})%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for unsafe use`);
        descriptionBody2.text(`2. ${safeAmount+(unsafeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount-(unsafeAmount*(0.01*percent))}Wh Remaining for unsafe use`);
    });

    $('.bt12').click(function() {
        calcBasics();
        let percent = 60
        warningMessage.text(`Warning, Stop use - Battery Heath Compromise Critically`);
        warningMessage.css('color', '#DC3535');
        descriptionHead.text(`Available - (-${percent})%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for unsafe use`);
        descriptionBody2.text(`2. ${safeAmount+(unsafeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount-(unsafeAmount*(0.01*percent))}Wh Remaining for unsafe use`);
    });

    $('.bt13').click(function() {
        calcBasics();
        let percent = 80
        warningMessage.text(`Warning, Stop use - Battery Heath Compromise Critically`);
        warningMessage.css('color', '#DC3535');
        descriptionHead.text(`Available - (-${percent})%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for unsafe use`);
        descriptionBody2.text(`2. ${safeAmount+(unsafeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount-(unsafeAmount*(0.01*percent))}Wh Remaining for unsafe use`);
    });

    $('.bt14').click(function() {
        calcBasics();
        let percent = 100
        warningMessage.text(`Warning, Stop use - Battery Heath Compromise Critically and Battery Dead`);
        warningMessage.css('color', '#CF0A0A');
        descriptionHead.text(`Available - (-${percent})%`);
        descriptionBody.text(`1. ${safeAmount-(safeAmount/100)*percent}Wh Remaining for unsafe use`);
        descriptionBody2.text(`2. ${safeAmount+(unsafeAmount/100)*percent}Wh used`);
        descriptionBody3.text(`3. Another ${unsafeAmount-(unsafeAmount*(0.01*percent))}Wh Remaining for unsafe use`);
    });

});