  window.onload = () => {
    const listButton = document.getElementById('add-to-list');    
    const setTextButton = document.getElementById('set-text');
    const userInput = document.getElementById('list-data');

    setTextButton.onclick = () => {
        userInput.value = 'The first item for my list';
    }
     listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
  }
}
  
  
  