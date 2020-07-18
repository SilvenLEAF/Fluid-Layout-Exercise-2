const initState = {
  
}

const storyReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_STORY':
      console.log('created story', action.story);
      return state;

    case 'CREATE_STORY_ERROR':
      console.log('story creating failed', action.err);
      return state;

    default:
      return state;
  }
}

export default storyReducer