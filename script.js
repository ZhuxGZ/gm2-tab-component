const tabs = document.querySelectorAll('.tabs li');
const info = document.querySelectorAll('.info');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		info.forEach((infoBlock) => {
			if (infoBlock.dataset.id === tab.dataset.id) {
				tabs.forEach((tab) => tab.classList.remove('active'));
				info.forEach((infoBlock) => infoBlock.classList.remove('active'));
				infoBlock.classList.add('active');
				tab.classList.add('active');
			}
		});
	});
});
