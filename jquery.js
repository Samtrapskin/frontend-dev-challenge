$( document ).ready(readyNow)

function readyNow() {
console.log('Hi there!')



    $('#first').on('click', () => {
        $('.who-dropdown-content').toggle();
        console.log('shown');
    })

    // $('#first').on('mouseleave', () => {
    //     $('.who-dropdown-content').hide();
    // })

}
