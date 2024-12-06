nction animate_element(block, from, to){
	let lst = [...from, ...to]
	return block.animate(lst, 
			{ 	duration: 1400,
				iterations: 1,
				fill: "both",
			}); 
}

function open_page(){
	const height = window.innerHeight
	let load_window = animate_element(load, [{top: '0px'}], [{top: `-${height}px`}])
	load_window.onfinish = (event) => {
		load.style.display = 'none'
	}
}

function start_load() {
	const width = window.innerWidth
	const line = document.querySelector('.line')
	const bean = document.querySelector('.whole_bean')
	const beans = [...document.querySelector('.half_bean').children]

	let load = animate_element(line, [{ width : '10px' }], [{ width : `${width + 100}px`,}])
	animate_element(bean, [{ transform : 'rotate(0deg)'}], [{ transform : 'rotate(360deg)' }])

	load.onfinish = (e) => {
		let count = 0
		const intervalId = setInterval((event) => {
			line.style.border = 'none'
			bean.style.display = 'none'
			if(count == 0){
				beans[count].classList.remove('shine')
				count += 1
				beans[count].classList.add('shine')
			} else {
				beans[count].classList.remove('shine')
				count -= 1
				beans[count].classList.add('shine')
			}
		}, 400)

		setTimeout((e) => {
			const shine = document.querySelector('.shine')
			bean.style.display = 'block'
			shine.style.display = 'none'
			clearTimeout(intervalId);
			
			setTimeout((e) => {
				open_page()
			}, 900)
			
			
		}, 5000)
	}	
	
}
start_load()
