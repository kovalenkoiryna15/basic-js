module.exports = function createDreamTeam(members) {
  let dreamTeam = '';
  let dreamTeamArr = [];
  if (typeof members !== 'object' || members == null || Array.isArray(members) == false) {
    return false;
  } else {
    members.forEach(elem => {
      if (typeof elem == 'string') {
        elem = elem.trim();
        let dreamTeamItem = elem.substring(0, 1);
        dreamTeamArr.push(dreamTeamItem.toUpperCase());
      } else {
        return false;
      }
    });
  }
  dreamTeam = dreamTeamArr.sort().join('');
  return dreamTeam;
};
