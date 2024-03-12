    let quizArray=[]

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

   fetchQuestion()

    quizArray.sort(() => Math.random() - 0.5)

    async function fetchQuestion (){
        try{
            const response = await fetch('https://opentdb.com/api.php?amount=10');
            if(!response.ok){
                throw new Error(`Something went wrong !! Unable to fetch the data`)
            }

            const data = await response.json();
            quizArray=data.results

            console.log(quizArray);

        } catch (error) {
            console.log(error);
            quizPage.innerHTML = `<h5 style='color: red'>
            ${error}</h5>`;
        }
    }

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
   

   startBtn.addEventListener('click', startQuiz)
   nextBtn.addEventListener('click', displayNextQuesion)
   previousBtn.addEventListener('click', displayPreviousQuesion)
   restartBtn.addEventListener('click',restartQuiz)
