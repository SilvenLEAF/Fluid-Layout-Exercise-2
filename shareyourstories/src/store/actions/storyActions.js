


const storyImagesArr = [
  "StoryBook",
  "VersionControl",
  "BookLover", 
  "ChasingLove", 
  "Couple", 
  "DayOff",
  "DifferentLove",
  "DogWalking",
  "Fall",
  "Friends",
  "Github",
  "Hooked",
  "InLove",
  "IntenseFeeling",
  "LoveHearts",
  "LovingIt",
  "MissedChances",
  "PleasantSurprise",
  "Reading",
  "Review",
  "RomanticGateway",
  "SpreadLove",
  "ThankYouWithLove",  
  "WaitingForYou",
  "Wedding"
]


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
      createdAt: new Date(),
      imgUrl: `/images/StoryImages/${ storyImagesArr[ Math.floor(Math.random()* storyImagesArr.length) ]}.svg`
    }).then(()=>{
      dispatch({ type: 'CREATE_STORY', story })
    }).catch((err)=>{
      dispatch({ type: 'CREATE_STORY_ERROR', err })
    })
  }
}