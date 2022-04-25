const getColorImages = (images) => {
	const imagesColorMap = new Map();
	images.forEach((element) => {
		if (imagesColorMap.get(element.fieldname)) {
			imagesColorMap.set(element.fieldname, [
				...imagesColorMap.get(element.fieldname),
				element.path.replaceAll(`\\\\`, `/`).replace(/public/g,""),
			]);
		} else {
			imagesColorMap.set(element.fieldname, [
				element.path.replaceAll(`\\`, `/`).replace(/public/g,""),
      ]);
      console.log(element.path.replaceAll(`\\`, `/`).replace(/public/g,""))
		}
	});
	console.log(imagesColorMap);
	return Object.fromEntries(imagesColorMap);
};

module.exports = getColorImages;
