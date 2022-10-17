async function firstSixIncomplete(uid) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await promise.json();
  const posts = result.filter((element) => element.completed == false);
  const slicedArray = posts.slice(0, 6);

  console.log(slicedArray);}

 firstSixIncomplete();