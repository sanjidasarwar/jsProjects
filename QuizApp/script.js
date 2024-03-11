const quizArray=[
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "General Knowledge",
    "question": "What is the currency of Poland?",
    "correct_answer": "Złoty",
    "incorrect_answers": [
    "Ruble",
    "Euro",
    "Krone"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Video Games",
    "question": "In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?",
    "correct_answer": "Clarence &quot;Razor&quot; Callahan",
    "incorrect_answers": [
    "Hector &quot;Ming&quot; Domingo",
    "Toru &quot;Bull&quot; Sato",
    "Karl &quot;Baron&quot; Smit"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "medium",
    "category": "Entertainment: Japanese Anime &amp; Manga",
    "question": "The animated film &quot;Spirited Away&quot; won the Academy Award for Best Animated Feature at the 75th Academy Awards in 2003.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Video Games",
    "question": "What vehicle in PUBG has the highest top speed?",
    "correct_answer": "Motorcycle",
    "incorrect_answers": [
    "PG-117",
    "Dacia",
    "Buggy"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Video Games",
    "question": "Which of the following Pokemon Types was present in the original games, Red and Blue?",
    "correct_answer": "Ice",
    "incorrect_answers": [
    "Steel",
    "Dark",
    "Fairy"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "hard",
    "category": "Vehicles",
    "question": "The term &quot;GTO&quot; was originated by Ferrari?",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Cartoon &amp; Animations",
    "question": "Which of the following is not a Flintstones character?",
    "correct_answer": "Lord Rockingham IX",
    "incorrect_answers": [
    "Rockhead Slate",
    "The Great Gazoo",
    "Barney Rubble"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Entertainment: Japanese Anime &amp; Manga",
    "question": "On what medium was &quot;Clannad&quot; first created?",
    "correct_answer": "Visual novel",
    "incorrect_answers": [
    "Anime",
    "Manga",
    "Light novel"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Music",
    "question": "What is the first track on the Dave Matthews Band album &quot;Before These Crowded Streets&quot;?",
    "correct_answer": "Pantala Naga Pampa",
    "incorrect_answers": [
    "Stay (Wasting Time)",
    "Rapunzel",
    "Don&#039;t Drink The Water"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
    "correct_answer": "Don Cherry",
    "incorrect_answers": [
    "Don McKellar",
    "Don Taylor ",
    "Donald Sutherland"
    ]
    }
    ]

    let currentQuestion= 0
    let score = 0
    const initialPage = document.querySelector('#initialPage')
    const quizPage = document.querySelector('#quizPage')
    const footer = document.querySelector('#footer')
    const lastPage = document.querySelector('#lastPage')
    const startBtn= document.querySelector('.startBtn')
    const nextBtn=document.querySelector('.nextBtn')
    const restartBtn= document.querySelector('.restartBtn')
    const previousBtn=document.querySelector('.previousBtn')
    const quizCard = document.getElementById('quizCard') 
    const timeLeft=document.querySelector('.time-left')
    let count =5
    timeLeft.innerHTML= `${count}s`
    let countdown

    let slNumber =currentQuestion+1

    quizArray.sort(() => Math.random() - 0.5)

    function createHeader(){
        const numberOfQuestion=document.querySelector('.number-of-question')
        numberOfQuestion.innerHTML=`${slNumber} of ${quizArray.length} questions`

    }

    // createQuiz()
    function createQuiz() {
        quizCard.innerHTML = ''

        createHeader()

        if(currentQuestion<=quizArray.length-1){

            const questionDiv = document.createElement('h3')
            questionDiv.innerText = slNumber +'.' + quizArray[currentQuestion].question

            const ul =  document.createElement('ul')
            
            const correctAns =quizArray[currentQuestion].correct_answer
            const incorrectAns =quizArray[currentQuestion].incorrect_answers
            
            const options = [correctAns, ...incorrectAns]
            options.sort(() => Math.random() - 0.5).forEach((option, index) => {
                const li =  document.createElement('li')
                const input =  document.createElement('input')
                input.type= "radio"
                input.id = `option${index}`
                input.name = 'answer'
                input.value= option
                if(quizArray[currentQuestion].selected_answer===option){
                    input.checked= true
                }

                li.appendChild(input)

                const label =  document.createElement('label')
                label.for=`option${index}`
                label.innerText=option
                li.appendChild(label)

                ul.appendChild(li)
            })


            
            quizCard.appendChild(questionDiv)
            quizCard.appendChild(ul)

        }else{
            displayLastPage()
        }

        // Hide previous button in first question
        if(currentQuestion===0){
            previousBtn.style.visibility='hidden'
        }else{
            previousBtn.style.visibility='visible'
        }

        // hide next button in last question
        if(currentQuestion=== quizArray.length-1){
            nextBtn.innerText ='Submit'
        }


        const checkboxes = document.querySelectorAll('input[name="answer"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('click', checkScore);
            });

        
    }

    function displayLastPage(){
        quizCard.innerHTML = `<h1>your score is ${score} out of ${quizArray.length}</h1>`
            quizCard.style.textAlign = 'center'
            quizCard.style.marginTop = '20px'
            footer.style.display='none'
            lastPage.style.display='flex'
    }

    // check score
    function checkScore() {
        const selectedAns = document.querySelector('input[name="answer"]:checked');

        if(selectedAns){
            const currentAns = selectedAns.value
            const previousAns = quizArray[currentQuestion].selected_answer
            
            // Update the selected answer
            quizArray[currentQuestion].selected_answer = currentAns

            if(currentAns !== previousAns){
                if(currentAns === quizArray[currentQuestion].correct_answer){
                    score++
                }
                if(previousAns === quizArray[currentQuestion].correct_answer){
                    score--
                }
            }
        }
    }

    // timer 

    function timerDisplay() {

        countdown = setInterval(()=>{
                count--
                timeLeft.innerHTML= `${count}s`
                if(count==0){
                    clearInterval(countdown)
                    displayLastPage()
                }
        },1000)
            
    }

    function startQuiz(){
        initialPage.style.display='none'
        quizPage.classList.remove('d-none')
        timerDisplay()
        createQuiz()
    }

    function displayNextQuesion() {
        currentQuestion++
        createQuiz()
    }

    function displayPreviousQuesion() {
        currentQuestion--
        createQuiz()
    } 

    function restartQuiz(){
        lastPage.style.display='none'
        currentQuestion=0
        startQuiz()
        quizCard.style.textAlign = 'left'
        quizCard.style.marginTop = '10px'
        footer.style.display='flex'
        count=5
        timeLeft.innerHTML= `${count}s`;
    }

   function initial(){

   }
   

   startBtn.addEventListener('click', startQuiz)
   nextBtn.addEventListener('click', displayNextQuesion)
   previousBtn.addEventListener('click', displayPreviousQuesion)
   restartBtn.addEventListener('click',restartQuiz)