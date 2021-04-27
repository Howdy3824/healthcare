// Get visible pdonors

export default (profiles, { text }) => {
  return profiles.filter((profile) => {
      var textMatch;
      if(text === ''){
        textMatch = profile.bgroup.toLowerCase().includes(text.toLowerCase());
      } else {
        textMatch = (profile.bgroup.toLowerCase() !== text.toLowerCase() ) ? false : true ;
      }
    
    return textMatch;
  });
};
