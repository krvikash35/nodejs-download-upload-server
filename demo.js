function uploadFile(){
  let target = event.target || event.srcElement || event.currentTarget;
  let file = target.files[0];
  console.log(target.files);
}