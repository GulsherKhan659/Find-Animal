
// Note1 : First Animal must have minimum weight
// Note2 : First 5 Animal Image Must be same as in html <img> tag
// Note3 : Number of Animal is always ODD like 3,5,7,9,11,13....101


const Animals = [
    {
        name: 'Cat',
        weight: 5,
        image: 'cat.jpg'
    },

    {
        name: 'Dog',
        weight: 60,
        image: 'dog.jpg'
    },
    {
        name: 'Bear',
        weight: 350,
        image: 'bear.jpg'
    },
    {
        name: 'Lion',
        weight: 180,
        image: 'lion.jpg'
    },
    {
        name: 'Panda',
        weight: 120,
        image: 'panda.jpg'
    },
    {
        name: 'Tiger',
        weight: 250,
        image: 'tiger.jpg'
    },
    {
        name: 'Kolala',
        weight: 20,
        image: 'koala.jpg'
    },


    {
        name: 'Elephant',
        weight: 5000,
        image: 'elephant.jpg'
    },
    {
        name: 'Horse',
        weight: 700,
        image: 'horse.jpg'
    },
    {
        name: 'Giraffe',
        weight: 3000,
        image: 'giraffe.jpg'
    },
    {
        name: 'Cow',
        weight: 140,
        image: 'cow.jpg'
    },
    {
        name: 'Deer',
        weight: 200,
        image: 'deer.jpg'
    },
    {
        name: 'Moose',
        weight: 680,
        image: 'moose.jpg'
    },
    {
        name: 'Wolf',
        weight: 300,
        image: 'wolf.jpg'
    },
    {
        name: 'Zeebra',
        weight: 450,
        image: 'zeebra.jpg'
    },
]


let maxAnimal = Animals.length
let currentIndex = 3

let stop = false
let isGoForward = true

function goNext(i) {


    setTimeout(function () {
        if (!stop) { next() } else return




        i++;
        if (i < maxAnimal) {
            console.warn('going to next')
            console.log(i)
            isGoForward = true
            goNext(i);
        } else {
            // debugger;
            i--;
            goBack(i)

        }
    }, 1000)



}

function goBack(i) {

    setTimeout(function () {
        if (!stop) { previous() } else return



        i--;
        if (i > -1) {
            console.warn('going to back')
            console.log(i)
            isGoForward = false;

            goBack(i);
        } else {
            i++;
            goNext(i)
        }
    }, 1000)

}

function goBack_goForward(i) {

    if (isGoForward) {
        goNext(i)
    } else {
        goBack(i)
    }

}


$(function () {
    for (let i = 7; i < Animals.length; i++) {
        $('#carousel').append("<div class='hideRight' > <img id='img" + i + "'  src='./static/images/" + Animals[i].image + "' > </div>")
    }


    goBack_goForward(currentIndex)



    $('#enter').on('click', function (event) {
        event.preventDefault()
        $('#carousel').hide()
        $('.buttons').hide()

        $('.container').show()


        let weight = $('#weight').val()
        const animal = Animals.filter(e => e.weight === findClosest(parseInt(weight)));

        $("#result-image").attr('src', './static/images/' + animal[0].image);
        stop = true

    })

    $('#reset').on('click', function (event) {
        $('#carousel').show()
        $('.buttons').show()

        $('.container').hide()

        event.preventDefault()
        stop = false
        if (isGoForward) { goBack_goForward(currentIndex + 1) } else goBack_goForward(currentIndex - 1)



    })


    console.log("ready!");
    // 
});


// next()

function inputNumber(e) {

    // This Method is Used To Take Only number from user

    var ASCII = (e.which) ? e.which : e.keyCode
    if (ASCII > 31 && (ASCII < 48 || ASCII > 57))
        return false;
    return true;
}




const findClosest = (num) => {


    let closest = Animals[0].weight;
    for (let item of Animals) {
        if (Math.abs(item.weight - num) < Math.abs(closest - num)) {
            closest = item.weight;
        }
    }
    return closest;
}

