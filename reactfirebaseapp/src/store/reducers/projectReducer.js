const initState = {
 projects: [
   { id: 1, title: 'The Croods 3', content: 'The whole world is about to change once again. Once again the Croods set out on an adventurous journey!!! Fun, adventure and stupidity! The Croods againgst the Mother Earth!!!'},
   { id: 2, title: 'Ferdinand II', content: 'Ferdinad and his friends set out on a new adventure! Fun, adventure and romance begins!!! Will Ferdinand finally find his true love???'},
   { id: 3, title: 'How to Train Your Dragon 4', content: 'Tothless and Hiccup fly out once again on a flying adventure!!! Love, friendship and........Dragonssss!!!'},
   { id: 4, title: 'Ratatouille III', content: 'Chef Remy cooks another delicious adventure of flavours, taste and adventure!!! Spices of thrill adventure and fun and many many many more undiscovered savours!!!'},
   { id: 5, title: 'Cars 4', content: 'Lightning is back on tracks!!! The heart-throbbing laps starts once again!!! Once a rookie, once a legend!!! Days bygone!!! Now the rookie is back to gobsmack everyone!!!'},
 ] 
}


function projectReducer(state = initState, action) {
  switch (action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state;       //my added

    default :           //my added
      return state              //my added
  }
  // return state
}

export default projectReducer
