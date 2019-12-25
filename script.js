window.addEventListener('load', function(e) {
	this.addEventListener('keydown', e => {

		try {
			let item = document.querySelector(`.key__item[data-audio="${e.keyCode}"]`);
			let audio = document.querySelector(`.audio__item[data-audio="${e.keyCode}"]`)
			if (!audio) throw new Error('ВТФ неправильная клавиша')
			item.classList.toggle('act')
			audio.play()
			audio.currentTime = 0;
		} catch(e) {
			alert(e.message)
		}
	})

	this.addEventListener('keyup', e => {

		try {
			let item = document.querySelector(`.key__item[data-audio="${e.keyCode}"]`);
			let audio = document.querySelector(`.audio__item[data-audio="${e.keyCode}"]`)
			if (!audio) throw new Error('ВТФ неправильная клавиша')
			item.classList.toggle('act')
		} catch(e) {
			console.log('Ее нет')
		}
	})
})