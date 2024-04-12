//assigning html element into variables
const textInput=document.getElementById('text-input');
const comfirmParagraph=document.getElementById('comfirm');
const checkButton=document.getElementById('chech-btn');
//establishing the function to determine whether the text is palindrome or not
const textInputArray=()=>{
    //retreiving inputs value inserted by user and kept into variable
    let textInputVAlue=textInput.value
    //reversing inputs inserted by user
    const textInputReversed=textInputVAlue.split('').reverse().join('')
    //removing other characters from reversed string by regex
    const rejectedRegexInReversed = textInputReversed.replace(/[\W,\.\s\_]/gi, '').toLowerCase()
    //removing other characters from inputs inserted by user using regex
    const rejectedRegexInTextInput=textInputVAlue.replace(/[\W,\.\s\_]/gi, '').toLowerCase()
    //checking whether there is inputs inserted before check
    if(rejectedRegexInReversed.length===0){
        alert('Please input a value')
    }
    // comparing the similarity to comfirm the presence of palindrome
    else if(rejectedRegexInReversed===rejectedRegexInTextInput){
        comfirmParagraph.innerHTML=  `<p style="margin-top:20px"><strong>${textInputVAlue} is a palindrome</strong></p>`
      }
      else {comfirmParagraph.innerHTML=  `<p style="margin-top:20px"><strong>${textInputVAlue} is not a palindrome</strong></p>`}
    
}
checkButton.addEventListener('click', textInputArray);

