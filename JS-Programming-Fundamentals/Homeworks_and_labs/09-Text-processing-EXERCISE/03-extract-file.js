function extractFile(path) {
  // create arr and take last element
  let fileInfo = path.split('\\').pop();

  let lastDotIdx = fileInfo.lastIndexOf('.');

  // console.log(lastDotIdx);

  let fileName = fileInfo.slice(0, lastDotIdx);
  let fileExtension = fileInfo.slice(lastDotIdx + 1); //+1 to remove the dot, start from next index

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
