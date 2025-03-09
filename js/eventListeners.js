window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {
      case 'w':
        case 'ц':
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i]
  
          if (
            player.hitbox.position.x + player.hitbox.width <=
              door.position.x + door.width &&
            player.hitbox.position.x >= door.position.x &&
            player.hitbox.position.y + player.hitbox.height >= door.position.y &&
            player.hitbox.position.y <= door.position.y + door.height
          ) {
            player.velocity.x = 0
            player.velocity.y = 0
            player.preventInput = true
            player.switchSprite('enterDoor')
            door.play()
            return
          }
        }
        if (player.velocity.y === 0) player.velocity.y = -25
  
        break
      case 'a':
        case 'ф':
        // move player to the left
        keys.a.pressed = true
        break
      case 'd':
        case 'в':
        // move player to the right
        keys.d.pressed = true
        break
    }
  })
  
  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'a':
        case 'ф':
        // move player to the left
        keys.a.pressed = false
  
        break
      case 'd':
        case 'в':
        // move player to the right
        keys.d.pressed = false
  
        break
    }
})


window.addEventListener('mousedown', (event) => {
  if (event.button === 0) { // Лівий клік миші
      player.attack();
  }
});

