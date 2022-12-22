function tellStory(ar=["Bojan", "happy", "working"]){
    let story = `This is ${ar[0]}. ${ar[0]} is a nice person.Today they are ${ar[1]}.They are ${ar[2]} all day.The end.`;
    console.log(story);
    return story;
}
tellStory();