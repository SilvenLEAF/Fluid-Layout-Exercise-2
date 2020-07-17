const initState = {
  stories: [
    { title: 'Kungfu Panda 7', content: 'The Legend of Awesomeness!!!'},
    { title: 'Ferdinand II', content: 'Another tour to Spain!!!'},
    { title: 'Frozen 4', content: 'The Queen of Ice!!!'}
  ]
}

const storyReducer = (state = initState, action) => {
  switch (action.type){
    default:
      return state;
  }
}

export default storyReducer