export const createStory = (story)=>{
  return (dispatch, getState, { getFirebase, getFirestore }) =>{
    // async call to db
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    firestore.collection('stories').add({
      ...story,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_STORY', story })
    }).catch((err)=>{
      dispatch({ type: 'CREATE_STORY_ERROR', err })
    })
  }
}