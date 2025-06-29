

 let currentindex = 0;
  const track = document.getElementById('interviewTrack');
  const items = track.querySelectorAll('.interview-slide');
  const final = items.length;

  function navigateSlide(direction) {
    currentindex += direction;
    if (currentindex < 0) currentindex = final - 1;
    if (currentindex >= final) currentindex = 0;
    track.style.transform = `translateX(-${currentindex * 100}%)`;
  }






    const players = [
      { id: 1, name: "Babar Azam", img: "https://via.placeholder.com/120?text=Babar+Azam", votes: 0 },
      { id: 2, name: "Player Two", img: "https://via.placeholder.com/120?text=Player+2", votes: 0 },
      { id: 3, name: "Player Three", img: "https://via.placeholder.com/120?text=Player+3", votes: 0 },
      { id: 4, name: "Player Four", img: "https://via.placeholder.com/120?text=Player+4", votes: 0 },
    ];

    const playersContainer = document.getElementById('players-container');

    function renderPlayers() {
      playersContainer.innerHTML = '';
      players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
          <img src="${player.img}" alt="${player.name}" class="player-img" />
          <div class="player-name">${player.name}</div>
          <button class="vote-btn" onclick="votePlayer(${player.id})">Vote</button>
          <div class="votes-count" id="votes-${player.id}">Votes: ${player.votes}</div>
        `;
        playersContainer.appendChild(card);
      });
    }

    function votePlayer(id) {
      const player = players.find(p => p.id === id);
      if (player) {
        player.votes++;
        document.getElementById(`votes-${id}`).textContent = `Votes: ${player.votes}`;
      }
    }

    // Comments feature
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const playerSelected = document.getElementById('player-select').value;
      const commentText = document.getElementById('comment-text').value.trim();
      if (playerSelected && commentText.length > 0) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = `${playerSelected} Fan: ${commentText}`;
        commentsList.prepend(commentDiv);

        alert(`Thank you for your comment to ${playerSelected}!`);

        commentForm.reset();
      }
    });