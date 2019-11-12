
const $weight = $('#weight');
const $reps = $('#reps');
const $minutes = $('#minutes');
const $seconds = $('#seconds');



const $alert = $('#alert');



const $submitLift = $('#submit-lift');

function postIt(route, object) {
    $.post(`/api/${route}`, object)
        .then((data) => {
            window.location.reload(true);
        })
        .catch((err) => {
            console.log(err);
        });
}


function postLift() {
    const weight = $weight.val().trim();
    const reps = $reps.val().trim();
    const minutes = $minutes.val().trim();
    const seconds = $seconds.val().trim();

    if (isNaN(weight) || weight < 1) {
        $alert.text('Please enter a valid weight.');
    } else if (isNaN(reps) || reps < 1) {
        $alert.text('Please enter valid reps.');
    } else if (isNaN(minutes) || minutes < 0) {
        $alert.text('Please enter valid minutes.');
    } else if (isNaN(seconds) || seconds < 0) {
        $alert.text('Please enter valid seconds.');

    } else {
        const liftObject = {
            weight,
            reps,
            minutes,
            seconds,
        };

        postIt('Lift', liftObject);
    }
}


$submitLift.on('click', postLift);