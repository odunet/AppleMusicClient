//Search data in list
export const SeachDataAction = (...args) => {
  let pattern = new RegExp(args[1], 'i');
  if (args[0] === 'album') {
    let options = args[2].topAlbum.filter((item) => {
      return pattern.test(item['im:name']['label']);
    });
    return options;
  } else {
    let options = args[2].topMusic.filter((item) => {
      return pattern.test(item['im:name']['label']);
    });
    return options;
  }
};
