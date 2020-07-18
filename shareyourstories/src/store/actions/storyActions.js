export const createStory = (story)=>{
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    // async call to db
    const firestore = getFirestore();
    firestore.collection('stories').add({
      ...story,
      authorFirstName: 'Ninja',
      authorLastName: 'Supreme',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_STORY', story })
    }).catch((err)=>{
      dispatch({ type: 'CREATE_STORY_ERROR', err })
    })
  }
}