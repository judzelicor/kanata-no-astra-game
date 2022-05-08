function renderStage() {
  engine.STAGE.innerHTML = '';
  engine.STAGE_TILES = [];
  engine.STAGE.style.width = `${engine.STAGE_WIDTH}px`;
  engine.STAGE.style.height = `${engine.STAGE_HEIGHT}px`
  for (let iterator = 0; iterator < engine.STAGE_TILES_COUNT; iterator++) {
    const stageTile = document.createElement('div');
    stageTile.classList.add('tile');
    // stageTile.textContent = iterator;
    engine.STAGE_TILES.push(stageTile);
    engine.STAGE.appendChild(stageTile);
  }
}