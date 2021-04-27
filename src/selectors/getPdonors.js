// Get visible pdonors

export default (profiles, { text , atext}) => {
  return profiles.filter((profile) => {
      var textMatch, atextMatch;
      if(text === ''){
        textMatch = profile.bgroup.toLowerCase().includes(text.toLowerCase());
        atextMatch = profile.address.toLowerCase().includes(atext.toLowerCase());
      } else {
        textMatch = (profile.bgroup.toLowerCase() !== text.toLowerCase() ) ? false : true ;
        atextMatch = profile.address.toLowerCase().includes(atext.toLowerCase());
      }
    return textMatch && atextMatch;
  });
};
