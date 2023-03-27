const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
	try {
		fs.writeFile(fileName, fileContent);
		console.log(`file created with name ${fileName}`);
	} catch (err) {
		console.log(err);
	}
};

const myFileReader = async (fileName) => {
	try {
		const data = await fs.readFile(fileName, { encoding: "utf8" });
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

const myFileUpdater = async (fileName, fileContent) => {
	try {
		await fs.appendFile(fileName, fileContent);
		console.log("file updated");
	} catch (err) {
		console.log(err);
	}
};

const myFileDeleter = async (fileName) => {
	try {
		await fs.unlink(fileName);
		console.log("file deleted");
	} catch (err) {
		console.log(err);
	}
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };