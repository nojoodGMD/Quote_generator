//variables

let btn = document.querySelector('#new-qoute');
let quoteElement = document.querySelector('.quote');
let personElement = document.querySelector('.person');

const qoutes_list = [
    {
        quote : 'All the world’s a stage, and all the men and women merely players.' ,
        person : 'William Shakespeare'
    },
    {
        quote : 'Genius is one percent inspiration and ninety-nine percent perspiration.',
        person : 'Thomas Edison'
    },
    {
        quote : 'If at first you don’t succeed, try, try again.',
        person : 'W. E. Hickson'
    },
    {
        quote : 'Ask not what your country can do for you; ask what you can do for your country.',
        person : 'John Kennedy'
    },
    {
        quote : 'The only thing we have to fear is fear itself.',
        person : 'ranklin D. Roosevelt'
    },
    {
        quote : 'What doesn\'t kill us makes us stronger.',
        person : 'Friedrich Nietzsche'
    },
    {
        quote : 'You must be the change you wish to see in the world.',
        person : 'Mahatma Gandhi'
    },
    {
        quote : 'A reader lives a thousand lives before he dies . . . The man who never reads lives only one',
        person : 'George R.R. Martin'
    },
    {
        quote : 't is during our darkest moments that we must focus to see the light',
        person : 'Aristotle'
    }
];

//Chane the quote by clicking method
btn.addEventListener('click' , function(){

    let randomVar = Math.floor(Math.random() * qoutes_list.length);
    console.log(randomVar)
     quoteElement.innerText = qoutes_list[randomVar].quote;
     personElement.innerText = qoutes_list[randomVar].person;


})