export function constructOptionsQuery() {
  const mondayValue = document.getElementById("checkbox-monday").checked;
  const tuesdayValue = document.getElementById("checkbox-tuesday").checked;
  const wednesdayValue = document.getElementById("checkbox-wednesday").checked;
  const thursdayValue = document.getElementById("checkbox-thursday").checked;
  const fridayValue = document.getElementById("checkbox-friday").checked;

  const glutenValue = document.getElementById("checkbox-gluten").checked;
  const peanutsValue = document.getElementById("checkbox-peanuts").checked;
  const soyValue = document.getElementById("checkbox-soy").checked;
  const nutsValue = document.getElementById("checkbox-nuts").checked;

  var query = window.location.search;
  query = query + (mondayValue ? '&mo' : '');
  query = query + (tuesdayValue ? '&tu' : '');
  query = query + (wednesdayValue ? '&we' : '');
  query = query + (thursdayValue ? '&th' : '');
  query = query + (fridayValue ? '&fr' : '');

  query = query + (glutenValue ? '&gl' : '');
  query = query + (peanutsValue ? '&pe' : '');
  query = query + (soyValue ? '&so' : '');
  query = query + (nutsValue ? '&nu' : '');

  return query;
};

export function parseQuery(query) {

};