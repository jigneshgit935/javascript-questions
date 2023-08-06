function removeItem() {
  console.log('javascript');
  setTimeout(() => removeItem(), 0);
  //   removeItem(); //recusrion function
}

removeItem();
