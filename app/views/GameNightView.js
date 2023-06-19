export const GameNightView = /*html*/`
<div class="container-fluid bg-dark text-white">
  <div class="row py-3">
    <div class="col-lg-12">
      <h1 class="d-flex justify-content-center fancy-title">
        Game Night!
      </h1>
    </div>
    <div class='col-12 d-flex justify-content-center'>
        <div class='players-container'>
            <form class='d-flex mb-3' onSubmit='app.PlayersController.addPlayer(event)'>
                <div class='me-3'>
                  <label class='d-block' for="playerName">Player Name</label>
                  <input id='playerName' type='text' required maxLength='20' name='name'>
                </div>
                <div>
                  <label class='d-block' for="playerImg">Player Img</label>
                  <input id='playerImg' type='url' required maxLength='250' name='playerImg'>
                  <button type='submit'>ADD PLAYER</button>
                </div>
            </form>
            <div id='players-list'>
            </div>
        </div>
    </div>
  </div>
</div>
`