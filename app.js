





const nextQuestionClass = document.querySelector('.nextQuestionClass')
const answer = document.getElementsByName('answer')
// const option3 = document.getElementsByName('option3')
const startButoon = document.querySelector('.startButoon')
const html = document.querySelector('.html')
const css = document.querySelector('.css')
const javaScript = document.querySelector('.javaScript')

html.addEventListener('click', enableBtn)
css.addEventListener('click', enableBtn)
javaScript.addEventListener('click', enableBtn)




startButoon.addEventListener('click',nextQuestion1)
function nextQuestion1(){
    
    console.log('mil gya')
    for (let i = 0; i < answer.length; i++) {
        if(answer[i].checked){
            console.log(answer[i].value)
            const userAnswer = document.querySelector(`.option${answer[i].value}`)
            console.log(userAnswer.innerHTML)
            

            localStorage.setItem("value", JSON.stringify(userAnswer.innerHTML));
            window.location.href = "./quizSelect.html";
            
            
            
          
        }
        
        
    }
    
    nextQuestionClass.disabled = true;
    nextQuestionClass.style.opacity = 0.7;
    nextQuestionClass.style.cursor = 'default';
    
    
}
function enableBtn(){
    nextQuestionClass.disabled = false;
    nextQuestionClass.style.opacity = 1;
    nextQuestionClass.style.cursor = 'pointer';
    

}
