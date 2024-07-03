const questions = [
    {
        'que' : 'Which of the following is the markup language?',
        'a': 'HTML',
        'b':'javascript',
        'c':'CSS',
        'd':'PHP',
        'correct':'a'

    },
    {
        'que' : 'What year was javascript launched?',
        'a': '1996',
        'b':'1995',
        'c':'1994',
        'd':'None of the above',
        'correct':'b'

    },
    {
        'que' : 'What does CSS stands for?',
        'a': 'Hyper Text Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicoptors Terminals Motorboats Lamborginis',
        'correct':'b'

    }
]
let index = 0;
let total = questions.length;
let right = 0,wrong = 0;
const quesBox = document.getElementById('quesBox')
const optionInput = document.querySelectorAll('.options')
 const loadquestion = ()=>{
    if (index == total) {
        return endQuiz()
        
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index +1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
 }
 const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;   
    } else{
        wrong++;
    }
    index++;
    loadquestion()
    return;
 }
 const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
        (input)=> {
            if(input.checked){
                answer = input.value;
            }

        }
    )
    return answer;
 }
 const reset = ()=>{
    optionInput.forEach(
        (input)=> {
            input.checked = false;
        }
    )
 }

 const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
    <h3> Thankyou for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    `
 }
 loadquestion();