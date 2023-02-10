const questions = document.querySelectorAll('.question-area');
const answerPadding = 30; // px

questions.forEach((question, i)=> {

    let questionElement = question.children[0].children[0]
    let answerElement = question.children[1]

    questionElement.onclick = () => {
        let answerElementHeight = answerElement.style.height;

        if(answerElementHeight == '' || answerElementHeight == 0){
            answerElement.style.height = answerElement.scrollHeight + answerPadding + 'px'
        } else {
            answerElement.style.height = ''
        }
    }
})