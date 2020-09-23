const windows = [];
windows.push(document.getElementById('profile'));
windows.push(document.getElementById('resume'));
windows.push(document.getElementById('education'));
windows.push(document.getElementById('projects'));
windows.push(document.getElementById('portfolio'));

const hideall = () => {
	windows.forEach((item) => {
		const element = item;
		element.style.display = 'none';
	});
};

const show = (number) => {
	hideall();
	windows[number].style.display = 'block';
};

document.getElementById('icopic-profile').onclick = () => show(0);
document.getElementById('icopic-experience').onclick = () => show(1);
document.getElementById('icopic-education').onclick = () => show(2);
document.getElementById('icopic-projects').onclick = () => show(3);
document.getElementById('icopic-portofolio').onclick = () => show(4);

document.getElementById('profile').style.display = 'block';
