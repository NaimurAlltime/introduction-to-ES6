document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = 'lightBlue';
    }
})

document.getElementById('four-center').addEventListener('click', function(){
    const fourCenter = document.getElementById('center');
    fourCenter.style.textAlign = 'center';
})

// create element 
document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New friend</h3>
      <p>Officia delectus dolore dolorem minima?</p>
    `
    friendContainer.appendChild(friend);
})