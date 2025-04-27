let flag = true;
function openView(url, createState = true, autoShowState = true){
	mui.openWindow({
		url,
		id: url,
		createNew: createState,
		show: {
			autoShow: autoShowState,
		}
	});
}