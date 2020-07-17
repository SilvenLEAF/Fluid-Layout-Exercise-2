export const createStory = (story)=>{
  return (dispatch, getState) =>{
    // async call to db

    dispatch({
      type: 'CREATE_STORY',
      story: story
    })
  }
}